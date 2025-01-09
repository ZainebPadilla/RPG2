
//Classe Character = classe parent. Contient les propriétés(nom, points...) et méthodes (damage) communes à tous les personnages.
class Character {
    constructor(name, hp, dmg, mana) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = 'playing';
    };

    //méthode pour gérer les points de vie du personnage
    takeDamage(damage) {
        this.hp -= damage;
        if (this.hp <= 0 ) {
            this.hp = 0 ;
            this.status = 'loser';
            console.log(`${this.name} a perdu`);

        } else {
            console.log( `${this.name} a ${this.hp} point(s) de vie restant(s)`);
        }

    }
    
    // enelever des point (appliquer ds damages) a une cible target
    dealDamage(target) {
        if (target.status !== 'loser') {
            target.takeDamage(this.dmg); // si la cible a encore des point, lui appliquer la méthode takeDamage avec les dmg du joueur
            console.log(`${this.name} retire ${this.dmg} point(s) de vie à ${target.name}`);

            //si le target n'a plus de point et est looser, le joueur gagne 20points de mana
            if (target.status === 'loser') {
                this.mana += 20
                console.log(`${this.name} a gagné 20 manas en attaquant sa cible ${target.name}`);
            }
        } else {
            console.log(`${target.name} n'est pas encore vaincu`);
        } 
    }
}

export default Character;