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
import browserSync from 'browser-sync';

const server = browserSync.create();
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

	return src(`${paths.scss.src}/qnorr.scss`, { since: lastRun(build) })
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

export function sassDocs(done) {
	const options = {
		dest: 'docs',
		verbose: true,
		//theme: "flippant"
	};
	const stream = sassdoc(options);

  src(`${paths.scss.src}/**/*.scss`)
    .pipe(stream)
    .on('end', function () {
      console.log('End of parsing phase');
    });

  return stream.promise.then(function () {
    console.log('End of documentation process');
  });
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: paths.docs.dest
    }
  });
  done();
}

export function watching() {
	watch(`${paths.scss.src}/**/*.scss`, series(build, sassDocs, reload));
}

exports["dev"] = series(cleanDocs, clean, build, sassDocs, serve, watching);
export default series(clean, build, sassDocs);
