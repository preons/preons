# Translate

- The translator will take a css file, and convert it into the preons.yaml.
- This means users who didn't start with preons can migrate easily.
- Once migrated, they can generate their own documentation easily.
- They will also be able to make changes to their functional library using the config

## How to use it

```bash
preons translate your.css > your.preons.yaml
```

## Notes

The translator was almost going to have a custom css parser but in fact, it's not needed. About 20 minutes into it, I wondered if someone has already created this. Indeed they have.

https://www.npmjs.com/package/cssom

cssom has almost 7 million downloads in a week. So it's worth using this than spending time creating a new one.
