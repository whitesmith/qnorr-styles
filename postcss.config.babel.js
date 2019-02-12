import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

module.exports = ((_) => {
	let env = process.env.NODE_ENV;

	return {
		modules: true,
		plugins: [
			autoprefixer(),
			(env === "production" && cssnano())
		]
	}
})();
