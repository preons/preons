const { exec } = require("child_process")
const { promisify } = require("util")

const yaml = require("yaml")
const pExec = promisify(exec)
const fs = require("fs")

it.each([["preons-translate-input.css", "preons-translate-output.yaml"]])(
    "converting a css into a preons config",
    async (inputFile, outputFile) => {
        let { stdout } = await pExec(
            `src/console/preons translate tests/cli/examples/${inputFile}`
        )

        let actual = yaml.parse(stdout)
        let expected = yaml.parse(
            fs.readFileSync(`tests/cli/examples/${outputFile}`, {
                encoding: "utf-8",
            })
        )

        expect(actual).toEqual(expected)
    }
)
