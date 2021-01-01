/// <reference path="../../types/preons.js" />
const { exec } = require("child_process")
const { promisify } = require("util")

const prettier = require("prettier")
const pExec = promisify(exec)
const fs = require("fs")
const stylesheet = require("./")
const yaml = require("yaml")
const { Console } = require("console")

const blankLineRegex = /^(?=\n)$|^\s*|\s*$|\n\n+/gm

it.each([["preons-stylesheet-input.yaml", "preons-stylesheet-output.css"]])(
    "converting a preons config into a css file",
    async (inputFile, outputFile) => {
        let input = fs.readFileSync(__dirname + `/examples/${inputFile}`, {
            encoding: "utf-8",
        })

        let output = fs.readFileSync(__dirname + `/examples/${outputFile}`, {
            encoding: "utf-8",
        })

        /**
         * @var {PreonsSet}
         */
        let set = yaml.parse(input)

        let result = stylesheet({ set })

        let actual = prettier
            .format(result, { parser: "css" })
            .replace(blankLineRegex, "")

        let expected = prettier
            .format(output, { parser: "css" })
            .replace(blankLineRegex, "")

        expect(actual).toEqual(expected)
    }
)
