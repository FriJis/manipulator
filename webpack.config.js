const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        publicPath: '/'
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'main.css'
    }),
    new Dotenv()],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(ttf|woff|woff|svg|eot|woff2|jpg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
};