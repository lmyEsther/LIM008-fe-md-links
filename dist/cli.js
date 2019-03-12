#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _main = require("./main.js");

var _stats = require("./utils/stats.js");

var _process$argv = (0, _toArray2.default)(process.argv),
    args = _process$argv.slice(2);

var options = {
  validate: false
};
var routeInput = args[0];

if (args.includes('--validate') && args.includes('--stats')) {
  options.validate = true;
  (0, _main.mdLinks)(routeInput, options).then(function (res) {
    console.log("\n      Total: ".concat(res.length, "\n      Broken: ").concat(res.filter(function (link) {
      return link.href >= 400;
    }).length, "\n      Unique: ").concat((0, _stats.filtrarLinksUnicos)(res).length, "\n      "));
  }).catch(function (err) {
    return console.log(err);
  });
} else if (args.includes('--stats')) {
  (0, _main.mdLinks)(routeInput, options).then(function (res) {
    console.log("\n    Total: ".concat(res.length, "\n    Unique: ").concat((0, _stats.filtrarLinksUnicos)(res).length, "\n    "));
  }).catch(function (err) {
    return console.log(err);
  });
} else if (args.includes('--validate')) {
  options.validate = true;
  (0, _main.mdLinks)(routeInput, options).then(function (res) {
    res.forEach(function (ele) {
      console.log("".concat(routeInput, " ").concat(ele.href, " ").concat(ele.text, " ").concat(ele.status, " ").concat(ele.statusText));
    });
  }).catch(function (err) {
    return console.log(err);
  });
} else {
  (0, _main.mdLinks)(routeInput, options).then(function (res) {
    res.forEach(function (ele) {
      console.log("".concat(routeInput, " ").concat(ele.href, " ").concat(ele.text));
    });
  }).catch(function (err) {
    return console.log(err);
  });
}

;