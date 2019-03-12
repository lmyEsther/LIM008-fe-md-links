#!/usr/bin/env node

import { mdLinks } from './main.js';
import { filtrarLinksUnicos } from './utils/stats.js';
const [,, ...args] = process.argv;

let options = {
  validate: false
};

const routeInput = args[0];

if (args.includes('--validate') && args.includes('--stats')) {
  options.validate = true;
  mdLinks(routeInput, options).then((res) => {
    console.log(`
      Total: ${res.length}
      Broken: ${res.filter(link => link.status >= 404).length}
      Unique: ${filtrarLinksUnicos(res).length}
      `);
  }).catch(err => console.log(err));
} else if (args.includes('--stats')) {
  mdLinks(routeInput, options).then((res) => {
    console.log(`
    Total: ${res.length}
    Unique: ${filtrarLinksUnicos(res).length}
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

