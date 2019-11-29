
<h1 align="center">
qnorr
</h1>

<p align="center">
A style agnostic sass seasoning framework to bootstrap your projects
<br />
<br />

<a href="https://www.npmjs.com/package/@whitesmith/qnorr-styles">
  <img src="https://img.shields.io/npm/v/@whitesmith/qnorr-styles?color=%23ffbc05&logo=asdad&style=for-the-badge" alt="npm version">
</a>

<img src="https://img.shields.io/github/license/whitesmith/qnorr-styles?style=for-the-badge" alt="license">

</p>

---

## Documentation

> If it’s not documented, it doesn’t exist. Documentation should become the default – an integrated part of the development process.
> — Miriam Suzanne

[See full documentation](https://whitesmith.github.io/qnorr-styles/)

## install
Install via `npm` or `yarn`.

```shell
yarn add @whitesmith/qnorr-styles
```

Alternatively you can add the built version straight into you pages head

```html
<!-- replace x.x.x per your current version -->
<link rel="stylesheet" href="https://unpkg.com/@whitesmith/qnorr-styles@x.x.x/dist/qnorr.min.css">
``` 


## usage
If you've installed the package as module then **at your `{main,index,app}.scss`** 


```scss
@import "path/to/node_modules/@whitesmith/qnorr-styles/scss/qnorr";

// or if your using a bundler with alias for node_modules (webpack / parcel)
@import "~@whitesmith/qnorr-styles/scss/qnorr";

// if your using node_sass and defined a custom importer or includePaths
@import "@whitesmith/qnorr-styles/scss/qnorr";
```

**at your entry file `index.js`**
```javascript
import "@whitesmith/qnorr-styles"; // this will import qnorr.css from dist/qnorr.css
```


## Customizing
Want a custom flavour? Go the sassy way.
<div class="flash flash-warn">
  _"~" is an alias path to `node_modules` and can be different in your system_
</div>

```scss
////
/// CONFIGURATION
////

// at your {main, index, app}.scss file all your config variables overrides;
$qnorr-grid-columns-number: 10;

// import settings to be overriden by the configuration above;
@import "~@whitesmith/qnorr-styles/scss/settings";

/////
/// TOOLING
///
/// [1] - in perfect world this would also import qnorr-styles required dependencies
/// (mappy-breakpoints), but we're not in a perfect world so check issue#10
/// for why we decide to not include it by default for now
///
/// [2] - You can also import individual function and mixins, but then you have
/// check their dependencies on documentation, since there's no output code
/// it makes little sence to do it. It's possible. But not practical.
////
@import "~mappy-breakpoints/_mappy-breakpoints"; // [1] required
@import "~@whitesmith/qnorr-styles/scss/tools"; //  [2] all functions and mixins


////
/// OOCSS MODULES
///
/// ready to use OOCSS elements, generated with your config
/// [3] - Similar [1], not influenced by any configuration
////

@import "~normalize.css/normalize.css"; // [3]
@import "~@whitesmith/qnorr-styles/scss/global/_g.resets";
@import "~@whitesmith/qnorr-styles/scss/objects/_o.media";
@import "~@whitesmith/qnorr-styles/scss/objects/_o.grid";
@import "~@whitesmith/qnorr-styles/scss/objects/_o.skeleton";
@import "~@whitesmith/qnorr-styles/scss/utilities/_u.spacers";
@import "~@whitesmith/qnorr-styles/scss/utilities/_u.widths";
@import "~@whitesmith/qnorr-styles/scss/utilities/_u.text";
```


## Dependencies
qnorr ships with two dependencies by default:
- [mappy-breakpoints (required)](https://github.com/zellwk/mappy-breakpoints) to handle our media query needs
- [normalize.css (optional)](https://github.com/necolas/normalize.css/) to reset browser styles (optional import if you're using scss verison)

Note: read more about [sass module dependency import issues here](https://github.com/whitesmith/qnorr-styles/issues/10);



## Contributing

- We use [gulp@4.0^](https://gulpjs.com/) to build the framework.
- We use [sassdoc](https://sassdoc.com/) to build and generate documentation `/docs` folder. Head to the site to learn how to use it, or just check any source file for an example, you'll get it super fast. A pretty custom theme is possible but let's leave it for version 2.
- We use [parcel](https://parceljs.org/) and [posthtml plugins](https://github.com/posthtml/posthtml) to build a basic site located under `/site` folder so you can play around with the framework.

### Developing
```
# watch mode for qnorr will also start a server for documentation
yarn run start
```

### Production build 
```
# optimized output for publishing
yarn run qnorr:build
```

### Play at playground site
```
yarn run playground:dev
```

### Testing 
We do have unit tests for sass 🤓functions and mixins (thanks @tomasmcm). If you add any, pleas write your tests!Also thanks to @oddbird's [true](https://github.com/oddbird/true) and [jest](https://github.com/facebook/jest) for the tools to make it happen.

```
yarn run test
```

## License
[MIT](LICENSE) — made with 💚 by [Whitesmith](https://whitesmith.co).
