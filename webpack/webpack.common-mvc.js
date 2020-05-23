const Path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/js/app.js'),
        vendor: Path.resolve(__dirname, '../public/include/vendor.js'),
    },
    output: {
        path: Path.join(__dirname, '../dist'),
        filename: 'js/[name]/[name].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name(module, chunks, cacheGroupKey) {
                return cacheGroupKey;
            },
        },
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{ from: Path.resolve(__dirname, '../public/assets'), to: './' }]),
        new HtmlWebpackPlugin({ template: Path.resolve(__dirname, '../src/views/Index.html'), 
        filename: 'Index.html'}),
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto',
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/assets/[name].[ext]',
                    },
                },
            },
        ],
    },
};