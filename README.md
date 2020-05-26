# Preons 🛰

A functional CSS library and utility belt to start:

- building UIs quickly
- create customized functional css stylesheets
- systemize website UI designs

[Getting started](#-getting-started) | [Examples](#-examples) | [Themes](#-themes) | [CLI](#-cli) | [Configuration](#-configuration) | [Reference](#-reference) | [Roadmap](#-roadmap)

![](https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3408&q=80)

> Inspired by [Tachyons](https://github.com/tachyons-css/tachyons)

## 🔬Currently Under Development

This repo is subject to lots of changes as it's in prime experimental mode. See _going from [0.0.0 to 1.0.0](/docs/notes/2020-05.md#experimental-mode)_.

## 🚀 Documentations

Get started [here](https://www.preons.co/learn/#build-the-ui).

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

### background-image

| class             | value                                                                              |
| ----------------- | ---------------------------------------------------------------------------------- |
| bgi-trans-to-blue | linear-gradient(0, rgb(30, 21, 58) 10%, rgb(41, 32, 70) 40%, rgba(9,9,121,0) 100%) |
| bgi-trans-to-pink | linear-gradient(41deg, rgba(255,255,255,1) 12%, rgba(234,40,137,1) 100%)           |

### background-attachment

| class | value   |
| ----- | ------- |
| bga-s | scroll  |
| bga-f | fixed   |
| bga-l | local   |
| bga-i | initial |
| bga-x | inherit |

### background-color

| class          | value       |
| -------------- | ----------- |
| bg-black       | #242027     |
| bg-white       | #fefeff     |
| bg-greyll      | #f6f5f9     |
| bg-greyl       | #beb9cc     |
| bg-grey        | #7d778e     |
| bg-greyd       | #47454c     |
| bg-transparent | transparent |
| bg-hotpink     | #ea2889     |

### background-position

| class     | value  |
| --------- | ------ |
| bgpcenter | center |
| bgpright  | right  |
| bgpleft   | left   |

### background-position-x

| class       | value  |
| ----------- | ------ |
| bgpx-center | center |
| bgpx-right  | right  |
| bgpx-left   | left   |

### background-position-y

| class       | value  |
| ----------- | ------ |
| bgpy-center | center |
| bgpy-right  | right  |
| bgpy-left   | left   |

### background-repeat

| class  | value     |
| ------ | --------- |
| bgr-rx | repeat-x  |
| bgr-r  | repeat    |
| bgr-s  | space     |
| bgr-ro | round     |
| bgr-nr | no-repeat |

### border-bottom-width

| class | value |
| ----- | ----- |
| bwb0  | 0     |
| bwb1  | 1px   |
| bwb2  | 2px   |
| bwb3  | 3px   |
| bwb4  | 4px   |
| bwb5  | 5px   |

### border-top-width

| class | value |
| ----- | ----- |
| bwt0  | 0     |
| bwt1  | 1px   |
| bwt2  | 2px   |
| bwt3  | 3px   |
| bwt4  | 4px   |
| bwt5  | 5px   |

### border-right-width

| class | value |
| ----- | ----- |
| bwr0  | 0     |
| bwr1  | 1px   |
| bwr2  | 2px   |
| bwr3  | 3px   |
| bwr4  | 4px   |
| bwr5  | 5px   |

### border-left-width

| class | value |
| ----- | ----- |
| bwl0  | 0     |
| bwl1  | 1px   |
| bwl2  | 2px   |
| bwl3  | 3px   |
| bwl4  | 4px   |
| bwl5  | 5px   |

### border-width

| class | value |
| ----- | ----- |
| bwa0  | 0     |
| bwa1  | 1px   |
| bwa2  | 2px   |
| bwa3  | 3px   |
| bwa4  | 4px   |
| bwa5  | 5px   |

### border-bottom-color

| class           | value       |
| --------------- | ----------- |
| bcb-black       | #242027     |
| bcb-white       | #fefeff     |
| bcb-greyll      | #f6f5f9     |
| bcb-greyl       | #beb9cc     |
| bcb-grey        | #7d778e     |
| bcb-greyd       | #47454c     |
| bcb-transparent | transparent |
| bcb-hotpink     | #ea2889     |

### border-top-color

| class           | value       |
| --------------- | ----------- |
| bct-black       | #242027     |
| bct-white       | #fefeff     |
| bct-greyll      | #f6f5f9     |
| bct-greyl       | #beb9cc     |
| bct-grey        | #7d778e     |
| bct-greyd       | #47454c     |
| bct-transparent | transparent |
| bct-hotpink     | #ea2889     |

### border-left-color

| class           | value       |
| --------------- | ----------- |
| bcl-black       | #242027     |
| bcl-white       | #fefeff     |
| bcl-greyll      | #f6f5f9     |
| bcl-greyl       | #beb9cc     |
| bcl-grey        | #7d778e     |
| bcl-greyd       | #47454c     |
| bcl-transparent | transparent |
| bcl-hotpink     | #ea2889     |

### border-right-color

| class           | value       |
| --------------- | ----------- |
| bcr-black       | #242027     |
| bcr-white       | #fefeff     |
| bcr-greyll      | #f6f5f9     |
| bcr-greyl       | #beb9cc     |
| bcr-grey        | #7d778e     |
| bcr-greyd       | #47454c     |
| bcr-transparent | transparent |
| bcr-hotpink     | #ea2889     |

### border-color

| class           | value       |
| --------------- | ----------- |
| bca-black       | #242027     |
| bca-white       | #fefeff     |
| bca-greyll      | #f6f5f9     |
| bca-greyl       | #beb9cc     |
| bca-grey        | #7d778e     |
| bca-greyd       | #47454c     |
| bca-transparent | transparent |
| bca-hotpink     | #ea2889     |

### border-style

| class      | value  |
| ---------- | ------ |
| bsa-solid  | solid  |
| bsa-dotted | dotted |
| bsa-dashed | dashed |

### border-bottom-style

| class      | value  |
| ---------- | ------ |
| bsb-solid  | solid  |
| bsb-dotted | dotted |
| bsb-dashed | dashed |

### border-top-style

| class      | value  |
| ---------- | ------ |
| bst-solid  | solid  |
| bst-dotted | dotted |
| bst-dashed | dashed |

### border-right-style

| class      | value  |
| ---------- | ------ |
| bsr-solid  | solid  |
| bsr-dotted | dotted |
| bsr-dashed | dashed |

### border-left-style

| class      | value  |
| ---------- | ------ |
| bsl-solid  | solid  |
| bsl-dotted | dotted |
| bsl-dashed | dashed |

### border-radius

| class  | value |
| ------ | ----- |
| bra1   | .5rem |
| bra2   | 1rem  |
| bra3   | 2rem  |
| bra4   | 3rem  |
| bra5   | 4rem  |
| bra6   | 5rem  |
| bra-50 | 50%   |

### clear

| class | value |
| ----- | ----- |
| cb    | both  |

### color

| class       | value       |
| ----------- | ----------- |
| black       | #242027     |
| white       | #fefeff     |
| greyll      | #f6f5f9     |
| greyl       | #beb9cc     |
| grey        | #7d778e     |
| greyd       | #47454c     |
| transparent | transparent |
| hotpink     | #ea2889     |

### cursor

| class       | value       |
| ----------- | ----------- |
| pointer     | pointer     |
| help        | help        |
| wait        | wait        |
| crosshair   | crosshair   |
| not-allowed | not-allowed |
| zoom-in     | zoom-in     |
| grab        | grab        |

### display

| class | value        |
| ----- | ------------ |
| db    | block        |
| di    | inline       |
| dib   | inline-block |
| dt    | table        |
| df    | flex         |
| dfl   | inline-flex  |
| dn    | none         |

### float

| class | value |
| ----- | ----- |
| flr   | right |
| fll   | left  |
| fln   | none  |

### font-family

| class      | value                  |
| ---------- | ---------------------- |
| ff-raleway | #{Raleway, sans-serif} |

### font-size

| class | value    |
| ----- | -------- |
| fs0   | 1.60rem  |
| fs1   | 2.133rem |
| fs2   | 2.843rem |
| fs3   | 3.790rem |
| fs4   | 5.522rem |
| fs5   | 6.734rem |
| fs6   | 8.976rem |
| fs7   | 11.966re |
| fs-2  | .90rem   |
| fs-1  | 1.2rem   |

### font-style

| class | value  |
| ----- | ------ |
| fxn   | normal |
| fxi   | italic |

### font-weight

| class | value |
| ----- | ----- |
| fwl   | 300   |
| fwn   | 400   |
| fwb   | 700   |
| fwxb  | 900   |

### height

| class      | value            |
| ---------- | ---------------- |
| h0         | 0                |
| h1         | \$baseline \* 1  |
| h2         | \$baseline \* 2  |
| h3         | \$baseline \* 3  |
| h4         | \$baseline \* 4  |
| h5         | \$baseline \* 5  |
| h6         | \$baseline \* 6  |
| h7         | \$baseline \* 7  |
| h8         | \$baseline \* 8  |
| h9         | \$baseline \* 9  |
| h10        | \$baseline \* 10 |
| h11        | \$baseline \* 11 |
| h12        | \$baseline \* 12 |
| h-5        | 5%               |
| h-10       | 10%              |
| h-15       | 15%              |
| h-20       | 20%              |
| h-25       | 25%              |
| h-30       | 30%              |
| h-35       | 35%              |
| h-40       | 40%              |
| h-45       | 45%              |
| h-50       | 50%              |
| h-55       | 55%              |
| h-60       | 60%              |
| h-65       | 65%              |
| h-70       | 70%              |
| h-75       | 75%              |
| h-80       | 80%              |
| h-85       | 85%              |
| h-90       | 90%              |
| h-95       | 95%              |
| h-100      | 100%             |
| h-wire     | 1px              |
| h-thin     | 3px              |
| h-xxxsmall | 5px              |
| h-xxsmall  | 7px              |
| h-xsmall   | 1rem             |
| h-small    | 1.6rem           |
| h-icon     | 3.2rem           |
| h-medium   | 7rem             |
| h-big      | 16rem            |
| h-xbig     | 22rem            |
| h-xxbig    | 32rem            |
| h-xxxbig   | 44rem            |
| h-super    | 56rem            |
| h-xsuper   | 68rem            |
| h-xxsuper  | 80rem            |
| h-xxxsuper | 100rem           |
| hx         | none             |
| h-au       | auto             |

### max-height

| class         | value  |
| ------------- | ------ |
| maxh-5        | 5%     |
| maxh-10       | 10%    |
| maxh-15       | 15%    |
| maxh-20       | 20%    |
| maxh-25       | 25%    |
| maxh-30       | 30%    |
| maxh-35       | 35%    |
| maxh-40       | 40%    |
| maxh-45       | 45%    |
| maxh-50       | 50%    |
| maxh-55       | 55%    |
| maxh-60       | 60%    |
| maxh-65       | 65%    |
| maxh-70       | 70%    |
| maxh-75       | 75%    |
| maxh-80       | 80%    |
| maxh-85       | 85%    |
| maxh-90       | 90%    |
| maxh-95       | 95%    |
| maxh-100      | 100%   |
| maxh-wire     | 1px    |
| maxh-thin     | 3px    |
| maxh-xxxsmall | 5px    |
| maxh-xxsmall  | 7px    |
| maxh-xsmall   | 1rem   |
| maxh-small    | 1.6rem |
| maxh-icon     | 3.2rem |
| maxh-medium   | 7rem   |
| maxh-big      | 16rem  |
| maxh-xbig     | 22rem  |
| maxh-xxbig    | 32rem  |
| maxh-xxxbig   | 44rem  |
| maxh-super    | 56rem  |
| maxh-xsuper   | 68rem  |
| maxh-xxsuper  | 80rem  |
| maxh-xxxsuper | 100rem |
| maxhx         | none   |
| maxh-au       | auto   |

### min-height

| class         | value  |
| ------------- | ------ |
| minh-5        | 5%     |
| minh-10       | 10%    |
| minh-15       | 15%    |
| minh-20       | 20%    |
| minh-25       | 25%    |
| minh-30       | 30%    |
| minh-35       | 35%    |
| minh-40       | 40%    |
| minh-45       | 45%    |
| minh-50       | 50%    |
| minh-55       | 55%    |
| minh-60       | 60%    |
| minh-65       | 65%    |
| minh-70       | 70%    |
| minh-75       | 75%    |
| minh-80       | 80%    |
| minh-85       | 85%    |
| minh-90       | 90%    |
| minh-95       | 95%    |
| minh-100      | 100%   |
| minh-wire     | 1px    |
| minh-thin     | 3px    |
| minh-xxxsmall | 5px    |
| minh-xxsmall  | 7px    |
| minh-xsmall   | 1rem   |
| minh-small    | 1.6rem |
| minh-icon     | 3.2rem |
| minh-medium   | 7rem   |
| minh-big      | 16rem  |
| minh-xbig     | 22rem  |
| minh-xxbig    | 32rem  |
| minh-xxxbig   | 44rem  |
| minh-super    | 56rem  |
| minh-xsuper   | 68rem  |
| minh-xxsuper  | 80rem  |
| minh-xxxsuper | 100rem |
| minhx         | none   |
| minh-au       | auto   |

### width

| class      | value            |
| ---------- | ---------------- |
| w0         | 0                |
| w1         | \$baseline \* 1  |
| w2         | \$baseline \* 2  |
| w3         | \$baseline \* 3  |
| w4         | \$baseline \* 4  |
| w5         | \$baseline \* 5  |
| w6         | \$baseline \* 6  |
| w7         | \$baseline \* 7  |
| w8         | \$baseline \* 8  |
| w9         | \$baseline \* 9  |
| w10        | \$baseline \* 10 |
| w11        | \$baseline \* 11 |
| w12        | \$baseline \* 12 |
| w-5        | 5%               |
| w-10       | 10%              |
| w-15       | 15%              |
| w-20       | 20%              |
| w-25       | 25%              |
| w-30       | 30%              |
| w-35       | 35%              |
| w-40       | 40%              |
| w-45       | 45%              |
| w-50       | 50%              |
| w-55       | 55%              |
| w-60       | 60%              |
| w-65       | 65%              |
| w-70       | 70%              |
| w-75       | 75%              |
| w-80       | 80%              |
| w-85       | 85%              |
| w-90       | 90%              |
| w-95       | 95%              |
| w-100      | 100%             |
| w-wire     | 1px              |
| w-thin     | 3px              |
| w-xxxsmall | 5px              |
| w-xxsmall  | 7px              |
| w-xsmall   | 1rem             |
| w-small    | 1.6rem           |
| w-icon     | 3.2rem           |
| w-medium   | 7rem             |
| w-big      | 16rem            |
| w-xbig     | 22rem            |
| w-xxbig    | 32rem            |
| w-xxxbig   | 44rem            |
| w-super    | 56rem            |
| w-xsuper   | 68rem            |
| w-xxsuper  | 80rem            |
| w-xxxsuper | 100rem           |
| wx         | none             |
| w-au       | auto             |

### max-width

| class         | value  |
| ------------- | ------ |
| maxw-5        | 5%     |
| maxw-10       | 10%    |
| maxw-15       | 15%    |
| maxw-20       | 20%    |
| maxw-25       | 25%    |
| maxw-30       | 30%    |
| maxw-35       | 35%    |
| maxw-40       | 40%    |
| maxw-45       | 45%    |
| maxw-50       | 50%    |
| maxw-55       | 55%    |
| maxw-60       | 60%    |
| maxw-65       | 65%    |
| maxw-70       | 70%    |
| maxw-75       | 75%    |
| maxw-80       | 80%    |
| maxw-85       | 85%    |
| maxw-90       | 90%    |
| maxw-95       | 95%    |
| maxw-100      | 100%   |
| maxw-wire     | 1px    |
| maxw-thin     | 3px    |
| maxw-xxxsmall | 5px    |
| maxw-xxsmall  | 7px    |
| maxw-xsmall   | 1rem   |
| maxw-small    | 1.6rem |
| maxw-icon     | 3.2rem |
| maxw-medium   | 7rem   |
| maxw-big      | 16rem  |
| maxw-xbig     | 22rem  |
| maxw-xxbig    | 32rem  |
| maxw-xxxbig   | 44rem  |
| maxw-super    | 56rem  |
| maxw-xsuper   | 68rem  |
| maxw-xxsuper  | 80rem  |
| maxw-xxxsuper | 100rem |
| maxwx         | none   |
| maxw-au       | auto   |

### min-width

| class         | value            |
| ------------- | ---------------- |
| minw0         | 0                |
| minw1         | \$baseline \* 1  |
| minw2         | \$baseline \* 2  |
| minw3         | \$baseline \* 3  |
| minw4         | \$baseline \* 4  |
| minw5         | \$baseline \* 5  |
| minw6         | \$baseline \* 6  |
| minw7         | \$baseline \* 7  |
| minw8         | \$baseline \* 8  |
| minw9         | \$baseline \* 9  |
| minw10        | \$baseline \* 10 |
| minw11        | \$baseline \* 11 |
| minw12        | \$baseline \* 12 |
| minw-5        | 5%               |
| minw-10       | 10%              |
| minw-15       | 15%              |
| minw-20       | 20%              |
| minw-25       | 25%              |
| minw-30       | 30%              |
| minw-35       | 35%              |
| minw-40       | 40%              |
| minw-45       | 45%              |
| minw-50       | 50%              |
| minw-55       | 55%              |
| minw-60       | 60%              |
| minw-65       | 65%              |
| minw-70       | 70%              |
| minw-75       | 75%              |
| minw-80       | 80%              |
| minw-85       | 85%              |
| minw-90       | 90%              |
| minw-95       | 95%              |
| minw-100      | 100%             |
| minw-wire     | 1px              |
| minw-thin     | 3px              |
| minw-xxxsmall | 5px              |
| minw-xxsmall  | 7px              |
| minw-xsmall   | 1rem             |
| minw-small    | 1.6rem           |
| minw-icon     | 3.2rem           |
| minw-medium   | 7rem             |
| minw-big      | 16rem            |
| minw-xbig     | 22rem            |
| minw-xxbig    | 32rem            |
| minw-xxxbig   | 44rem            |
| minw-super    | 56rem            |
| minw-xsuper   | 68rem            |
| minw-xxsuper  | 80rem            |
| minw-xxxsuper | 100rem           |
| minwx         | none             |
| minw-au       | auto             |

### bottom

| class      | value            |
| ---------- | ---------------- |
| b0         | 0                |
| b1         | \$baseline \* 1  |
| b2         | \$baseline \* 2  |
| b3         | \$baseline \* 3  |
| b4         | \$baseline \* 4  |
| b5         | \$baseline \* 5  |
| b6         | \$baseline \* 6  |
| b7         | \$baseline \* 7  |
| b8         | \$baseline \* 8  |
| b9         | \$baseline \* 9  |
| b10        | \$baseline \* 10 |
| b11        | \$baseline \* 11 |
| b12        | \$baseline \* 12 |
| bn1        | -1rem            |
| bn2        | -2rem            |
| bn3        | -3rem            |
| bn4        | -4rem            |
| bn5        | -5rem            |
| bn6        | -6rem            |
| bn7        | -7rem            |
| bn8        | -8rem            |
| bn9        | -9rem            |
| bn10       | -10rem           |
| b-5        | 5%               |
| b-10       | 10%              |
| b-15       | 15%              |
| b-20       | 20%              |
| b-25       | 25%              |
| b-30       | 30%              |
| b-35       | 35%              |
| b-40       | 40%              |
| b-45       | 45%              |
| b-50       | 50%              |
| b-55       | 55%              |
| b-60       | 60%              |
| b-65       | 65%              |
| b-70       | 70%              |
| b-75       | 75%              |
| b-80       | 80%              |
| b-85       | 85%              |
| b-90       | 90%              |
| b-95       | 95%              |
| b-100      | 100%             |
| b-wire     | 1px              |
| b-thin     | 3px              |
| b-xxxsmall | 5px              |
| b-xxsmall  | 7px              |
| b-xsmall   | 1rem             |
| b-small    | 1.6rem           |
| b-icon     | 3.2rem           |
| b-medium   | 7rem             |
| b-big      | 16rem            |
| b-xbig     | 22rem            |
| b-xxbig    | 32rem            |
| b-xxxbig   | 44rem            |
| b-super    | 56rem            |
| b-xsuper   | 68rem            |
| b-xxsuper  | 80rem            |
| b-xxxsuper | 100rem           |

### left

| class      | value            |
| ---------- | ---------------- |
| l0         | 0                |
| l1         | \$baseline \* 1  |
| l2         | \$baseline \* 2  |
| l3         | \$baseline \* 3  |
| l4         | \$baseline \* 4  |
| l5         | \$baseline \* 5  |
| l6         | \$baseline \* 6  |
| l7         | \$baseline \* 7  |
| l8         | \$baseline \* 8  |
| l9         | \$baseline \* 9  |
| l10        | \$baseline \* 10 |
| l11        | \$baseline \* 11 |
| l12        | \$baseline \* 12 |
| ln1        | -1rem            |
| ln2        | -2rem            |
| ln3        | -3rem            |
| ln4        | -4rem            |
| ln5        | -5rem            |
| ln6        | -6rem            |
| ln7        | -7rem            |
| ln8        | -8rem            |
| ln9        | -9rem            |
| ln10       | -10rem           |
| l-5        | 5%               |
| l-10       | 10%              |
| l-15       | 15%              |
| l-20       | 20%              |
| l-25       | 25%              |
| l-30       | 30%              |
| l-35       | 35%              |
| l-40       | 40%              |
| l-45       | 45%              |
| l-50       | 50%              |
| l-55       | 55%              |
| l-60       | 60%              |
| l-65       | 65%              |
| l-70       | 70%              |
| l-75       | 75%              |
| l-80       | 80%              |
| l-85       | 85%              |
| l-90       | 90%              |
| l-95       | 95%              |
| l-100      | 100%             |
| l-wire     | 1px              |
| l-thin     | 3px              |
| l-xxxsmall | 5px              |
| l-xxsmall  | 7px              |
| l-xsmall   | 1rem             |
| l-small    | 1.6rem           |
| l-icon     | 3.2rem           |
| l-medium   | 7rem             |
| l-big      | 16rem            |
| l-xbig     | 22rem            |
| l-xxbig    | 32rem            |
| l-xxxbig   | 44rem            |
| l-super    | 56rem            |
| l-xsuper   | 68rem            |
| l-xxsuper  | 80rem            |
| l-xxxsuper | 100rem           |

### top

| class      | value            |
| ---------- | ---------------- |
| t0         | 0                |
| t1         | \$baseline \* 1  |
| t2         | \$baseline \* 2  |
| t3         | \$baseline \* 3  |
| t4         | \$baseline \* 4  |
| t5         | \$baseline \* 5  |
| t6         | \$baseline \* 6  |
| t7         | \$baseline \* 7  |
| t8         | \$baseline \* 8  |
| t9         | \$baseline \* 9  |
| t10        | \$baseline \* 10 |
| t11        | \$baseline \* 11 |
| t12        | \$baseline \* 12 |
| tn1        | -1rem            |
| tn2        | -2rem            |
| tn3        | -3rem            |
| tn4        | -4rem            |
| tn5        | -5rem            |
| tn6        | -6rem            |
| tn7        | -7rem            |
| tn8        | -8rem            |
| tn9        | -9rem            |
| tn10       | -10rem           |
| t-5        | 5%               |
| t-10       | 10%              |
| t-15       | 15%              |
| t-20       | 20%              |
| t-25       | 25%              |
| t-30       | 30%              |
| t-35       | 35%              |
| t-40       | 40%              |
| t-45       | 45%              |
| t-50       | 50%              |
| t-55       | 55%              |
| t-60       | 60%              |
| t-65       | 65%              |
| t-70       | 70%              |
| t-75       | 75%              |
| t-80       | 80%              |
| t-85       | 85%              |
| t-90       | 90%              |
| t-95       | 95%              |
| t-100      | 100%             |
| t-wire     | 1px              |
| t-thin     | 3px              |
| t-xxxsmall | 5px              |
| t-xxsmall  | 7px              |
| t-xsmall   | 1rem             |
| t-small    | 1.6rem           |
| t-icon     | 3.2rem           |
| t-medium   | 7rem             |
| t-big      | 16rem            |
| t-xbig     | 22rem            |
| t-xxbig    | 32rem            |
| t-xxxbig   | 44rem            |
| t-super    | 56rem            |
| t-xsuper   | 68rem            |
| t-xxsuper  | 80rem            |
| t-xxxsuper | 100rem           |

### right

| class      | value            |
| ---------- | ---------------- |
| r0         | 0                |
| r1         | \$baseline \* 1  |
| r2         | \$baseline \* 2  |
| r3         | \$baseline \* 3  |
| r4         | \$baseline \* 4  |
| r5         | \$baseline \* 5  |
| r6         | \$baseline \* 6  |
| r7         | \$baseline \* 7  |
| r8         | \$baseline \* 8  |
| r9         | \$baseline \* 9  |
| r10        | \$baseline \* 10 |
| r11        | \$baseline \* 11 |
| r12        | \$baseline \* 12 |
| rn1        | -1rem            |
| rn2        | -2rem            |
| rn3        | -3rem            |
| rn4        | -4rem            |
| rn5        | -5rem            |
| rn6        | -6rem            |
| rn7        | -7rem            |
| rn8        | -8rem            |
| rn9        | -9rem            |
| rn10       | -10rem           |
| r-5        | 5%               |
| r-10       | 10%              |
| r-15       | 15%              |
| r-20       | 20%              |
| r-25       | 25%              |
| r-30       | 30%              |
| r-35       | 35%              |
| r-40       | 40%              |
| r-45       | 45%              |
| r-50       | 50%              |
| r-55       | 55%              |
| r-60       | 60%              |
| r-65       | 65%              |
| r-70       | 70%              |
| r-75       | 75%              |
| r-80       | 80%              |
| r-85       | 85%              |
| r-90       | 90%              |
| r-95       | 95%              |
| r-100      | 100%             |
| r-wire     | 1px              |
| r-thin     | 3px              |
| r-xxxsmall | 5px              |
| r-xxsmall  | 7px              |
| r-xsmall   | 1rem             |
| r-small    | 1.6rem           |
| r-icon     | 3.2rem           |
| r-medium   | 7rem             |
| r-big      | 16rem            |
| r-xbig     | 22rem            |
| r-xxbig    | 32rem            |
| r-xxxbig   | 44rem            |
| r-super    | 56rem            |
| r-xsuper   | 68rem            |
| r-xxsuper  | 80rem            |
| r-xxxsuper | 100rem           |

### letter-spacing

| class | value |
| ----- | ----- |
| ls1   | 1px   |
| ls2   | 2px   |
| ls3   | 3px   |
| ls4   | 4px   |

### line-height

| class    | value             |
| -------- | ----------------- |
| lh0      | \$baseline \* 1.5 |
| lh1      | \$baseline \* 2   |
| lh2      | \$baseline \* 2.5 |
| lh3      | \$baseline \* 3   |
| lh4      | \$baseline \* 4   |
| lh5      | \$baseline \* 5   |
| lh6      | \$baseline \* 6   |
| lh7      | \$baseline \* 6.5 |
| lh8      | \$baseline \* 7.5 |
| lh-2     | \$baseline \* 0.5 |
| lh-1     | \$baseline \* 1   |
| lh-large | 4rem              |

### list-style-type

| class                    | value                |
| ------------------------ | -------------------- |
| lst-circle               | circle               |
| lst-disc                 | disc                 |
| lst-square               | square               |
| lst-decimal              | decimal              |
| lst-none                 | none                 |
| lst-decimal-leading-zero | decimal-leading-zero |

### margin

| class       | value            |
| ----------- | ---------------- |
| ma0         | 0                |
| ma1         | \$baseline \* 1  |
| ma2         | \$baseline \* 2  |
| ma3         | \$baseline \* 3  |
| ma4         | \$baseline \* 4  |
| ma5         | \$baseline \* 5  |
| ma6         | \$baseline \* 6  |
| ma7         | \$baseline \* 7  |
| ma8         | \$baseline \* 8  |
| ma9         | \$baseline \* 9  |
| ma10        | \$baseline \* 10 |
| ma11        | \$baseline \* 11 |
| ma12        | \$baseline \* 12 |
| max         | none             |
| ma-au       | auto             |
| ma-5        | 5%               |
| ma-10       | 10%              |
| ma-15       | 15%              |
| ma-20       | 20%              |
| ma-25       | 25%              |
| ma-30       | 30%              |
| ma-35       | 35%              |
| ma-40       | 40%              |
| ma-45       | 45%              |
| ma-50       | 50%              |
| ma-55       | 55%              |
| ma-60       | 60%              |
| ma-65       | 65%              |
| ma-70       | 70%              |
| ma-75       | 75%              |
| ma-80       | 80%              |
| ma-85       | 85%              |
| ma-90       | 90%              |
| ma-95       | 95%              |
| ma-100      | 100%             |
| ma-wire     | 1px              |
| ma-thin     | 3px              |
| ma-xxxsmall | 5px              |
| ma-xxsmall  | 7px              |
| ma-xsmall   | 1rem             |
| ma-small    | 1.6rem           |
| ma-icon     | 3.2rem           |
| ma-medium   | 7rem             |
| ma-big      | 16rem            |
| ma-xbig     | 22rem            |
| ma-xxbig    | 32rem            |
| ma-xxxbig   | 44rem            |
| ma-super    | 56rem            |
| ma-xsuper   | 68rem            |
| ma-xxsuper  | 80rem            |
| ma-xxxsuper | 100rem           |

### margin-bottom

| class       | value            |
| ----------- | ---------------- |
| mb0         | 0                |
| mb1         | \$baseline \* 1  |
| mb2         | \$baseline \* 2  |
| mb3         | \$baseline \* 3  |
| mb4         | \$baseline \* 4  |
| mb5         | \$baseline \* 5  |
| mb6         | \$baseline \* 6  |
| mb7         | \$baseline \* 7  |
| mb8         | \$baseline \* 8  |
| mb9         | \$baseline \* 9  |
| mb10        | \$baseline \* 10 |
| mb11        | \$baseline \* 11 |
| mb12        | \$baseline \* 12 |
| mbx         | none             |
| mb-au       | auto             |
| mb-5        | 5%               |
| mb-10       | 10%              |
| mb-15       | 15%              |
| mb-20       | 20%              |
| mb-25       | 25%              |
| mb-30       | 30%              |
| mb-35       | 35%              |
| mb-40       | 40%              |
| mb-45       | 45%              |
| mb-50       | 50%              |
| mb-55       | 55%              |
| mb-60       | 60%              |
| mb-65       | 65%              |
| mb-70       | 70%              |
| mb-75       | 75%              |
| mb-80       | 80%              |
| mb-85       | 85%              |
| mb-90       | 90%              |
| mb-95       | 95%              |
| mb-100      | 100%             |
| mb-wire     | 1px              |
| mb-thin     | 3px              |
| mb-xxxsmall | 5px              |
| mb-xxsmall  | 7px              |
| mb-xsmall   | 1rem             |
| mb-small    | 1.6rem           |
| mb-icon     | 3.2rem           |
| mb-medium   | 7rem             |
| mb-big      | 16rem            |
| mb-xbig     | 22rem            |
| mb-xxbig    | 32rem            |
| mb-xxxbig   | 44rem            |
| mb-super    | 56rem            |
| mb-xsuper   | 68rem            |
| mb-xxsuper  | 80rem            |
| mb-xxxsuper | 100rem           |

### margin-left

| class       | value            |
| ----------- | ---------------- |
| ml0         | 0                |
| ml1         | \$baseline \* 1  |
| ml2         | \$baseline \* 2  |
| ml3         | \$baseline \* 3  |
| ml4         | \$baseline \* 4  |
| ml5         | \$baseline \* 5  |
| ml6         | \$baseline \* 6  |
| ml7         | \$baseline \* 7  |
| ml8         | \$baseline \* 8  |
| ml9         | \$baseline \* 9  |
| ml10        | \$baseline \* 10 |
| ml11        | \$baseline \* 11 |
| ml12        | \$baseline \* 12 |
| mlx         | none             |
| ml-au       | auto             |
| ml-5        | 5%               |
| ml-10       | 10%              |
| ml-15       | 15%              |
| ml-20       | 20%              |
| ml-25       | 25%              |
| ml-30       | 30%              |
| ml-35       | 35%              |
| ml-40       | 40%              |
| ml-45       | 45%              |
| ml-50       | 50%              |
| ml-55       | 55%              |
| ml-60       | 60%              |
| ml-65       | 65%              |
| ml-70       | 70%              |
| ml-75       | 75%              |
| ml-80       | 80%              |
| ml-85       | 85%              |
| ml-90       | 90%              |
| ml-95       | 95%              |
| ml-100      | 100%             |
| ml-wire     | 1px              |
| ml-thin     | 3px              |
| ml-xxxsmall | 5px              |
| ml-xxsmall  | 7px              |
| ml-xsmall   | 1rem             |
| ml-small    | 1.6rem           |
| ml-icon     | 3.2rem           |
| ml-medium   | 7rem             |
| ml-big      | 16rem            |
| ml-xbig     | 22rem            |
| ml-xxbig    | 32rem            |
| ml-xxxbig   | 44rem            |
| ml-super    | 56rem            |
| ml-xsuper   | 68rem            |
| ml-xxsuper  | 80rem            |
| ml-xxxsuper | 100rem           |

### margin-right

| class       | value            |
| ----------- | ---------------- |
| mr0         | 0                |
| mr1         | \$baseline \* 1  |
| mr2         | \$baseline \* 2  |
| mr3         | \$baseline \* 3  |
| mr4         | \$baseline \* 4  |
| mr5         | \$baseline \* 5  |
| mr6         | \$baseline \* 6  |
| mr7         | \$baseline \* 7  |
| mr8         | \$baseline \* 8  |
| mr9         | \$baseline \* 9  |
| mr10        | \$baseline \* 10 |
| mr11        | \$baseline \* 11 |
| mr12        | \$baseline \* 12 |
| mrx         | none             |
| mr-au       | auto             |
| mr-5        | 5%               |
| mr-10       | 10%              |
| mr-15       | 15%              |
| mr-20       | 20%              |
| mr-25       | 25%              |
| mr-30       | 30%              |
| mr-35       | 35%              |
| mr-40       | 40%              |
| mr-45       | 45%              |
| mr-50       | 50%              |
| mr-55       | 55%              |
| mr-60       | 60%              |
| mr-65       | 65%              |
| mr-70       | 70%              |
| mr-75       | 75%              |
| mr-80       | 80%              |
| mr-85       | 85%              |
| mr-90       | 90%              |
| mr-95       | 95%              |
| mr-100      | 100%             |
| mr-wire     | 1px              |
| mr-thin     | 3px              |
| mr-xxxsmall | 5px              |
| mr-xxsmall  | 7px              |
| mr-xsmall   | 1rem             |
| mr-small    | 1.6rem           |
| mr-icon     | 3.2rem           |
| mr-medium   | 7rem             |
| mr-big      | 16rem            |
| mr-xbig     | 22rem            |
| mr-xxbig    | 32rem            |
| mr-xxxbig   | 44rem            |
| mr-super    | 56rem            |
| mr-xsuper   | 68rem            |
| mr-xxsuper  | 80rem            |
| mr-xxxsuper | 100rem           |

### margin-top

| class       | value            |
| ----------- | ---------------- |
| mt0         | 0                |
| mt1         | \$baseline \* 1  |
| mt2         | \$baseline \* 2  |
| mt3         | \$baseline \* 3  |
| mt4         | \$baseline \* 4  |
| mt5         | \$baseline \* 5  |
| mt6         | \$baseline \* 6  |
| mt7         | \$baseline \* 7  |
| mt8         | \$baseline \* 8  |
| mt9         | \$baseline \* 9  |
| mt10        | \$baseline \* 10 |
| mt11        | \$baseline \* 11 |
| mt12        | \$baseline \* 12 |
| mtx         | none             |
| mt-au       | auto             |
| mt-5        | 5%               |
| mt-10       | 10%              |
| mt-15       | 15%              |
| mt-20       | 20%              |
| mt-25       | 25%              |
| mt-30       | 30%              |
| mt-35       | 35%              |
| mt-40       | 40%              |
| mt-45       | 45%              |
| mt-50       | 50%              |
| mt-55       | 55%              |
| mt-60       | 60%              |
| mt-65       | 65%              |
| mt-70       | 70%              |
| mt-75       | 75%              |
| mt-80       | 80%              |
| mt-85       | 85%              |
| mt-90       | 90%              |
| mt-95       | 95%              |
| mt-100      | 100%             |
| mt-wire     | 1px              |
| mt-thin     | 3px              |
| mt-xxxsmall | 5px              |
| mt-xxsmall  | 7px              |
| mt-xsmall   | 1rem             |
| mt-small    | 1.6rem           |
| mt-icon     | 3.2rem           |
| mt-medium   | 7rem             |
| mt-big      | 16rem            |
| mt-xbig     | 22rem            |
| mt-xxbig    | 32rem            |
| mt-xxxbig   | 44rem            |
| mt-super    | 56rem            |
| mt-xsuper   | 68rem            |
| mt-xxsuper  | 80rem            |
| mt-xxxsuper | 100rem           |

### object-fit

| class         | value      |
| ------------- | ---------- |
| of-fill       | fill       |
| of-contain    | contain    |
| of-cover      | cover      |
| of-scale-down | scale-down |
| of-none       | none       |

### opacity

| class | value |
| ----- | ----- |
| o0    | 0     |
| o-10  | 0.1   |
| o-20  | 0.2   |
| o-30  | 0.3   |
| o-40  | 0.4   |
| o-50  | 0.5   |
| o-60  | 0.6   |
| o-70  | 0.7   |
| o-80  | 0.8   |
| o-90  | 0.9   |
| o-100 | 1     |

### overflow

| class  | value  |
| ------ | ------ |
| scroll | scroll |
| hidden | hidden |
| auto   | auto   |

### padding

| class       | value            |
| ----------- | ---------------- |
| pa0         | 0                |
| pa1         | \$baseline \* 1  |
| pa2         | \$baseline \* 2  |
| pa3         | \$baseline \* 3  |
| pa4         | \$baseline \* 4  |
| pa5         | \$baseline \* 5  |
| pa6         | \$baseline \* 6  |
| pa7         | \$baseline \* 7  |
| pa8         | \$baseline \* 8  |
| pa9         | \$baseline \* 9  |
| pa10        | \$baseline \* 10 |
| pa11        | \$baseline \* 11 |
| pa12        | \$baseline \* 12 |
| pa-wire     | 1px              |
| pa-thin     | 3px              |
| pa-xxxsmall | 5px              |
| pa-xxsmall  | 7px              |
| pa-xsmall   | 1rem             |
| pa-small    | 1.6rem           |
| pa-icon     | 3.2rem           |
| pa-medium   | 7rem             |
| pa-big      | 16rem            |
| pa-xbig     | 22rem            |
| pa-xxbig    | 32rem            |
| pa-xxxbig   | 44rem            |
| pa-super    | 56rem            |
| pa-xsuper   | 68rem            |
| pa-xxsuper  | 80rem            |
| pa-xxxsuper | 100rem           |

### padding-bottom

| class       | value            |
| ----------- | ---------------- |
| pb0         | 0                |
| pb1         | \$baseline \* 1  |
| pb2         | \$baseline \* 2  |
| pb3         | \$baseline \* 3  |
| pb4         | \$baseline \* 4  |
| pb5         | \$baseline \* 5  |
| pb6         | \$baseline \* 6  |
| pb7         | \$baseline \* 7  |
| pb8         | \$baseline \* 8  |
| pb9         | \$baseline \* 9  |
| pb10        | \$baseline \* 10 |
| pb11        | \$baseline \* 11 |
| pb12        | \$baseline \* 12 |
| pb-wire     | 1px              |
| pb-thin     | 3px              |
| pb-xxxsmall | 5px              |
| pb-xxsmall  | 7px              |
| pb-xsmall   | 1rem             |
| pb-small    | 1.6rem           |
| pb-icon     | 3.2rem           |
| pb-medium   | 7rem             |
| pb-big      | 16rem            |
| pb-xbig     | 22rem            |
| pb-xxbig    | 32rem            |
| pb-xxxbig   | 44rem            |
| pb-super    | 56rem            |
| pb-xsuper   | 68rem            |
| pb-xxsuper  | 80rem            |
| pb-xxxsuper | 100rem           |

### padding-left

| class       | value            |
| ----------- | ---------------- |
| pl0         | 0                |
| pl1         | \$baseline \* 1  |
| pl2         | \$baseline \* 2  |
| pl3         | \$baseline \* 3  |
| pl4         | \$baseline \* 4  |
| pl5         | \$baseline \* 5  |
| pl6         | \$baseline \* 6  |
| pl7         | \$baseline \* 7  |
| pl8         | \$baseline \* 8  |
| pl9         | \$baseline \* 9  |
| pl10        | \$baseline \* 10 |
| pl11        | \$baseline \* 11 |
| pl12        | \$baseline \* 12 |
| pl-wire     | 1px              |
| pl-thin     | 3px              |
| pl-xxxsmall | 5px              |
| pl-xxsmall  | 7px              |
| pl-xsmall   | 1rem             |
| pl-small    | 1.6rem           |
| pl-icon     | 3.2rem           |
| pl-medium   | 7rem             |
| pl-big      | 16rem            |
| pl-xbig     | 22rem            |
| pl-xxbig    | 32rem            |
| pl-xxxbig   | 44rem            |
| pl-super    | 56rem            |
| pl-xsuper   | 68rem            |
| pl-xxsuper  | 80rem            |
| pl-xxxsuper | 100rem           |

### padding-right

| class       | value            |
| ----------- | ---------------- |
| pr0         | 0                |
| pr1         | \$baseline \* 1  |
| pr2         | \$baseline \* 2  |
| pr3         | \$baseline \* 3  |
| pr4         | \$baseline \* 4  |
| pr5         | \$baseline \* 5  |
| pr6         | \$baseline \* 6  |
| pr7         | \$baseline \* 7  |
| pr8         | \$baseline \* 8  |
| pr9         | \$baseline \* 9  |
| pr10        | \$baseline \* 10 |
| pr11        | \$baseline \* 11 |
| pr12        | \$baseline \* 12 |
| pr-wire     | 1px              |
| pr-thin     | 3px              |
| pr-xxxsmall | 5px              |
| pr-xxsmall  | 7px              |
| pr-xsmall   | 1rem             |
| pr-small    | 1.6rem           |
| pr-icon     | 3.2rem           |
| pr-medium   | 7rem             |
| pr-big      | 16rem            |
| pr-xbig     | 22rem            |
| pr-xxbig    | 32rem            |
| pr-xxxbig   | 44rem            |
| pr-super    | 56rem            |
| pr-xsuper   | 68rem            |
| pr-xxsuper  | 80rem            |
| pr-xxxsuper | 100rem           |

### padding-top

| class       | value            |
| ----------- | ---------------- |
| pt0         | 0                |
| pt1         | \$baseline \* 1  |
| pt2         | \$baseline \* 2  |
| pt3         | \$baseline \* 3  |
| pt4         | \$baseline \* 4  |
| pt5         | \$baseline \* 5  |
| pt6         | \$baseline \* 6  |
| pt7         | \$baseline \* 7  |
| pt8         | \$baseline \* 8  |
| pt9         | \$baseline \* 9  |
| pt10        | \$baseline \* 10 |
| pt11        | \$baseline \* 11 |
| pt12        | \$baseline \* 12 |
| pt-wire     | 1px              |
| pt-thin     | 3px              |
| pt-xxxsmall | 5px              |
| pt-xxsmall  | 7px              |
| pt-xsmall   | 1rem             |
| pt-small    | 1.6rem           |
| pt-icon     | 3.2rem           |
| pt-medium   | 7rem             |
| pt-big      | 16rem            |
| pt-xbig     | 22rem            |
| pt-xxbig    | 32rem            |
| pt-xxxbig   | 44rem            |
| pt-super    | 56rem            |
| pt-xsuper   | 68rem            |
| pt-xxsuper  | 80rem            |
| pt-xxxsuper | 100rem           |

### position

| class    | value    |
| -------- | -------- |
| relative | relative |
| absolute | absolute |
| fixed    | fixed    |

### text-align

| class  | value  |
| ------ | ------ |
| center | center |
| right  | right  |
| left   | left   |

### text-decoration

| class | value     |
| ----- | --------- |
| tdx   | none      |
| tdu   | underline |

### text-transform

| class | value      |
| ----- | ---------- |
| tfx   | none       |
| tfu   | uppercase  |
| tfc   | capitalize |
| tfl   | lowercase  |

### vertical-align

| class | value  |
| ----- | ------ |
| va-b  | bottom |
| va-m  | middle |
| va-t  | top    |

### visibility

| class     | value   |
| --------- | ------- |
| v-hidden  | hidden  |
| v-visible | visible |

### z-index

| class | value |
| ----- | ----- |
| z-1   | 1     |
| z-2   | 2     |
| z-3   | 3     |
| z-4   | 4     |
| z-5   | 5     |

### flex-basis

| class            | value             |
| ---------------- | ----------------- |
| basis-5          | 5%                |
| basis-10         | 10%               |
| basis-15         | 15%               |
| basis-20         | 20%               |
| basis-25         | 25%               |
| basis-30         | 30%               |
| basis-35         | 35%               |
| basis-40         | 40%               |
| basis-45         | 45%               |
| basis-50         | 50%               |
| basis-55         | 55%               |
| basis-60         | 60%               |
| basis-65         | 65%               |
| basis-70         | 70%               |
| basis-75         | 75%               |
| basis-80         | 80%               |
| basis-85         | 85%               |
| basis-90         | 90%               |
| basis-95         | 95%               |
| basis-100        | 100%              |
| basis-third      | (100% / 3)        |
| basis-two-thirds | (100% / 3 \* 2)   |
| basis-1-12       | (100% / 12)       |
| basis-2-12       | (100% / 12 \* 2)  |
| basis-3-12       | (100% / 12 \* 3)  |
| basis-4-12       | (100% / 12 \* 4)  |
| basis-5-12       | (100% / 12 \* 5)  |
| basis-6-12       | (100% / 12 \* 6)  |
| basis-7-12       | (100% / 12 \* 7)  |
| basis-8-12       | (100% / 12 \* 8)  |
| basis-9-12       | (100% / 12 \* 9)  |
| basis-10-12      | (100% / 12 \* 10) |
| basis-11-12      | (100% / 12 \* 11) |
| basis-12-12      | (100% / 12 \* 12) |

### flex-direction

| class          | value          |
| -------------- | -------------- |
| row            | row            |
| row-reverse    | row-reverse    |
| column         | column         |
| column-reverse | column-reverse |

### flex-grow

| class  | value |
| ------ | ----- |
| grow-0 | 0     |
| grow-1 | 1     |

### flex-shrink

| class    | value |
| -------- | ----- |
| shrink-0 | 0     |
| shrink-1 | 1     |

### flex-wrap

| class        | value        |
| ------------ | ------------ |
| nowrap       | nowrap       |
| wrap         | wrap         |
| wrap-reverse | wrap-reverse |

### box-sizing

| class | value       |
| ----- | ----------- |
| b     | border-box  |
| c     | content-box |

### align-items

| class          | value      |
| -------------- | ---------- |
| items-start    | flex-start |
| items-end      | flex-end   |
| items-center   | center     |
| items-baseline | baseline   |
| items-stretch  | stretch    |

### align-self

| class         | value      |
| ------------- | ---------- |
| self-start    | flex-start |
| self-end      | flex-end   |
| self-center   | center     |
| self-baseline | baseline   |
| self-stretch  | stretch    |

### justify-content

| class           | value         |
| --------------- | ------------- |
| justify-start   | flex-start    |
| justify-end     | flex-end      |
| justify-center  | center        |
| justify-between | space-between |
| justify-around  | space-around  |
| justify-stretch | stretch       |

### align-content

| class           | value         |
| --------------- | ------------- |
| content-start   | flex-start    |
| content-end     | flex-end      |
| content-center  | center        |
| content-between | space-between |
| content-around  | space-around  |
| content-stretch | stretch       |

<!-- Reference -->

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
  - [x] References generator
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
- [Adam Moore & Tachyons](https://tachyons.io/) for creating their wonderful library

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
