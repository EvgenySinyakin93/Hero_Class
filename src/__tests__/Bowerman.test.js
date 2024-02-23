import Bowerman from "../js/Bowerman.js";

test("checking Bowerman", () => {
    const bowerman = new Bowerman("Nicky", "Bowerman");
    const currentBowerman = {
      name: "Nicky",
      type: "Bowerman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(bowerman).toEqual(currentBowerman);
})