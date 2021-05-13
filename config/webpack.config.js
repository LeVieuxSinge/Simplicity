const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
    src: path.resolve(__dirname, '../src/'),
    dist: path.resolve(__dirname, '../dist/'),
};

const ENTRIES = {
    simplicity: {
        import: PATHS.src,
    },
};

module.exports = ['source-map'].map((devtool) => ({
    mode: 'development',
    entry: ENTRIES,
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        library: {
            type: 'umd', // Universal Module Definition
            name: 'Simplicity',
            umdNamedDefine: true,
        },
    },
    externals: {
        three: {
            commonjs: 'three',
            commonjs2: 'three',
            amd: 'three',
            root: 'THREE',
        },
        'three-gltf-loader': {
            commonjs: 'three-gltf-loader',
            commonjs2: 'three-gltf-loader',
            amd: 'three-gltf-loader',
            root: 'GLTFLoader',
        },
    },
    devtool,
    target: 'es2020',
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ["@babel/preset-env"],
                }
            }
        }, {
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
        }, {
            test: /\.css$/,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
            ],
        }, {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, ],
    },
}));