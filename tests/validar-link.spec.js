import { validarLinks } from '../lib/utils/validate.js';

describe('validarLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validarLinks).toBe('function');
  });

  it('Debería devolver una promesa', () => {
    expect(validarLinks([{ href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
      route:
   'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' }])).toBeInstanceOf(Promise);
  });

  it('Debería devolver un json de links validados', async() => {
    expect.assertions(1);
    const data = await validarLinks([{ href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
      route:
     'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' }]);
    expect(data).toEqual([{'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'status': 200, 'statusText': 'OK', 'text': 'Markdown dfgdfgt el link lo ha truncado hasta aqui'}]);
  });
});