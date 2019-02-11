A style agnostic, slightly opinionated, style seasoning to bootstrap your projects.

## usage
Install via `npm`.
```shell
yarn add qnorr-styles
```

Season your project
```scss
@import "path/to/node_modules/qnorr-css/scss/qnorr";
or if your using a bundler with alias for modules (webpack)
@import "~qnorr-css/scss/qnorr"
```

Choose your seasonings
```scss
// Required
@import "~qnorr-css/scss/settings/index";
@import "~qnorr-css/scss/tools/index";

// optional external dependency
@import "~normalize.css/normalize.css";
// Optional (check all modules available at scss/** )
@import "~qnorr-css/scss/base/reset";
@import "~qnorr-css/scss/objects/media";
@import "~qnorr-css/scss/objects/media";
@import "~qnorr-css/scss/utilties/spacers";
```


## Dependencies
qnorr ships with two dependencies by default:
- [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints) to handle our media query needs (required, no-opt-out)
- [normalize.css](https://github.com/necolas/normalize.css/) to reset browser styles (optional import if you're using scss verison)


## Developing

- We use [gulp@4.0^](https://gulpjs.com/) to build the library (legacy CLI scripts are also available but they are way difficult to maintain).
- We use [parcel](https://parceljs.org/) and [posthtml plugins](https://github.com/posthtml/posthtml) to build a basic site located under `/site` folder. If you want to help build a real documentation site, create a `docs` folder and let's use the monorepo approach — docs building are separated from library and we can use any tool to make it happen (vuepress, gitbook, etc.), suggestions are welcomed.

Building
```
# watch mode for qnorr, dev server for demo site
yarn run start

# production build (lib and site)
yarn run build:all
```

Developing qnorr only
```
yarn run dev:qnorr
yarn run build:qnorr
```

Developing demo site only
```
yarn run dev:site
yarn run build:site
yarn run deploy:site
```

## License
[MIT](LICENSE) — made with 💚 by [Whitesmith](https://whitesmith.co).