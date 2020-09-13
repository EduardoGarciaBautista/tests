const { getImagen } = require("../../base/11-async-await");
const { string } = require("prop-types");

describe('Pruebase async', () => {
    test('should return url ', async () => {

        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);

    })
});
