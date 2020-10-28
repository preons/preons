const Preons = require("../../types/preons")
const cssom = require("cssom")
const { exec } = require("child_process")
const { promisify } = require("util")

/**
 * Takes A CSSOM rule and checks if it only have one css
 * style declaration.
 *
 * @param {CSSOM.CSSStyleRule} property - Cssom css style rule.
 * @returns {boolean}
 */
const withSingleStyle = (property) => {
    return property.style && property.style.length === 1
}

/**
 * Converts a property into a object that matches the
 * preons class property syntax.
 *
 * @param {CSSOM.CSSStyleRule} property - Css style rule property.
 * @returns {Preons.Property}
 */
const intoSimpleMap = (property) => {
    let ruleName = property.style[0]

    let object = {
        classname: property.selectorText,
        name: ruleName,
        // @ts-ignore
        values: property.style[ruleName],
    }

    return new Preons.Property(object)
}

/**
 * Splits multi css rules into their own rules.
 *
 * @description Given .wp-block,.dlb { display: block: }, it will create two rules.
 *
 * @param {Array<Preons.Property>} accummulative
 * @param {Preons.Property} current
 * @returns {Array<Preons.Property>}
 *
 */
const splitByNonSingularCssRules = (accummulative, current) => {
    let rules = current.class.split(",").filter((x) => x)

    if (rules.length > 1) {
        rules.forEach((rule) => {
            accummulative.push({
                ...current,
                class: rule.replace(/(\r\n|\n|\r|,)/gm, ""),
            })
        })
    } else {
        accummulative.push(current)
    }

    return accummulative
}

/**
 * Removes css rules with spaces in them, as this is not functional.
 *
 * @description Given .wp-block ul { display: block: }, it will remove that rule.
 *
 * @param {Preons.Property} property
 * @returns {boolean}
 *
 */
const ignoreCssSpaceRules = (property) => {
    let isNonFunctionalClass =
        property.class.includes(" ") ||
        property.class.includes("+") ||
        property.class.includes(">") ||
        property.class.includes("~")
    return !isNonFunctionalClass
}

/**
 * Ignores anything that is not a class.
 *
 * @description Given div { display: block: }, it will remove that rule.
 *
 * @param {Preons.Property} property
 * @returns {boolean}
 *
 */
const ignoreElementsCssRule = (property) => {
    return property.class.includes(".")
}

/**
 * Ignores pseudo classes.
 *
 * @description Given .box:hover { display: block: }, it will remove that rule.
 *
 * @param {Preons.Property} property
 * @returns {boolean}
 *
 */
const ignorePseudoClassesRule = (property) => {
    return !property.class.includes(":")
}

/**
 * Groups a property object by properties.
 *
 * @param {any} acc
 * @param {object} cur
 * @param {string} cur.property
 * @param {string} cur.class
 * @param {Array<string>} cur.values
 */
const groupByProperty = (acc, cur) => {
    if (!acc[cur.property]) {
        acc[cur.property] = {
            class: "",
            values: {},
        }
    }

    acc[cur.property].values[cur.class.replace(".", "")] = cur.values
    return acc
}

const breakpoints = ["m", "l", "xl", "xxl"]

/**
 * Takes a css stylesheet in string form and
 * returns an object of breakpoints.
 *
 * @example
 *  getMobileUpMediaQueries(stylesheet) - { m: '720px', 'l': '1000px' }
 *
 * @param {string} string - Css stylesheet.
 * @returns {object}
 */
const getMobileUpMediaQueries = (string) => {
    let regex = /\@media[\w\s]+\([\w-]+:([\s]+)?(\d+)(px|rem|em)\)([\s]+)?\{/gim
    let regex2 = /\@media[\w\s]+\([\w-]+:([\s]+)?(\d+)(px|rem|em)\)([\s]+)?\{/i

    let output = string.match(regex)
    if (Array.isArray(output)) {
        let mapped = output
            .map((i) => {
                let num = i.match(regex2)
                if (num) {
                    return `${num[2]}${num[3]}`
                }
            })
            .filter((i) => i)
            .reduce((acc, current, index) => {
                // @ts-ignore
                acc[breakpoints[index]] = current
                return acc
            }, {})
        return mapped
    }

    return {}
}

/**
 * Transforms a css stylesheet into a preons configuration syntax.
 *
 * @param {string} css - String file.
 * @returns {Promise<object>}
 */
module.exports = async (css) => {
    let parsed = cssom.parse(css)

    let mapped = parsed.cssRules
        // @ts-ignore
        .filter(withSingleStyle)
        // @ts-ignore
        .map(intoSimpleMap)
        .reduce(splitByNonSingularCssRules, [])
        .filter(ignoreCssSpaceRules)
        .filter(ignoreElementsCssRule)
        .filter(ignorePseudoClassesRule)

    // @ts-ignore
    let grouped = mapped.reduce(groupByProperty, {})

    let mediaQueries = getMobileUpMediaQueries(css)

    return {
        preons: {
            rules: {},
            properties: grouped,
            breakpoints: mediaQueries,
        },
    }
}
