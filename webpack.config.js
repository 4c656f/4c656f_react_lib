const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: '4c656f_react_ui_kit',
            type: 'umd',
        },
        libraryTarget: "umd",
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'Readme.md'),
                    to: path.resolve(__dirname, 'dist')
                }
            ],
        }),
        new ExtractCssChunks({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            publicPath: '/'
                        },
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: [

                    {
                        loader: '@svgr/webpack', options: {
                            memo: true
                        }
                    },
                    {
                        loader: 'new-url-loader'
                    }
                ]
            },
            {
                test: /\.module\.scss$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            publicPath: '/'
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    'sass-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            publicPath: '/'
                        },
                    },
                    "css-loader",
                    'sass-loader'],
                exclude: /\.module\.scss$/
            },
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                sideEffects: false,
                exclude: /\.stories\.tsx$/
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
        ],
    }
}