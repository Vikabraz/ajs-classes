import Deamon from "../Deamon";

test("make Deamon", () => {
  const pers = new Deamon("Dname", "Deamon");
  expect(pers).toEqual({
    name: "Dname",
    type: "Deamon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
