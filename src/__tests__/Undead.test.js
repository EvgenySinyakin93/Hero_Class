import Undead from "../js/Undead.js";

test("checking Undead", () => {
    const undead = new Undead("Sasha", "Undead");
    const currentUndead = {
      name: "Sasha",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(undead).toEqual(currentUndead);
})