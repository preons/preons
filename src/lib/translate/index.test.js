const translate = require("./")
const fs = require("fs")
const path = require("path")

it("should extract classes with a single css property", async () => {
    const css = fs.readFileSync(
        path.resolve(__dirname, "examples", "simple.css"),
        {
            encoding: "utf8",
        }
    )

    let translated = await translate(css)

    expect(translated).toEqual({
        preons: {
            rules: {},
            properties: {
                display: {
                    class: "",
                    values: {
                        db: "block",
                        flex: "flex",
                        "inline-flex": "inline-flex",
                    },
                },
                top: {
                    class: "",
                    values: {
                        "top-0": "0",
                        "top-1": "1rem",
                        "top-2": "2rem",
                        "top--1": "-1rem",
                        "top--2": "-2rem",
                    },
                },
                flex: {
                    class: "",
                    values: {
                        "flex-none": "none",
                    },
                },
                "flex-direction": {
                    class: "",
                    values: {
                        "flex-column": "column",
                    },
                },
            },
            breakpoints: {},
        },
    })
})

it.each([
    ["breakpoints.css", { m: "768px", l: "1200px" }],
    ["breakpoints-em.css", { m: "30em", l: "80em" }],
    ["breakpoints-minified.css", { m: "60em" }],
])("should extract all breakpoints", async (file, breakpoints) => {
    const css = fs.readFileSync(path.resolve(__dirname, "examples", file), {
        encoding: "utf8",
    })

    let translated = await translate(css)

    expect(translated).toEqual({
        preons: {
            rules: {},
            properties: {
                display: {
                    class: "",
                    values: {
                        db: "block",
                    },
                },
            },
            breakpoints,
        },
    })
})

it.each([["non-singular-style-rules.css"]])(
    "should split non-singular style rules",
    async (file) => {
        const css = fs.readFileSync(path.resolve(__dirname, "examples", file), {
            encoding: "utf8",
        })

        let translated = await translate(css)

        expect(translated).toEqual({
            preons: {
                rules: {},
                properties: {
                    display: {
                        class: "",
                        values: {
                            "leaflet-marker-icon": "block",
                            "leaflet-marker-shadow": "block",
                        },
                    },
                },
                breakpoints: {},
            },
        })
    }
)
