import Daemon from "../js/Daemon.js";

test("checking Daemon", () => {
    const daemon = new Daemon("Michael", "Daemon");
    const currentDaemon = {
      name: "Michael",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(daemon).toEqual(currentDaemon);
})