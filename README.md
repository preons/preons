# Preons

A functional CSS library and utility belt to start:

- building UIs quickly
- create customized functional css stylesheets
- systemize website UI designs

[Getting started](#-getting-started) | [Examples](#-examples) | [Themes](#-themes) | [CLI](#-cli) | [Configuration](#-configuration) | [Reference](#-reference) | [Roadmap](#-roadmap)

![](https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3408&q=80)

> Inspired by [Tachyons](https://github.com/tachyons-css/tachyons)

## 🔬Currently Under Development

This repo is subject to lots of changes as it's in prime experimental mode. See _going from [0.0.0 to 1.0.0](/docs/notes/2020-05.md#experimental-mode)_.

## 🚀 Getting started

### Quick build

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Preons docs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:wght@200;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" />
    <link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" />
  </head>

  <body class="bg-grey">
    <div class="pa3 ff-raleway fwn lh1 fs1 wrap black">
      <h1 class="ff-dosis fs4 lh3 mb2">Preons</h1>
      <ul class="">
        <li>
          <a href="./examples/components/avatars.html" class="tdx hotpink"
            >Avatars</a
          >
        </li>
        <li>
          <a href="./examples/components/buttons.html" class="tdx hotpink"
            >Buttons</a
          >
        </li>
        <li>
          <a href="./examples/components/cards.html" class="tdx hotpink"
            >Cards</a
          >
        </li>
      </ul>
    </div>
  </body>
</html>
```

### Install via npm

```bash
npm install preons
```

Import scss:

```scss
@import "~preons/dist/preons";
```

## 💎 Examples

- [Avatars](/examples/components/avatars.html)
- [Buttons](/examples/components/buttons.html)
- [Cards](/examples/components/cards.html)

## 💠 Themes

Coming soon

## 💻 CLI

<!-- Config -->

```bash
Usage: preons [options] [command]

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  stylesheet [name]  Generates a stylesheet
  config [name]      Converts config
  help [command]     display help for command
```

<!-- Config -->

## 🗒 Configuration

Example [preons.yaml](/config/preons.yaml).

### Preons yaml structure

```yaml
preons:
  baseline: # Baseline rule

  rules:
    # Object reusable rules

  properties:
    # Css properties

  breakpoints:
    # Stylesheet breakpoints
```

### Baseline

This is the veritical rhythm of your stylesheet.

### Rules

These are reusable rules across multiple css properties.

```yaml
preons:
  theme-colors:
    black: "#242027"
    white: "#f4f2f9"
    greyl: "#beb9cc"
    grey: "#7d778e"
    greyd: "#312948"
    transparent: "transparent"
    hotpink: "#ea2889"
```

### Properties

These are css properties and the functional css prefix.

## Preonize Function

The preonize function is currently an scss function. It allows Preons to generate lots of rules at multiple breakpoints without having to hardcode each CSS class.

It has 4 parameters.

```plain
@include preonize(
  <class name>,       # The prefix name of the class eg. 'h' for height
  <css property>,     # The css property assigned to the class 'height'
  <sass map rules>,   # Sass map of rules eg. (1: 1rem, 2: 2rem)
  <breakpoints>       # Breakpoints
);
```

Thus, we can reuse different sass-maps for several rules. Here's an example use:

```scss
@include preonize(
  "h",
  width,
  map-collection(scaled, percentaged, discrete, special-sizes),
  $breakpoints
);
```

## 📚 Reference

Look up the reference [here](https://preons.netlify.app/search) or peruse them below.

<!-- Reference -->

<!-- sReference -->

## 🛠 Functional CSS

Coming soon

## 🗺️ Roadmap

My mission with Preons is to componentize the Web's UI and make building them fast, systemized, and available to all sorts of people regardless of coding ability.

- [ ] Preons documentation
- [x] Cheatsheet lookup (reference)
- [x] Configuaration syntax
- [ ] CLI
  - [x] Sass generator
  - [x] Css generator
  - [ ] References generator
  - [ ] Documentation generator
  - [ ] Components generator
  - [ ] Reverse generator. Create preons.yaml from functional css styles
- [ ] Tests
  - [ ] CLI
  - [ ] UI

## ⛓ Versioning

This project uses [SemVer](http://semver.org/) for versioning and [Intuit's Auto](https://intuit.github.io/auto/) to generate releases on the fly. For the versions available, see the [tags on this repository](https://github.com/preons/preons/tags).

## 🙌 Thank yous

- [Intuit's Auto](https://intuit.github.io/auto/) for making releases easier
- [Unsplash](https://unsplash.com/) for the title image

## 🔖 Licence

You are free to modify and do as you choose to this library however, it uses [GPLv2.1](#LICENSE) to keep it free for all into the future. Of course, you can commercialize your product where this library is part of a larger piece of work and is merely a dependency.

Here's a really helpful video explanation of GPL licences in general.

https://www.youtube.com/watch?v=JlIrSMzF8T4

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://getrentr.com"><img src="https://avatars0.githubusercontent.com/u/4562670?v=4" width="100px;" alt=""/><br /><sub><b>Gemma Black</b></sub></a><br /><a href="https://github.com/preons/preons/commits?author=gemmadlou" title="Documentation">📖</a> <a href="https://github.com/preons/preons/commits?author=gemmadlou" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
