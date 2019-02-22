var ghpages = require('gh-pages');

console.log('🚀 Deploying...')
ghpages.publish('docs', function(err) {
	return err ? console.log(err) : console.log('✅ Success!')
});
