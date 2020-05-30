const translate = require("./");
const fs = require("fs");
const path = require("path");
const css = fs.readFileSync(path.resolve(__dirname, "index.example.css"), {
  encoding: "utf8",
});

it("should extract a class with a single css property", async () => {
  let translated = await translate(css);

  expect(translated).toEqual({
    preons: {
      rules: {},
      properties: {
        display: {
          class: "",
          values: { db: "block", flex: "flex", "inline-flex": "inline-flex" },
        },
        right: {
          class: "",
          values: {
            "right-0": "0",
            "right-1": "1rem",
            "right-2": "2rem",
            "right--1": "-1rem",
            "right--2": "-2rem",
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
        left: {
          class: "",
          values: {
            "left-0": "0",
            "left-1": "1rem",
            "left-2": "2rem",
            "left--1": "-1rem",
            "left--2": "-2rem",
          },
        },
        flex: { class: "", values: { "flex-none": "none" } },
        "flex-direction": { class: "", values: { "flex-column": "column" } },
        bottom: {
          class: "",
          values: {
            "bottom-0": "0",
            "bottom-1": "1rem",
            "bottom-2": "2rem",
            "bottom--1": "-1rem",
            "bottom--2": "-2rem",
          },
        },
      },
      breakpoints: [],
    },
  });
});
