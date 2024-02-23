import Zombie from "../js/Zombie.js";

test("checking Zombie", () => {
    const zombie = new Zombie("Pchela", "Zombie");
    const currentZombie = {
      name: "Pchela",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(zombie).toEqual(currentZombie);
})