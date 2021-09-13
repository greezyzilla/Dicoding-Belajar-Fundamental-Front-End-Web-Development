const htmlEntry = require("./src/js/data/node-html-entries.js");

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
};
