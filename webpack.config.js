const { merge } = require('webpack-merge');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (config) {
    return merge(config, {
        entry: path.resolve(__dirname, 'src/main.tsx'),
        mode: 'development',
        devtool: 'source-map',
        output: {
            publicPath: '/sell-sheet/',
            filename: 'main.bundle.js', // Nombre del archivo de salida para el bundle
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // Maneja archivos .ts y .tsx
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.js$/, // Si usas JavaScript también
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/, // Maneja archivos .css
                    use: ['style-loader', 'css-loader'],
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'], // Permite resolver archivos .ts, .tsx, y .js
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html', // Nombre del archivo de salida
            }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            }),
        ],
    });
};
