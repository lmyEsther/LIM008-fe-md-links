import { mdLinks } from '../lib/main.js';

let options = {
  validate: false
};

describe('mdLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('Debería devolver una promesa', () => {
    expect(mdLinks('tests\\test-imp\\test-1\\archivo.md', options)).toBeInstanceOf(Promise);
  });

  it('Devuelve una promesa que resuelve a un array de objetos de un archivo', async() => {
    expect.assertions(1);
    const data = await mdLinks('tests\\test-imp\\test-1\\archivo.md', options);
    expect(data).toEqual([{'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'text': 'Markdown dfgdfgt el link lo ha truncado hasta aqui'}, 
      {'href': 'https://nodejs.org/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'text': 'Node.js'}]);
  });

  it('Devuelve una promesa que resuelve a un array de objetos de un directorio', async() => {
    expect.assertions(1);
    const data = await mdLinks('tests\\test-imp\\test-1', options);
    expect(data).toEqual([{'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'text': 'Markdown dfgdfgt el link lo ha truncado hasta aqui'}, 
      {'href': 'https://nodejs.org/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'text': 'Node.js'},
      {'href': 'https://nodejs.org/es/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md', 'text': 'Node.js'},
      { 'href': 'https://developers.google.com/v8/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md', 'text': 'motor de JavaScript V8 de Chrome'}]);
  });
  
  it('Devuelve una promesa que resuelve un array de objetos con validate', async() => {
    expect.assertions(1);
    options.validate = true;
    const data = await mdLinks('tests\\test-imp\\test-1\\archivo.md', options);
    expect(data).toEqual([{'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'status': 200, 'statusText': 'OK', 'text': 'Markdown dfgdfgt el link lo ha truncado hasta aqui'}, {'href': 'https://nodejs.org/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'status': 200, 'statusText': 'OK', 'text': 'Node.js'}]);
  });

  it('Devuelve una promesa que resuelve un array de objetos con validate', async() => {
    expect.assertions(1);
    options.validate = true;
    const data = await mdLinks('tests\\test-imp\\test-1', options);
    expect(data).toEqual([{'href': 'https://es.wikipedia.org/wiki/Markdown', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'status': 200, 'statusText': 'OK', 'text': 'Markdown dfgdfgt el link lo ha truncado hasta aqui'}, 
      {'href': 'https://nodejs.org/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo.md', 'status': 200, 'statusText': 'OK', 'text': 'Node.js'},
      {'href': 'https://nodejs.org/es/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md', 'status': 200, 'statusText': 'OK', 'text': 'Node.js'},
      { 'href': 'https://developers.google.com/v8/', 'route': 'C:\\Users\\Laboratoria\\Documents\\Projects\\LIM008-fe-md-links\\tests\\test-imp\\test-1\\archivo4.md', 'status': 200, 'statusText': 'OK', 'text': 'motor de JavaScript V8 de Chrome'}]);
  });
});