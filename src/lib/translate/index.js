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
 * eturns an object of breakpoints.
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

    // @ts-ignore
    let mapped = parsed.cssRules.filter(withSingleStyle).map(intoSimpleMap)

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
