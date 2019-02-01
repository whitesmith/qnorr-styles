A style agnostic, slightly opinionated, style seasoning to bootstrap your projects.

## usage
Install via `npm`.
```shell
npm install qnorr-css
```

Season your project
```scss
@import "path/to/node_modules/qnorr-css/scss/qnorr";
or if your using a bundler (webpack)
@import "~qnorr-css/scss/qnorr"
```

Choose your seasonings
```scss
// Required
@import "~qnorr-css/scss/settings/index";
@import "~qnorr-css/scss/tools/index";

// optional external dependency
@import "~normalize.css/normalize.css";
// Optional (check all atoms available at )
@import "~qnorr-css/scss/base/reset";
@import "~qnorr-css/scss/objects/media";
@import "~qnorr-css/scss/objects/media";
@import "~qnorr-css/scss/utilties/spacers";
```


## Dependencies
qnorr ships with two dependencies by default:
- [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints) to handle our media query needs (required, no-opt-out)
- [normalize.css](https://github.com/necolas/normalize.css/) to reset browser styles (optional import if you're using scss verison)


## License
[MIT](LICENSE) — made by Whitesmith.