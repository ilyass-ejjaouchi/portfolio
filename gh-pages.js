const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'gh-pages',
    repo: 'https://github.com/ilyass-ejjaouchi/portfolio.git',
}, (err) => {
    console.log(err || 'Deploy Complete!');
});
