const { exec } = require("child_process")
const { promisify } = require("util")

const prettier = require("prettier")
const pExec = promisify(exec)
const fs = require("fs")

const blankLineRegex = /^(?=\n)$|^\s*|\s*$|\n\n+/gm

it("should create a css stylesheet from a preons config", async () => {
    let { stdout } = await pExec(
        "src/console/preons stylesheet tests/cli/examples/preons-stylesheet-input.yaml"
    )

    let result = fs.readFileSync(
        "tests/cli/examples/preons-stylesheet-output.css",
        { encoding: "utf-8" }
    )

    let actual = prettier
        .format(result, { parser: "css" })
        .replace(blankLineRegex, "")
    let expected = prettier
        .format(stdout, { parser: "css" })
        .replace(blankLineRegex, "")

    expect(actual).toEqual(expected)
})
