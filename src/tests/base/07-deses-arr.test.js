import {retornaArreglo} from "../../base/07-deses-arr";

describe('Pruebas de 07-deses-arr', () => {
    test('Should return string and number', () => {
        const [words, numbers] = retornaArreglo();

        expect(words).toBe('ABC');
        expect(typeof words).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number')

    });
})
