const cssom = require("cssom");
const {
    exec
} = require("child_process");
const {
    promisify
} = require("util");

const pExec = promisify(exec);

const preons = {
    properties: {
        display: null,
    },
};

const withSingleStyle = (property) => {
    return property.style && property.style.length === 1;
};

/**
 *
 */
const intoSimpleMap = (property) => {
    let ruleName = property.style[0];
    return {
        class: property.selectorText,
        property: ruleName,
        value: property.style[ruleName],
    };
};

const groupByProperty = (acc, cur) => {
    if (!acc[cur.property]) {
        acc[cur.property] = {
            class: "",
            values: {},
        };
    }

    acc[cur.property].values[cur.class.replace(".", "")] = cur.value;
    return acc;
};

const breakpoints = ['m', 'l', 'xl', 'xxl']

const getMobileUpMediaQueries = (string) => {
    let regex = /\@media[\w\s]+\([\w-]+:([\s]+)?(\d+)(px|rem|em)\)([\s]+)?\{/img
    let regex2 = /\@media[\w\s]+\([\w-]+:([\s]+)?(\d+)(px|rem|em)\)([\s]+)?\{/i

    let output = string.match(regex);
    if (Array.isArray(output)) {
        let mapped = output.map(i => {
                let num = i.match(regex2)
                if (num) {
                    return `${num[2]}${num[3]}`
                }
            })
            .filter(i => i)
            .reduce((acc, current, index) => {
                acc[breakpoints[index]] = current;
                return acc
            }, {})
        return mapped
    }

    return {}
}

/**
 * @param {string} css string file
 * @return {Promise<object>}
 */
module.exports = async (css) => {
    let parsed = cssom.parse(css);

    let mapped = parsed.cssRules.filter(withSingleStyle).map(intoSimpleMap);

    let grouped = mapped.reduce(groupByProperty, {});

    let mediaQueries = getMobileUpMediaQueries(css)

    return {
        preons: {
            rules: {},
            properties: grouped,
            breakpoints: mediaQueries
        },
    };
};