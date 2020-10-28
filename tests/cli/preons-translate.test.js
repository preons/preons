const { exec } = require("child_process")
const { promisify } = require("util")

const yaml = require("yaml")
const pExec = promisify(exec)
const fs = require("fs")

it("should create a yaml config file with preon syntax", async () => {
    let { stdout } = await pExec(
        "src/console/preons translate tests/cli/examples/preons-translate-input.css"
    )

    let actual = yaml.parse(stdout)
    let expected = yaml.parse(
        fs.readFileSync("tests/cli/examples/preons-translate-output.yaml", {
            encoding: "utf-8",
        })
    )

    expect(actual).toEqual(expected)
})
