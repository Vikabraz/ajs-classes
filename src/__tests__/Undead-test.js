import Undead from '../Undead';

test('make Undead', () => {
  const pers = new Undead('Uname', 'Undead');
  expect(pers).toEqual({
    name: 'Uname',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
