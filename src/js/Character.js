
export default class Character {
    constructor (name, type) {
            if (name.length < 2 || name.length > 10) {
                throw new Error ("Длина имени персонажа не корректна.Выберите имя от 2 до 10 символов");
            }

            const types = ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
            if(!types.includes(type)) {
                throw new Error ("Персонаж не существует");
            }

        this.name = name,
        this.type = type,
        this.health = 100,
        this.level = 1
    }
}

