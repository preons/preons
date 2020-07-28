# Conventions

## Rules

### Breakpoints

-   `m` - medium `768px`
-   `l` - large `1024px`

The translator will generate `m, l, xl, xxl` from existing css files.

Breakpoint flags come after the Preons functional class. eg. `d-bl` at _medium_ breakpoint is `d-bl-m`.

### Percentages

Percentages are separated from the class prefix by a hyphen and the percentage is represented. So `margin-left: 10%` would be `m-10` and `margin-left: 20%` is `m-20`. This is so it can be differentiated with scaled numbers.

### Scaled numbers

Regardless of whether the system used is pixels, rems or others units, for scales, the suffix directly follows the class.

`margin-left: 1rem` is `ml1`. However, `ml1` doesn't have to be `1rem`. If the scale is in lots of `1.4rem`, then `ml1` would be `margin-left: 1.4rem`. In preons, the scale is generally in lots of `1rem`.

### Negative numbers

These will be followed by `x`. So `ml1` represents `margin-left: 1rem` and `ml1x` represents `margin-left: -1rem`.

### None

While it's tempting to have `none` and `0` be represented by the same suffix, the Preons convention separates them to prevent clashing.

-   `none` is `n` or `no`. eg. `display: none` should be `d-no`. Before, there were inconsitencies on how none was applied.
-   `0` is `0`. eg. `margin-left: 0` is `ml0`.

### Suffixes as words

Most rules use a single letter suffix or number. However, there are some instances where its been found beneficial to be verbose for clarity. For instance, `.dn { display:none }` has become `.d-no { display: none }`.

### No prefix

Some rules can have no prefix as its not needed.

-   Colors
-   Overflows

### Words separated by hyphens

Whilst Preons favours shortened syntax, where suffixes are words, these should always be separated by hyphens. eg. `overflow-y: hidden` is `y-hidden`.

It also means, if a suffix is only one letter, it should not be separated by a hyphen.

The only exception is the float rule but this could be changed in future.

### Box model

Paddings, borders and margins should have the following convention.

-   `<prefix>l` is _left_ side eg. `ml` is `margin-left`
-   `<prefix>l` is _right_ side eg. `mr` is `margin-right`
-   `<prefix>l` is _top_ side eg. `mt` is `margin-top`
-   `<prefix>l` is _bottom_ side eg. `mb` is `margin-bottom`
-   `<prefix>l` is _all_ sides eg. `ma` is `margin`

## Changes

### Flex rules

Current, `items-` refers to `align-items`. However, `justify-items` is not accounted for.

So the following convention will be adopted.

```css
// items
.ai-start {
    align-items: start;
}
.ji-start {
    justify-items: start;
}

// self
.as-start {
    align-self: start;
}
.js-start {
    justify-self: start;
}

// content
.ac-start {
    align-content: start;
}
.jc-start {
    justify-content: start;
}
```

### Baselines

Because the original baseline started a `1.5 * $baseline`, this meant to have smaller units, `-1` etc were used. This causes confusion where it seems like it should be a bigger number. Instead, the smallest unit is `0.5 * $baseline` starting unit `1`, and not `0`.

### Background attachment

background-attachment scroll was `bga-s`.

This can be confusing in terms of convention inconsistencies. Even though there is no `-s` breakpoint, a single letter shouldn't suffix after a hyphen.

Now it's `bga-sc`.

### Background repeat

```yaml
background-repeat:
    class: bgr-
    values:
        rp: repeat
        rpx: repeat-x
        rpy: repeat-y
        sp: space
        ro: round
        nrp: no-repeat
```

Before, some elements values were single characters, and so there'd be a mixture of `bgr-r` and `bgr-rx`.

Now all values have two characters or more and the `repeat` keyword is used consistently eg. `rp` for `repeat` and `nrp` for `no-repeat`.

### Font weights

Before, there was an inconsistency of `fwxb`. Now, we don't have `xb`. We instead would use `fw9` or the appropriate font weight value. `l`, `n` and `b` still represent `light`, `normal` and `bold`.

```yaml
font-weight:
    class: fw
    values:
        l: 300
        n: 400
        b: 700
        1: 100
        2: 200
        3: 300
        4: 400
        5: 500
        6: 600
        7: 700
        8: 800
        9: 900
```

### Display

This is a big change as I've grown accustom to using `db`. But again, trying to keep things consistent for easier memory, it'll be `d-bl`, which makes sense. Also `d-inbl` looks like `inline-block`. The only exception here will be `none`.

Even though the global rule for none is `n`, that's only if it's not separated by a hyphen.

```yaml
display:
    class: d-
    values:
        bl: block
        in: inline
        inbl: inline-block
        ta: table
        fl: flex
        infl: inline-flex
        no: none
```
