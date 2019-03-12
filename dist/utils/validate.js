"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarLinks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fetch = require('node-fetch');
/**
 * 
 * acá deberia ir la funcion para conocer el status del link
 * @param { Array de objetos }  jsonLinks
 * @returns objeto con status y status text
 * 
 */


var validarLinks =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(jsonLinks) {
    var copyJson, jsonPromises, res, validatedJsonLinks;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            copyJson = (0, _toConsumableArray2.default)(jsonLinks);
            _context.next = 3;
            return copyJson.map(function (link) {
              return fetch(link.href);
            });

          case 3:
            jsonPromises = _context.sent;
            _context.next = 6;
            return Promise.all(jsonPromises);

          case 6:
            res = _context.sent;
            validatedJsonLinks = copyJson.map(function (currentObj, linkStatus) {
              currentObj.status = res[linkStatus].status;
              currentObj.statusText = res[linkStatus].statusText;
              return currentObj;
            });
            return _context.abrupt("return", validatedJsonLinks);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validarLinks(_x) {
    return _ref.apply(this, arguments);
  };
}(); // (async() => {
//   console.log(await validarLinks([{ href: 'https://nodejs.org/es/',
//     text: 'Node.js',
//     route:
//    'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md' }]));
// })();


exports.validarLinks = validarLinks;