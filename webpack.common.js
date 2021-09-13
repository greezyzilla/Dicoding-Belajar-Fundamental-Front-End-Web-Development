const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlEntry = ["index", "details", "list", "browse", "about"];

module.exports = {
    entry: htmlEntry.reduce((acc, item) => {
        const entries = { ...acc };
        entries[item] = `./src/js/pages/${item}.js`;
        return entries;
    }, {}),
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public/js",
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
