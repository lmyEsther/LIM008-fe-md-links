#!/usr/bin/env node

import { mdLinks } from './main.js';
import { filtrarLinksUnicos } from './utils/stats.js';
const [,, ...args] = process.argv;

// console.log(`Hello World ${args}`);

let options = {
  validate: false
};

const routeInput = args[0];

if (args.includes('--validate') && args.includes('--stats')) {
  options.validate = true;
  mdLinks(routeInput, options).then((res) => {
    console.log(`
      total: ${res.length}
      broken: ${res.filter(link => link.href >= 400).length}
      unique: ${filtrarLinksUnicos(res).length}
      `);
  }).catch(err => console.log(err));
} else if (args.includes('--stats')) {
  mdLinks(routeInput, options).then((res) => {
    console.log(`
    total: ${res.length}
    unique: ${filtrarLinksUnicos(res).length}
    `);
  }).catch(err => console.log(err));
} else if (args.includes('--validate')) {
  options.validate = true;
  mdLinks(routeInput, options).then((res) => {
    res.forEach(ele => {
      console.log(`${routeInput} ${ele.href} ${ele.text} ${ele.status} ${ele.statusText}`);
    });
  }).catch(err => console.log(err));
} else {
  mdLinks(routeInput, options).then(res => {
    res.forEach(ele => {
      console.log(`${routeInput} ${ele.href} ${ele.text}`);
    });
  }).catch(err => console.log(err));
};

