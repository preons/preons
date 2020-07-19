# Translate

The translator will take a css file, and convert it into the preons.yaml. This means users who didn't start with preons can migrate easily. Once migrated, they can generate their own documentation also from the preons config. It's also easier to make changes and generate a stylesheet once again.

[![asciicast](https://asciinema.org/a/348405.svg)](https://asciinema.org/a/348405)

## How to use it

```bash
preons translate your.css
```

This will generate the preons yaml config with all the functional rules in the stylesheet.

```bash
preons translate your.css > your.preons.yaml
```

Afterwards, that config can be tweaked and/or converted into a stylesheet again in whatever css stylesheet language you choose.

```bash
preons stylesheet your.preons.yaml
```

## Piping

The intermediate config file can be skipped and the CSS be generated automatically. This is more to highlight the flexibility of the CLI tool rather than there being a real use case.

```bash
preons translate tachyons.css | preons stylesheet > generated.css
```

## Principles

The reverse generator doesn't try to interpret unique rules at each breakpoint. Only the mobile breakpoint gets converted. Also, it doesn't try to create styles with multiple rules. That's a convention in Preons. But there's nothing stopping preons from having composable types in future.

## Notes

The translator was almost going to have a custom css parser but in fact, it's not needed. About 20 minutes into it, I wondered if someone has already created this. Indeed they have.

https://www.npmjs.com/package/cssom

cssom has almost 7 million downloads in a week. So it's worth using this than spending time creating a new one.
