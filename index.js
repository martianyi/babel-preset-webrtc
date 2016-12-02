"use strict";

const dependencies = require('./package.json')['dependencies'];
const plugins = Object.keys(dependencies).map((plugin) => {
    return require(plugin);
});
module.exports = {
    plugins: plugins
};