"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtrarLinksUnicos = void 0;

/**
 * 
 * @param { object } jsonLinks 
 * 
 * @returns { array } array de links unicos
 * 
 * 
 */
var filtrarLinksUnicos = function filtrarLinksUnicos(jsonLinks) {
  var arrayUrl = jsonLinks.reduce(function (acum, ele) {
    acum.push(ele.href);
    return acum;
  }, []);
  var uniqueLinks = arrayUrl.filter(function (item, index, array) {
    return array.indexOf(item) === index;
  });
  return uniqueLinks;
};

exports.filtrarLinksUnicos = filtrarLinksUnicos;