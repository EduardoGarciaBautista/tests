import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas de 08-imp-exp', () => {
    test('Should return a hero', () => {
        const id = 3;
        const hero = getHeroeById(id);

        const heroeData = heroes.find((hero) => hero.id === id);
        expect(hero).toEqual(heroeData);

    });

    test('Should undefined if id param is not included in array', () => {
        const id = 17;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);

    });
    test('Sould return array of DC Hero ', () => {
       const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesData = heroes.filter((hero) => hero.owner === owner);
        expect(heroes).toEqual(heroesData);
    });

    test('Sould return array with length 2 of Marvel ', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const length = 2;
        expect(heroes.length).toBe(length);
    });
});
