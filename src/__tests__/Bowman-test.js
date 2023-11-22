import Bowman from "../Bowman";

test("make Bowman", () => {
  const pers = new Bowman("Bname");
  expect(pers).toEqual({
    name: "Bname",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
