const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const PATHS = {
    src: path.resolve(__dirname, '../src/'),
    dist: path.resolve(__dirname, '../dist/'),
};

const ENTRIES = {
    simplicity: [PATHS.src],
};

module.exports = [

    // Minified
    {
        context: __dirname,
        mode: 'production',
        entry: ENTRIES,
        output: {
            path: PATHS.dist,
            filename: '[name].min.js',
            publicPath: '/',
            library: {
                type: 'umd', // universal module definition
                name: 'Simplicity',
            },
        },
        plugins: [
            // new CleanWebpackPlugin(),
            new VueLoaderPlugin(),
        ],
        module: {
            rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, ],
        },
    },

    // Non minified
    {
        context: __dirname,
        mode: 'production',
        entry: ENTRIES,
        output: {
            path: PATHS.dist,
            filename: '[name].js',
            publicPath: '/',
            library: {
                type: 'umd', // universal module definition
                name: 'Simplicity',
            },
        },
        plugins: [
            new CleanWebpackPlugin(), // executed first so clean foler
            new VueLoaderPlugin(),
        ],
        module: {
            rules: [{
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, ],
        },
        optimization: {
            minimize: false,
        },
    }

]