import Character from './Character.js';
class Assassin extends Character {
    constructor(name) {
        super(name, 6, 6, 20);
    }

    special(target) {
        if (this.mana >= 20 ) {
           target.takeDamage(7)
           this.mana -= 20;

           console.log(`${this.name} utilise Shadow Hit sur ${target.name}, infligeant 7 damages.`);
        } else {
          console.log(`${this.name} n'a pas suffisament de mana pour utiliser Shadow Hit.`);
        }

    }
    
}
export default Assassin;