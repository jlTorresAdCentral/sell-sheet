const { merge } = require('webpack-merge');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = function (config) {
    return merge(config, {
        entry: '/src/main.tsx', // Usa main.tsx como el archivo de entrada
        mode: 'development',
        devtool: 'source-map',
        output: {
            publicPath: '/',
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
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'], // Permite resolver archivos .ts, .tsx, y .js
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: '/src/index.html', // Usa este archivo como plantilla
                filename: 'index.html', // Nombre del archivo de salida
            }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            }),
        ],
    });
};
