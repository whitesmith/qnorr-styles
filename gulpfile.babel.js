import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import BrowserSync from 'browser-sync';
import pkg from './package.json';

const browserSync = BrowserSync.create();
const $ = gulpLoadPlugins();
const productionEnv = $.util.env.env === 'production';

const paths = {
	build: 'dist/',
	playground: {
		dest: "playground/"
	},
	tunnelUrl: "qnorr-sass",
  stylesheets: {
    manifesto: 'sass/qnorr.scss',
    src:  'sass/**/*.{scss, sass}',
    dest: 'dist/'
  },
};


export function handleError(task) {
  return function (err) {

    $.notify.onError({
      message: task + ' failed, check the logs..',
      sound: true
    })(err);

    $.util.log($.util.colors.bgRed(task + ' error:'), $.util.colors.red(err));
    this.emit('end');
  };
};



/*
 * Generate
 */
export function qnorrSass() {
  return gulp.src(paths.stylesheets.manifesto)
    .pipe($.plumber())
    .pipe($.if(!productionEnv, $.sourcemaps.init({
      loadMaps: true
    })))
    .pipe($.sass({
      precision: 3,
      sourceComments: !productionEnv,
      outputStyle: productionEnv ? 'compressed' : 'nested'
    }))
    .on('error', handleError('styles'))
    .pipe($.autoprefixer({
      browsers: [
        'last 2 versions',
        'ie >= 10',
        'android >= 4.4'
      ]
    }))
    .pipe($.if(productionEnv,$.cleanCss({
    	level: 2
	  })))
    .pipe($.if(productionEnv, $.size({title:  $.util.colors.bgRed('[SIZE] Styles: ')})))
    .pipe($.if(!productionEnv, $.sourcemaps.write({
      includeContent: true,
      sourceRoot: '.'
    })))
    .pipe(gulp.dest(paths.stylesheets.dest))
    .pipe(browserSync.reload({stream: true}))
}

export function qnorrSassGzip(){
	 return gulp.src(paths.build + 'qnorr.css')
    .pipe($.gzip())
    .pipe(gulp.dest(paths.build))
}

/*
 * Local server using BrowserSync
 */
export function browserSyncServer(done){
  var config = {
      server: {
        baseDir: paths.playground.dest,
        serveStaticOptions: {
          extensions: ['html']
        }
      }
  }
  //run TUNNEL=true gulp to start public tunnel url to share.
  if (process.env.TUNNEL === 'true') {
    config.tunnel = paths.tunnelUrl;
  }

  browserSync.init(config);
  done()
}



/*
 * Listen for Changes
 */
export function watch() {
  gulp.watch(paths.stylesheets.src, qnorrSass);
  $.util.log($.util.colors.bgGreen('Watching for changes...'));
}


// Clean builds
const clean = (done) => del([ paths.build ], done);

/*
 * Build
 */
const build = gulp.series(
  clean,
  gulp.parallel(
    qnorrSass
  ),
  qnorrSassGzip
);


/*
 * Serve
 *
 * Serve the deployable folder watch for changes and start a dev server
 */
const serve = gulp.series(
  build,
  gulp.parallel(watch, browserSyncServer)
);


/* Export const functions */
export {clean, build, serve};

/* Default gulp task as serve*/
export default serve;
