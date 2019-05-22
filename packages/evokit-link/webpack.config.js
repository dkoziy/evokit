var makeWebpackConfig = require('../../config/webpack.config.js');

module.exports = makeWebpackConfig('EvoKitLink', __dirname, {
    index: './src/index.js',
    style: './src/style.sss',
    theme: './src/theme.sss'
});
