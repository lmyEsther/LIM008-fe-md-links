"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extraerMd = require("./utils/extraer-md.js");

var _extraerLinks = require("./utils/extraer-links.js");

var _validate = require("./utils/validate.js");

var path = require('path');
/**
*
*Esta funcion devuelve una promesa, segun las especificaciones de acuerdo a los argumentos
*que ingrese el desarrolador
*@param { String } route
*@param { object } options
*@returns promise
*
*/


var mdLinks =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(route, options) {
    var absolute, arrayRoutesMD, jsonLinks, copyJson, promise;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            absolute = path.resolve(route);
            arrayRoutesMD = (0, _extraerMd.extractRoutesMd)(absolute);
            jsonLinks = (0, _extraerLinks.extractLinks)(arrayRoutesMD);
            copyJson = (0, _toConsumableArray2.default)(jsonLinks);

            if (!options.validate) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return (0, _validate.validarLinks)(copyJson);

          case 7:
            _context.t0 = _context.sent;
            _context.next = 11;
            break;

          case 10:
            _context.t0 = jsonLinks;

          case 11:
            promise = _context.t0;
            return _context.abrupt("return", promise);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function mdLinks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // siguiendo feedback de Mariano de aplicar new Promise tambien
// export const mdLinks = (route, options) => {
//   return new Promise((resolve, reject) => {
//     const absolute = path.resolve(route);
//     const arrayRoutesMD = extractRoutesMd(absolute);
//     const jsonLinks = extractLinks(arrayRoutesMD);
//     const copyJson = [ ...jsonLinks];
//     if (route) {
//       if (options.validate) {
//         validarLinks(copyJson).then(res => resolve(res));
//       } else {
//         resolve(jsonLinks);
//       }
//     } else {
//       reject('no hay ruta');
//     }
//   });
// };


exports.mdLinks = mdLinks;