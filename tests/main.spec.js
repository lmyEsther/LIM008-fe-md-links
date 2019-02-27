describe('mdLinks', () => {

    it('Debería ser una función', () => {
        return expect(typeof mdlinks).toBe('function')
    });
 
    it('Devuelve una promesa que resuelve a un array', (listo) => {
        mdLinks()
            .then((arr) => {
                expect(Array.isArray(arr)).toBe(true);
                listo();
            })
    })
 });