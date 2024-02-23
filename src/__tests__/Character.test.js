import Character from "../js/Character.js";

test("checking Bowerman", () => {
    const character = new Character("Hero", "Bowerman");
    const correctCharacter = {
      name: "Hero",
      type: "Bowerman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect({
        name: character.name,
        type: character.type,
        health: character.health,
        level: character.level
    }).toEqual(correctCharacter);
});

test("Checking name", () => {
  expect(() => new Character("B", "Bowerman")).toThrow("Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов");
  expect(() => new Character("BowermanVeryLength", "Bowerman")).toThrow("Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов");
});

test("Checking Hero", () => {
  expect(() => new Character("NaN", "Hero")).toThrow("Персонаж не существует");
});