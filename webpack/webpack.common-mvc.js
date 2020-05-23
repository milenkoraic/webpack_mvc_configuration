const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: Path.resolve(__dirname, '../src/js/index.js'),
        vendor: Path.resolve(__dirname, '../public/include/vendor.js'),
    },
    output: {
        path: Path.join(__dirname, '../build'),
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
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{ from: Path.resolve(__dirname, '../public/assets'), to: './assets' }]),
        new CopyWebpackPlugin([{ from: Path.resolve(__dirname, '../public/favicon.ico'), to: './' }]),
        new HtmlWebpackPlugin({ template: Path.resolve(__dirname, '../src/views/Page1/Index.html'), 
        filename: 'Views/Page1/Index.html'}),
        new HtmlWebpackPlugin({ template: Path.resolve(__dirname, '../src/views/Page2/Index.html'), 
        filename: 'Views/Page2/Index.html'}),
        new HtmlWebpackPlugin({ template: Path.resolve(__dirname, '../src/views/Page3/Index.html'), 
        filename: 'Views/Page3/Index.html'}),
        new HtmlWebpackPlugin({ template: Path.resolve(__dirname, '../src/views/Page4/Index.html'), 
        filename: 'Views/Page4/Index.html'}),
        new HtmlWebpackPlugin({ template: Path.resolve(__dirname, '../src/views/Page5/Index.html'), 
        filename: 'Views/Page5/Index.html'}),
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