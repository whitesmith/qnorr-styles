A style agnostic, slightly opinionated, style seasoning to bootstrap your projects.

## install
Install via `npm`.
```shell
yarn add @whitesmith/@whitesmith/qnorr-styles
```
## usage

**at your `main.scss`**
```scss
@import "path/to/node_modules/@whitesmith/qnorr-styles/scss/qnorr";
or if your using a bundler with alias for modules (webpack)
@import "~@whitesmith/qnorr-styles/scss/qnorr"
```

**at your entry file `index.js`**
```javascript
import "@whitesmith/qnorr-styles"; // this will import qnorr.css from dist/qnorr.css

// you can also import sass directly if your bunlder is configure to handle it
import "@whitesmith/qnorr-styles/scss/qnorr.scss;

const someJsFunction = _ => {
	...
}
```

### Documentation

> If it’s not documented, it doesn’t exist. Documentation should become the default – an integrated part of the development process.
> — Miriam Suzanne

[See full documentation](https://whitesmith.github.io/qnorr-styles/)

### Customizing
Choose your seasonings
```scss
// Required
@import "~@whitesmith/qnorr-styles/scss/settings";
@import "~@whitesmith/qnorr-styles/scss/tools";

// optional external dependency
@import "~normalize.css/normalize.css";
// Optional (check all modules available at scss/** )
@import "~@whitesmith/qnorr-styles/scss/base/reset";
@import "~@whitesmith/qnorr-styles/scss/objects/media";
@import "~@whitesmith/qnorr-styles/scss/utilties/spacers";
```


## Dependencies
qnorr ships with two dependencies by default:
- [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints) to handle our media query needs (required, no-opt-out)
- [normalize.css](https://github.com/necolas/normalize.css/) to reset browser styles (optional import if you're using scss verison)


## Developing

- We use [gulp@4.0^](https://gulpjs.com/) to build the library (legacy CLI scripts are also available but they are way difficult to maintain).
- We use [parcel](https://parceljs.org/) and [posthtml plugins](https://github.com/posthtml/posthtml) to build a basic site located under `/site` folder. If you want to help build a real documentation site, create a `docs` folder and let's use the monorepo approach — docs building are separated from library and we can use any tool to make it happen (vuepress, gitbook, etc.), suggestions are welcomed.

Developing
```
# watch mode for qnorr, dev server for demo site
yarn run start
```

Production build
```
# optimized output for publishing
yarn run qnorr:build
```

Play at playground site
```
yarn run playground:dev
```

## License
[MIT](LICENSE) — made with 💚 by [Whitesmith](https://whitesmith.co).