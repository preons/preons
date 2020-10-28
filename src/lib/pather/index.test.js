const path = require("./index")
const process = require("process")

it.each([
    ["somepath", "/user/app/somepath"],
    ["somepath.file", "/user/app/somepath.file"],
    ["/app/somepath.file", "/app/somepath.file"],
])("correct path resolution", async (userPath, expected) => {
    // Mock out
    process.cwd = () => "/user/app"

    let result = path.getAbsolute(userPath)
    expect(result).toBe(expected)
})

test("correct path resolution in different user path", () => {
    // Mock out
    process.cwd = () => "/var/www"

    let result = path.getAbsolute("some.file")
    expect(result).toBe("/var/www/some.file")
})
