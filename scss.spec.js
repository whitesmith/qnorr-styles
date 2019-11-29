const { runSass } = require('sass-true')
const { sync } = require('glob');

describe('SCSS', () => {
  const files = sync('scss/**/*.spec.scss')
  files.forEach(file => runSass({ file }, {describe, it}) )
})
