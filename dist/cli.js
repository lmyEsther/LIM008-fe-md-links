#!/usr/bin/env node
"use strict";

var _main = require("./main.js");

var _stats = require("./utils/stats.js");

const [,, ...args] = process.argv;
let options = {
  validate: false
};
const routeInput = args[0];

if (args.includes('--validate') && args.includes('--stats')) {
  options.validate = true;
  (0, _main.mdLinks)(routeInput, options).then(res => {
    console.log(`
      Total: ${res.length}
      Broken: ${res.filter(link => link.status >= 404).length}
      Unique: ${(0, _stats.filtrarLinksUnicos)(res).length}
      `);
  }).catch(err => console.log(err));
} else if (args.includes('--stats')) {
  (0, _main.mdLinks)(routeInput, options).then(res => {
    console.log(`
    Total: ${res.length}
    Unique: ${(0, _stats.filtrarLinksUnicos)(res).length}
    `);
  }).catch(err => console.log(err));
} else if (args.includes('--validate')) {
  options.validate = true;
  (0, _main.mdLinks)(routeInput, options).then(res => {
    res.forEach(ele => {
      console.log(`${routeInput} ${ele.href} ${ele.text} ${ele.status} ${ele.statusText}`);
    });
  }).catch(err => console.log(err));
} else {
  (0, _main.mdLinks)(routeInput, options).then(res => {
    res.forEach(ele => {
      console.log(`${routeInput} ${ele.href} ${ele.text}`);
    });
  }).catch(err => console.log(err));
}

;