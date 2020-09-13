import {getUser, getUsuarioActivo} from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('Should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('Shoudl return an active user object', () => {
        const name = 'Eduardo';
       const activeUserTest = {
           uid: 'ABC567',
           username: name
       };

       const activeUser = getUsuarioActivo(name);

       expect(activeUser).toEqual(activeUserTest);

    });
});
