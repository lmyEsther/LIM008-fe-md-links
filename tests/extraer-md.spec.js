import { extractRoutesMd } from '../lib/utils/extraer-md.js';

describe('extractAllRoutes', () => {
  it('debería ser una función', () => {
    expect(typeof extractRoutesMd).toBe('function');
  });
  it('es archivo', () => {
    expect(extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt')).toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt']);
  });
  it('es directorio', () => {
    expect(extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'))
      .toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt', 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo3.js',
        'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']);
  });
  it('debería recorrer una carpeta y devolver todas las rutas de los archivos en array de string', () => {
    expect(extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp').length).toBe(4);
  });
  it('debería recorrer una carpeta y devolver todas las rutas de los archivos', () => {
    const arrayRoutes = extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp');
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt')).toBe(true);
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo3.js')).toBe(true);
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md')).toBe(true);
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md')).toBe(true);
  });
  it('Debería devolver un array de archivos en formato md solamente', () => {
    expect(extractRoutesMd('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp')).toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md',
      'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']);
  });
});