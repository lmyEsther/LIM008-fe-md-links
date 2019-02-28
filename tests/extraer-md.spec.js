import { extractAllRoutes } from '../lib/utils/extraer-md.js';

describe('extractAllRoutes', () => {
  it('debería ser una función', () => {
    expect(typeof extractAllRoutes).toBe('function');
  });
  it('es archivo', () => {
    expect(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt')).toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt']);
  });
  it('no es archivo', () => {
    expect(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'))
      .toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp//archivo2.txt', 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp//archivo3.js',
        'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp//test-1//archivo.md']);
  });
  // it('debería recorrer una carpeta y devolver todas las rutas de los archivos en array de string', () => {
  //     const pathsArr = extractAllRoutes('');
  //     expect(pathsArr.length).toBe();
  // });
  // it('debería recorrer una carpeta y devolver todas las rutas de los archivos', () => {
  //     const pathsArr = extractAllRoutes('');
  //     expect(pathsArr.length).toBe();
  //     expect(pathsArr.includes('')).toBe(true);
  // });
});