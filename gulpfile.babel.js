import { src, dest, series, watch, lastRun } from "gulp";
import scss from "gulp-sass";
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import autoprefixer from "autoprefixer";
import del from "del";
import cssnano from "cssnano";


const paths = {
	scss: {
		src: "./scss",
		dest: "./dist"
	}
}

function clean(cb){
	return del(`${paths.scss.dest}/**`);
}

function build(cb){
	var plugins = [
		autoprefixer(),
		cssnano()
	];

	return src(`${paths.scss.src}/qnorr.scss`, {since: lastRun(build)})
		.pipe(sourcemaps.init())
		.pipe(scss().on('error', scss.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(dest(paths.scss.dest)) // non minified version
		.pipe(postcss(plugins))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(paths.scss.dest))
}

export function watching() {
	return watch(`${paths.scss.src}/**/*.scss`, build);
}


export default series(clean, build);
