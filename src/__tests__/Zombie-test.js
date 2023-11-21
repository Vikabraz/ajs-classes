import Zombie from '../Zombie';

test('make Zombie', () => {
  const pers = new Zombie('Zname', 'Zombie');
  expect(pers).toEqual({
    name: 'Zname',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
