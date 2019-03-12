# Markdown Links

## Preámbulo
Markdown Links es un modulo que extrae y valida cada link que haya dentro de un archivo en formato markdown.

## Instalación

Ejecuta `npm install --global lmyEsther/md-links`.


### JavaScript API

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. 
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

Cada objeto representa un link y contiene
las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `route`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

Si pasamos la opción `--validate`, retorna

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

# Flujograma del proyecto

Antes de empezar a codear se ha realizado un flujograma de lo que hace la función principal.

![flujograma-mdlinks](https://user-images.githubusercontent.com/45083990/54163941-b2c2c400-4428-11e9-90b2-5c8a75d490b9.png)

# Board del Backlog

Para realizar este proyecto se ha trabajado para la metodología SCRUM por sprint, en la cual 
la planificación se ha dividido en tres sprints. Los cuales han contado con 6 historias de usuarios que se encuentran en un milestones bajo un proyecto que he llamado fe-md-links. Se detalla a continuación:

### 1er Sprint

Se realizó todo lo que tiene que ver con el flujograma del módulo. De acuerdo a este flujograma, se proyectaron las funciones a utilizar y los tests de las mismas.

### 2do Sprint

Se trabajó en todo lo que tiene que ver con la función para extraer los links, desde leer si es un archivo o un directorio hasta extraer cada link y almacenarlos en un array de objetos (jsonLinks). En si, en las historias 1, 2, 3 que se encuentran en cada milestone.

## 3er Sprint

Se trabajó bajo los milestones 4, 5, 6; los cuales son historias de usuario que se reducen a validar los links y todo lo que tiene que ver con la funcion mdLinks, que es donde se procesa todo lo que tiene que ver con la promesa desde la linea de comandos. Se hizo ejecutable e instalable el modulo. Además, se realizó mock de node-fetch para que corran los tests sin conexión a internet.

