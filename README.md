# The Angle Bracket

Source for [theanglebracket.com](https://theanglebracket.com), a write-up of **The Angle Bracket** — a tournament of HTML tags conducted via 57 Twitter polls over 7 rounds, with more than 76,000 votes cast.

The site is static, contains no JavaScript, and renders the bracket from CSV files of poll results.

## Stack

- [Eleventy](https://www.11ty.dev/) for the static site build (EJS templates)
- [eleventy-plugin-sass](https://www.npmjs.com/package/eleventy-plugin-sass) for styles, with [Bulma](https://bulma.io/) as the base
- [esbuild](https://esbuild.github.io/) wired in via [scripts.11ty.js](scripts.11ty.js) (currently unused — no JS ships)
- Round results live as CSVs in [src/_data/](src/_data/) and are loaded by [src/_data/scores.js](src/_data/scores.js)

## Layout

- [src/index.ejs](src/index.ejs) — the entire site, one long page with round-by-round commentary
- [src/_includes/round.ejs](src/_includes/round.ejs) — partial that renders a single round's games
- [src/_data/round*.csv](src/_data/) — raw poll results, one file per round
- [src/css/](src/css/), [src/images/](src/images/) — assets
- [.eleventy.js](.eleventy.js) — Eleventy config

## Build

```sh
npm install
npx eleventy           # build to _site/
npx eleventy --serve   # local dev server with watch
```
