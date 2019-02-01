module.exports = ctx => ({
  plugins: {
		autoprefixer: require('autoprefixer'),
   	cssnano: ctx.options.env === "production" && require('cssnano')({preset: 'default'})
  }
});
