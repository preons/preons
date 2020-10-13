/**
 * Gets the absolute path from provided path relative to command exection directory.
 *
 * @param {string} path - Path of file or directory.
 */
module.exports.getAbsolute = (path) => {
    if (path.indexOf("/") === 0) {
        return path
    }
    return `${process.cwd()}/${path}`
}
