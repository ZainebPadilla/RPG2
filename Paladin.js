import Character from './Character.js';
class Paladin extends Character {
    constructor(name) {
        super(name, 16, 3, 160);
    }

    special(target) {
        if (this.mana >= 40 ) {
            target.takeDamage(4);
            this.hp += 5
            this.mana -= 40
            console.log(`${this.name} utilise Healing Lighting sur ${target.name}, lui inflige 4 damage et en gagne 5!`);
        }else {
            console.log(`${this.name} n'a pas assez de mana!`);
        }
    }
 }

 export default Paladin;