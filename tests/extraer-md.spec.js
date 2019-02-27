
describe('extractAllRoutes',() => {
    it('debería ser una función', () => {
        expect(typeof extractAllRoutes).toBe('function');
    });
    it('debería recorrer una carpeta y devolver todas las rutas de los archivos en array de string', () => {
        const pathsArr = extractAllRoutes('');
        expect(pathsArr.length).toBe();
    });
    it('debería recorrer una carpeta y devolver todas las rutas de los archivos', () => {
        const pathsArr = extractAllRoutes('');
        expect(pathsArr.length).toBe();
        expect(pathsArr.includes('')).toBe(true);
    });
});