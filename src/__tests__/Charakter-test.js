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
  const received = new Charakter("normName", "Undead");
  expect(() => received).toBe("normName", "Undead");
});

test.each(["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"])(
  "test pers with type %s ",
  (expected) => {
    expect(new Charakter("normName", expected).toBe(expected));
  }
);

test("levelUp alive pers", () => {
  const pers = new Charakter("normName", "Undead");
  pers.health = 100;
  pers.level = 1;
  pers.attack = 25;
  pers.defence = 25;
  pers.levelUp();
  expect(pers.health).ToBe(100);
  expect(pers.level).ToBe(2);
  expect(pers.attack).ToBe(30);
  expect(pers.defence).ToBe(30);
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
  expect(pers.health).ToBe(42);
});

test("damage dead pers", () => {
  const pers = new Charakter("normName", "Undead");
  pers.health = 0;
  expect(() => pers.damage(10)).toThrow("уже умер");
});
