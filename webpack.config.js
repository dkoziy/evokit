var path = require('path');
var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
var PROJECT_DEPS = process.env.PROJECT_DEPS || __dirname;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssEach = require('postcss-each');
var postcssConditionals = require('postcss-conditionals');
var postcssNested = require('postcss-nested');
var postcssCustomProperties = require('postcss-custom-properties');
var postcsscustomMedia = require('postcss-custom-media');
var postcssMixins = require('postcss-mixins');
var postcssImport = require('postcss-import');
var postcssMqpacker = require("css-mqpacker");

var extractSTYL = new ExtractTextPlugin('[name].css');

var entryList = {
    'index':          path.resolve(__dirname, 'src/index.js'),
    'Box/index':      path.resolve(__dirname, 'src/Box'),
    'Panel/index':    path.resolve(__dirname, 'src/Panel'),
    'Grid/index':     path.resolve(__dirname, 'src/Grid'),
    'List/index':     path.resolve(__dirname, 'src/List'),
    'Link/index':     path.resolve(__dirname, 'src/Link'),
    'Picture/index':  path.resolve(__dirname, 'src/Picture'),
    'Text/index':     path.resolve(__dirname, 'src/Text'),
    'Line/index':     path.resolve(__dirname, 'src/Line'),
    'Image/index':    path.resolve(__dirname, 'src/Image'),
    'Tags/index':     path.resolve(__dirname, 'src/Tags'),
};

module.exports = {
    entry: entryList,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.sss$/,
                use: extractSTYL.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // ident: 'postcss',
                            parser: 'sugarss',
                            plugins: [
                                postcssImport(),
                                postcssMixins(),
                                postcssEach(),
                                postcssConditionals(),
                                postcssNested(),
                                // postcssCustomProperties({
                                //     preserve: 'computed',
                                //     warnings: true,
                                //     variables: {
                                //         EKLineColor: '#dde8f0',
                                //         EKStepSize: '5px'
                                //     }
                                // }),
                                // postcsscustomMedia({
                                //     extensions: {
                                //         EKMediaSmall: 'only screen and (min-width: 480px)',
                                //         EKMediaMedium: 'only screen and (min-width: 768px)',
                                //         EKMediaLarge: 'only screen and (min-width: 960px)',
                                //         EKMediaXlarge: 'only screen and (min-width: 1200px)',
                                //         EKMediaXxlarge: 'only screen and (min-width: 1400px)',
                                //         EKMediaXxxlarge: 'only screen and (min-width: 1600px)'
                                //     }
                                // }),
                                postcssMqpacker()
                            ]
                        }
                    }
                ])
            },
        ],
    },
    plugins: [
        new PeerDepsExternalsPlugin(),
        extractSTYL,
    ],
    resolve: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
        extensions: ['.js', '.jsx', '.sss'],
    },
    resolveLoader: {
        modules: [path.resolve(PROJECT_DEPS, 'node_modules'), 'node_modules'],
    },
};
