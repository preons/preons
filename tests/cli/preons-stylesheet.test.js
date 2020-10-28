const { exec } = require("child_process")
const { promisify } = require("util")

const prettier = require("prettier")
const pExec = promisify(exec)
const fs = require("fs")

const blankLineRegex = /^(?=\n)$|^\s*|\s*$|\n\n+/gm

it.each([["preons-stylesheet-input.yaml", "preons-stylesheet-output.css"]])(
    "converting a preons config into a css file",
    async (inputFile, outputFile) => {
        let { stdout } = await pExec(
            `src/console/preons stylesheet tests/cli/examples/${inputFile}`
        )

        let result = fs.readFileSync(`tests/cli/examples/${outputFile}`, {
            encoding: "utf-8",
        })

        let actual = prettier
            .format(result, { parser: "css" })
            .replace(blankLineRegex, "")
        let expected = prettier
            .format(stdout, { parser: "css" })
            .replace(blankLineRegex, "")

        expect(actual).toEqual(expected)
    }
)
