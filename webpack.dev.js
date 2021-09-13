const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlEntry = require("./src/js/data/node-html-entries.js");

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        ...htmlEntry.map((item) => {
            return new HtmlWebpackPlugin({
                template: "./src/template/template-dev.html",
                filename: `../${item}.html`,
                title: item == "index" ? "Home | MyMovieList" : `${item.charAt(0).toUpperCase()}${item.slice(1)} | MyMovieList`,
                chunks: [item],
            });
        }),
    ],
});
