const localMeta = require('./site/data/meta.json');

module.exports = {
  plugins: {
		"posthtml-extend": {
			root: "./site/layouts",
			strict: true
		},
		"posthtml-modules": {
      root: "./site/modules"
    },
    "posthtml-expressions": {
      locals: {
				...localMeta,
				test: "My local variable"
      }
    },
  }
};
