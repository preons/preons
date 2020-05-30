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

/**
 * @param {string} css
 * @return {Promise<object>}
 */
module.exports = async (css) => {
    let parsed = cssom.parse(css);

    let mapped = parsed.cssRules.filter(withSingleStyle).map(intoSimpleMap);

    let grouped = mapped.reduce(groupByProperty, {});

    return {
        preons: {
            rules: {},
            properties: grouped,
            breakpoints: []
        },
    };
};