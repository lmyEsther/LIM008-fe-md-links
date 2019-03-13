"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarLinks = void 0;

const fetch = require('node-fetch');
/**
 * 
 * acá deberia ir la funcion para conocer el status del link
 * @param { Array de objetos }  jsonLinks
 * @returns objeto con status y status text
 * 
 */


const validarLinks = async jsonLinks => {
  const copyJson = [...jsonLinks];
  const jsonPromises = await copyJson.map(link => fetch(link.href));
  const res = await Promise.all(jsonPromises);
  const validatedJsonLinks = copyJson.map((currentObj, linkStatus) => {
    currentObj.status = res[linkStatus].status;
    currentObj.statusText = res[linkStatus].statusText;
    return currentObj;
  });
  return validatedJsonLinks;
};

exports.validarLinks = validarLinks;