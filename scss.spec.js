const { runSass } = require('sass-true')
const { sync } = require('glob');
const sass =  require('sass');

describe('SCSS', () => {
  const files = sync('scss/**/*.spec.scss')
  files.forEach(file => {
    runSass({ file }, { sass, describe, it })
  })
})
