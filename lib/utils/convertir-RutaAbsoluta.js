const path = require('path')

/**
 * Esta funcion deberia confirmar que la ruta ingresada por la desarrolladora tiene el status de absoluta
 * 
 * @param { String } root
 * @returns booleano true o false
 *  
 */

export const isAbsoluteTheRoot = (root) => {
    const isAbsolute = path.isAbosulte(root);
    return isAbsolute;
}

/**
 * Convierte la ruta relativa a absoluta
 * @param { string } root 
 * @returns string de la ruta absoluta
 * 
 * 
 */
const convertToAbsolute = (root) => {

};