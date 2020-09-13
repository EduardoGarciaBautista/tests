describe('Pruebas en el archivo demo .js', () => {
    test('equal strings', () => {
        // Initialization
        const message = 'Hello Word';
        // stimulation
        const message2 = `Hello Word`;
        // Observe Hello Word
        expect(message).toBe(message2);
    });
})

