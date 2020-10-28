const { exec } = require("child_process")
const { promisify } = require("util")

const prettier = require("prettier")
const pExec = promisify(exec)
const fs = require("fs")

const blankLineRegex = /^(?=\n)$|^\s*|\s*$|\n\n+/gm

it.each([
    ["preons-docs-markdown-input.yaml", "preons-docs-markdown-output.md"],
])(
    "converting a preons config into documentation",
    async (inputFile, outputFile) => {
        let { stdout } = await pExec(
            `src/console/preons docs tests/cli/examples/${inputFile}`
        )

        let result = fs.readFileSync(`tests/cli/examples/${outputFile}`, {
            encoding: "utf-8",
        })

        let actual = prettier
            .format(result, { parser: "markdown" })
            .replace(blankLineRegex, "")
        let expected = prettier
            .format(stdout, { parser: "markdown" })
            .replace(blankLineRegex, "")

        expect(actual).toEqual(expected)
    }
)
