const { getHeroeByIdAsync } = require("../../base/09-promesas");
const { default: heroes } = require("../../data/heroes");

describe('Promises test', () => {
   test('Return Ascync Hero', (done) => {
       const id = 1;
       getHeroeByIdAsync(id)
       .then(hero => {
        expect(hero).toBe(heroes[0]);
        done();
       })
   });

   test('should get error if hero does not exists', (done) => {
      const id = 10;
      getHeroeByIdAsync(id)
      .catch(error => {
       expect(error).toBe('No se pudo encontrar el héroe');
       done();
      })
   });
   
    
});