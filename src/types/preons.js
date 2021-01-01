/**
 * Property dto.
 *
 * @property {object} values - One off css stylesheet rules.
 * @property {Array} rule - List of ready defined css rules.
 * @property {string} class - Class prefix.
 * @property {string} property - Class property eg. Background-colour.
 */
module.exports.Property = class {
    /**
     * Property class constructor.
     *
     * @param {object} args - Input object.
     * @param {object} [args.values={}] - Object of css key and values.
     * @param {Array<string>} [args.rule=[]] - Array of ready defined css rules.
     * @param {string} [args.classname] - Name of css class prefix.
     * @param {string} [args.name] - Name of string.
     */
    constructor({ values = {}, rule = [], classname, name }) {
        this.values = values
        this.rule = rule
        this.class = classname || ""
        this.property = name
    }
}

/**
 * @typedef {object} PreonsSet
 * @property {object} preons
 * @property {string} preons.baseline
 * @property {object} preons.rules
 * @property {object} preons.properties
 * @property {object} preons.breakpoints
 */
