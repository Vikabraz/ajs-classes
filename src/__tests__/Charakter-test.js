import Charakter from "../Charakter";

test("name long", () => {
  expect(() => new Charakter("veryLongName", "Undead")).toThrow(
    "фигня какая-то"
  );
});

test("name short", () => {
  expect(() => new Charakter("v", "Undead")).toThrow("фигня какая-то");
});

test("name norm", () => {
  expect(new Charakter("normName", "Undead").name).toBe("normName");
});

test.each(["Bowman", "Swordsman", "Magician", "Deamon", "Undead", "Zombie"])(
  "test pers with type %s ",
  (type) => {
    expect(new Charakter("normName", type).type).toBe(type);
  }
);

test("other type", () => {
  expect(() => new Charakter("xxx", "mag")).toThrow("фигня какая-то");
});

test("levelUp alive pers", () => {
  const pers = new Charakter("normName", "Undead");
  pers.health = 100;
  pers.level = 1;
  pers.attack = 25;
  pers.defence = 25;
  pers.levelUp();
  expect(pers.health).toBe(100);
  expect(pers.level).toBe(2);
  expect(pers.attack).toBe(30);
  expect(pers.defence).toBe(30);
});

test("levelUp dead pers", () => {
  const pers = new Charakter("normName", "Undead");
  pers.health = 0;
  expect(() => pers.levelUp()).toThrow("уже умер");
});

test("damage alive pers", () => {
  const pers = new Charakter("normName", "Undead");
  pers.health = 50;
  pers.defence = 20;
  pers.damage(10);
  expect(pers.health).toBe(42);
});

test("damage dead pers", () => {
  const pers = new Charakter("normName", "Undead");
  pers.health = 0;
  expect(() => pers.damage(10)).toThrow("уже умер");
});
