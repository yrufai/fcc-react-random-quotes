const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");

module.exports = (env) => {
const devMode = env !== "production"
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "[name]-bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename:  '[name].css'
            }),
            new webpack.LoaderOptionsPlugin({
                options:{
                    postcss: [
                        autoprefixer()
                    ]
                }
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 8080,
            historyApiFallback: true, 
            publicPath: "/dist/"
        },
        devtool: devMode ? "cheap-module-eval-source-map" : "source-map"

    }
}