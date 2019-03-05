// import { extractRoutesMd } from '../lib/utils/extraer-md.js';

// describe('extractAllRoutes', () => {
//   it('debería ser una función', () => {
//     expect(typeof extractRoutesMd).toBe('function');
//   });
//   it('es archivo', () => {
//     expect(extractRoutesMd('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md')).toEqual(['C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md']);
//   });
//   it('es directorio, debería devolver un array de archivos en formato md solamente', () => {
//     expect(extractRoutesMd('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp'))
//       .toEqual(['C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']);
//   });
//   it('debería recorrer una carpeta y devolver todas las rutas de los archivos md en array de string', () => {
//     expect(extractRoutesMd('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp').length).toBe(2);
//   });
//   it('debería recorrer una carpeta y devolver todas las rutas de los archivos md', () => {
//     const arrayRoutes = extractRoutesMd('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp');
//     expect(arrayRoutes.includes('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md')).toBe(true);
//     expect(arrayRoutes.includes('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md')).toBe(true);
//   });
// });