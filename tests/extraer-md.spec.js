import { extractAllRoutes, filterMD } from '../lib/utils/extraer-md.js';

describe('extractAllRoutes', () => {
  it('debería ser una función', () => {
    expect(typeof extractAllRoutes).toBe('function');
  });
  it('es archivo', () => {
    expect(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt')).toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt']);
  });
  it('es directorio', () => {
    expect(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'))
      .toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt', 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo3.js',
        'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']);
  });
  it('debería recorrer una carpeta y devolver todas las rutas de los archivos en array de string', () => {
    expect(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp').length).toBe(4);
  });
  it('debería recorrer una carpeta y devolver todas las rutas de los archivos', () => {
    const arrayRoutes = extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp');
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt')).toBe(true);
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo3.js')).toBe(true);
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md')).toBe(true);
    expect(arrayRoutes.includes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md')).toBe(true);
  });
  it('Debería devolver un array de archivos en formato md solamente', () => {
    expect(filterMD(extractAllRoutes('C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp'))).toEqual(['C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md',
      'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md']);
  });
});