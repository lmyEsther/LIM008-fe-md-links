import { validarLinks } from '../lib/utils/validate.js';

test('Debería devolver un json de links validados', async() => {
  expect.assertions(1);
  const data = await validarLinks([{ href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
    route:
     'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    route:
     'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' }]);
  expect(data).toBe('');
});