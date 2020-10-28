const { exec } = require("child_process")
const { promisify } = require("util")

const prettier = require("prettier")
const pExec = promisify(exec)
const fs = require("fs")
const yaml = require("yaml")

it.each([["preons-config-input.yaml", "preons-config-output.json"]])(
    "converting a preons config into an expanded config for seeing resolved classes for each css property",
    async (inputFile, outputFile) => {
        let { stdout } = await pExec(
            `src/console/preons config tests/cli/examples/${inputFile}`
        )

        let result = fs.readFileSync(`tests/cli/examples/${outputFile}`, {
            encoding: "utf-8",
        })

        let actual = yaml.parse(stdout)
        let expected = JSON.parse(result)

        expect(actual).toEqual(expected)
    }
)
