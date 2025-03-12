module.exports = function (config) {
    return merge(config, {
        entry: './src/main.tsx', // Usa una ruta relativa
        mode: 'development',
        devtool: 'source-map',
        output: {
            publicPath: '/',
            filename: 'main.bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html', // Usa una ruta relativa
                filename: 'index.html',
            }),
        ],
    });
};
