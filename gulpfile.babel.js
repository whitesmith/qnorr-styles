import { src, dest, series, parallel, watch, lastRun } from "gulp";
import path from "path";
import scss from "gulp-sass";
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import autoprefixer from "autoprefixer";
import del from "del";
import cssnano from "cssnano";
import sassdoc from "sassdoc"
import moduleImporter from 'sass-module-importer';


const paths = {
	scss: {
		src: "./scss",
		dest: "./dist"
	},
	docs: {
		dest: "./docs"
	}
}

function clean(cb){
	return del(`${paths.scss.dest}/**`);
}

export function cleanDocs(cb){
	return del(`${paths.docs.dest}/**`);
}

function build(cb){
	var plugins = [
		autoprefixer(),
		cssnano()
	];

	return src(`${paths.scss.src}/qnorr.scss`)
		.pipe(sourcemaps.init())
		.pipe(scss({
			importer: moduleImporter()
		}).on('error', scss.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(dest(paths.scss.dest)) // non minified version
		.pipe(postcss(plugins))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('.'))
		.pipe(dest(paths.scss.dest))
}

export function sassDocs() {
	const options = {
		dest: 'docs',
		verbose: true,
		//theme: "flippant"
	};

	return src(`${paths.scss.src}/**/*.scss`)
		.pipe(sassdoc(options));

}


export function watching() {
	watch(`${paths.scss.src}/**/*.scss`, parallel(build, sassDocs));
}

exports["dev"] = series(cleanDocs, clean, build, sassDocs, watching);
export default series(clean, build);
