const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TailwindCssPlugin = require("tailwindcss");

const htmlEntry = ["index", "details", "list", "browse", "about"];

module.exports = {
    entry: htmlEntry.reduce((acc, item) => {
        const entries = { ...acc };
        entries[item] = `./src/js/pages/${item}.js`;
        return entries;
    }, {}),
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public/js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
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
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                ident: "postcss",
                                plugins: [
                                    new TailwindCssPlugin({
                                        purge: {
                                            enabled: true,
                                            preserveHtmlElements: false,
                                            content: ["./src/**/*.js", "./src/**/*.html"],
                                        },
                                    }),
                                    require("autoprefixer"),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        ...htmlEntry.map((item) => {
            return new HtmlWebpackPlugin({
                template: "./src/template/template.html",
                filename: `../${item}.html`,
                title: item == "index" ? "Home | MyMovieList" : `${item.charAt(0).toUpperCase()}${item.slice(1)} | MyMovieList`,
                chunks: [item],
            });
        }),
    ],
};
