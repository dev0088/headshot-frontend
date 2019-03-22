const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const baseConfig = require('./webpack.common.js');

const pathsToClean = [
    'js',
];
const cleanOptions = {
    root: path.resolve(__dirname, 'public'),
    verbose: true,
};
const plugins = [
    new webpack.LoaderOptionsPlugin({
        minimize: true,
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Headshot Printing',
    }),
    new WorkboxPlugin.InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'sw.js',
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
];
module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'lodash',
            'fabric',
        ],
        app: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].[chunkhash:16].js',
        chunkFilename: 'js/[id].[chunkhash:16].js',
        publicPath: './',
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        unused: true,
                    },
                    ecma: 6,
                    mangle: true,
                    unused: true,
                },
                sourceMap: true,
            }),
        ],
    },
    plugins,
});
