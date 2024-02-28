import Character from "../js/Character.js";

test("Checking name", () => {
  expect(() => new Character("B", "Bowerman")).toThrow("Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов");
  expect(() => new Character("BowermanVeryLength", "Bowerman")).toThrow("Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов");
});

test("Checking Hero", () => {
  expect(() => new Character("NaN", "Hero")).toThrow("Персонаж не существует");
});