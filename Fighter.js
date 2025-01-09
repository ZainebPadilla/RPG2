import Character from './Character.js';

class Fighter extends Character {
    constructor(name) {
        super(name, 12,4, 40);
    }

    special(target) {
        if (this.mana >= 20 ) {
            target.takeDamage(5)
            this.mana -= 20;
            console.log(`${this.name} utilise Dark Vision sur ${target.name}, infligeant 5 damages.`);
        } else {
          console.log(`${this.name} n'a pas suffisament de mana pour utiliser Dark Vision.`);
        }

    }
    
}

export default Fighter;