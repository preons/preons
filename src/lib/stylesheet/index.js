const fs = require("fs")
const path = require("path")
const prettier = require("prettier")
const sass = require("sass")

/**
 * @param {import("../../types/preons").PreonsSet} set - Preons data set.
 * @returns {string}
 */
const sassMaps = (set) => {
    return Object.entries(set.preons.rules)
        .map(([key, values]) => {
            return `$${key}: (
      ${Object.entries(values)
          .map(([key, value]) => `"${key}": ${value}`)
          .join(",\n")}
      );`
        })
        .join("\n")
}

/**
 * Creates baseline sass.
 *
 * @param {import("../../types/preons").PreonsSet} set
 * @returns {string}
 */
const baseline = (set) => {
    return `$baseline: ${set.preons.baseline};`
}

/**
 * Creates breakpoints sass.
 *
 * @param {import("../../types/preons").PreonsSet} set
 * @returns {string}
 */
const breakpoints = (set) => {
    return `$breakpoints: (
    ${Object.entries(set.preons.breakpoints)
        .map(([key, value]) => `"${key}": ${value}`)
        .join(",\n")}
  );`
}

/**
 * Creates preonize functions sass string.
 *
 * @returns {string}
 */
const preonize = () => {
    return fs.readFileSync(
        path.join(__dirname, "..", "..", "scss", "_preonize.scss"),
        { encoding: "utf-8" }
    )
}

/**
 * Creates preons rules in sass form.
 *
 * @param {import("../../types/preons").PreonsSet} set
 * @returns {string}
 */
const preons = (set) => {
    let properties = Object.entries(set.preons.properties)

    let mapping = properties.map(([property, rules]) => {
        if (!rules) {
            return ""
        }

        let mappedRules = Array.isArray(rules["rule"])
            ? rules["rule"].map((x) => "$" + x).join(",")
            : "$" + rules["rule"]

        let mappedSass = rules["values"]
            ? `$${property}: ( ${Object.entries(rules["values"])
                  .map(([key, value]) => `${key}:${value}`)
                  .join(",")} );`
            : null

        if (mappedSass) {
            return `
        ${mappedSass}
        @include preonize("${
            rules["class"] || ""
        }", ${property}, map-collect($${property}), $breakpoints);
      `
        }

        return `@include preonize("${
            rules["class"] || ""
        }", ${property}, map-collect(${mappedRules}), $breakpoints);`
    })

    return mapping.join("\n")
}

/**
 * Creates preons rules in sass or css form.
 *
 * @param {object} input
 * @param {import("../../types/preons").PreonsSet} input.set
 * @param {('css'|'scss')} [input.outType]
 * @returns {string}
 */
module.exports = ({ set, outType = "css" }) => {
    let formatted = prettier.format(
        `
        ${baseline(set)}

        ${sassMaps(set)}
        ${breakpoints(set)}
        ${preonize()}
        ${preons(set)}
      `,
        {
            semi: false,
            parser: "scss",
            printWidth: 120,
        }
    )

    if (outType === "scss") return formatted

    let compiled = sass.renderSync({
        data: formatted,
    })

    return compiled.css.toString()
}
