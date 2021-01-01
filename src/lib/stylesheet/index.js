/// <reference path="../../types/preons.js" />

const fs = require("fs")
const path = require("path")
const prettier = require("prettier")
const sass = require("sass")

/**
 * Converts Preons rules into a sass map .
 *
 * @param {import("../../types/preons").PreonsSet} set - Preons data set.
 * @returns {string}  Rule sass map.
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
 * Creates baseline sass variable.
 *
 * @param {import("../../types/preons").PreonsSet} set - Preons config.
 * @returns {string} Baseline sass variable.
 */
const baseline = (set) => {
    return `$baseline: ${set.preons.baseline};`
}

/**
 * Creates breakpoints sass.
 *
 * @param {import("../../types/preons").PreonsSet} set - Preons config.
 * @returns {string} Breakpoints sass map.
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
 * @returns {string} - Preonize function sass.
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
 * @param {import("../../types/preons").PreonsSet} set - Preons config.
 * @returns {string} Sass string.
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
 * @param {object} input - Input object.
 * @param {import("../../types/preons").PreonsSet} input.set - The Preons config format.
 * @param {('css'|'scss')} [input.outType] - Type of stylesheet output string.
 * @returns {string} Preons sass or css stylesheet.
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
