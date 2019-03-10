import { validarLinks } from '../../lib/utils/validate.js';

const fetchMock = require('../../__mocks__/node-fetch.js');

fetchMock.config.sendAsJson = false;
fetchMock.config.fallbackToNetwork = true;

describe('validarLinks', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  
  it('Debería ser una función', () => {
    expect(typeof validarLinks).toBe('function');
  });

  // it('Debería devolver una promesa', () => {
  //   expect(validarLinks([{ href: 'https://es.wikipedia.org/wiki/Markdown',
  //     text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
  //     route:
  //  'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' }])).toBeInstanceOf(Promise);
  // });

  it('Debería devolver un json de links validados', async() => {
    expect.assertions(1);
    fetchMock.get('https://es.wikipedia.org/wiki/Markdown', { status: 200, statusText: 'OK'});
    // fetchMock.mock('https://es.wikipedia.org/wiki/Markdown', 200)

    const data = await validarLinks([{ href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown dfgdfgt el link lo ha truncado hasta aqui',
      route:
     'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md' }]);
    expect(data).toEqual([{'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Betech\\Desktop\\Laboratoria\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'status': 200, 'statusText': 'OK', 'text': 'Markdown dfgdfgt el link lo ha truncado hasta aqui'}]);
  });
});