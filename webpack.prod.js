const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TailwindCssPlugin = require("tailwindcss");

module.exports = merge(common, {
    mode: "production",
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
});
