import { toAbsolute } from '../lib/utils/convertir-RutaAbsoluta.js';

describe('toAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof toAbsolute).toBe('function');
  });
  it('Debería regresar una ruta absoluta si se le ingreso una ruta relativa', () => {
    expect(toAbsolute('tests\\test-imp\\archivo2.txt')).toBe('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt');
  });
  it('Debería regresar la misma ruta si es absoluta', () => {
    expect(toAbsolute('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt')).toBe('C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\archivo2.txt');
  });
});