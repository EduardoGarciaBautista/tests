import '@testing-library/jest-dom';

import {getSaludo} from "../../base/02-template-string";

describe('pruebas de 02-template-string', () => {
    test('getSaludo returns Hola Eduardo', () => {
        const name = 'Eduardo';
        const greet = getSaludo(name);
        expect(greet).toBe('Hola ' + name);
    });

    test('getSaludo returns Hola Carlos if name is not send', () => {
        const greet = getSaludo();
        expect(greet).toBe('Hola Carlos');
    })
});
