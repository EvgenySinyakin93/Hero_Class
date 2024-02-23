import Swordsman from "../js/Swordsman.js";

test("checking Swordsman", () => {
    const swordsman = new Swordsman("Daniel", "Swordsman");
    const currentSwordsman = {
      name: "Daniel",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(swordsman).toEqual(currentSwordsman);
})