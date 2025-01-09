import Character from './Character.js';
class Monk extends Character {
    constructor(name) {
        super(name, 8, 2, 200)
    }

    special() {
        if (this.mana >= 25) {
        this.hp += 8;
        this.mana -= 25;
        console.log(`${this.name} utilise Heal et reçoit 8 hp`);

        }else {
         console.log(`${this.name} n'a pas assez de mana!`);   
        }
    }
}

export default Monk;