import Magician from "../js/Magician.js";

test("checking Magician", () => {
    const magician = new Magician("Roy", "Magician");
    const currentMagician = {
      name: "Roy",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(magician).toEqual(currentMagician);
})