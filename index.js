"use strict";

const dependencies = require('./package.json')['dependencies'];
module.exports = {
    plugins: Object.keys(dependencies).map(plugin=>require(plugin))
};