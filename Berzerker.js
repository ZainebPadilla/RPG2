import Character from './Character.js';
class Berzerker extends Character {
    constructor(name) {
        super(name, 8, 4, 0);
    }

    special() {
       
        this.dmg += 1; // Augmente les dégâts de 1
        this.hp -= 1;  // Perd 1 point de vie
       
        console.log(`${this.name} utilise Rage, il gagne +1 dmg mais perd un point de vie!`);
    }
    
}

export default Berzerker;