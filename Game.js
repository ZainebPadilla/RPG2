import Fighter from './Fighter.js';
import Paladin from './Paladin.js';
import Assassin from './Assassin.js';
import Berzerker from './Berzerker.js';
import Character from './Character.js';
import Monk from './Monk.js';


class Game {
    constructor () {
        this.turnLeft = 10;
        this.players = [
            new Fighter('Grace'),
            new Paladin('Ulder'),
            new Monk('Moana'),
            new Berzerker('Draven'),
            new Assassin('Carl'),

            ];
        
    }

    startTurn() {
        console.log(`Début du tour n° ${11 - this.turnLeft}.`); // Affiche le numéro du tour

        let alivePlayers = this.players.filter(p => p.status === 'playing'); // Filtrer les joueurs encore en vie

        //joueurs aléatoires:
        const shuffledPlayers = alivePlayers.sort(() => Math.random() - 0.5);

        shuffledPlayers.forEach(player => {
            if (player.status !== 'playing') return; //ignorer les joueurs loser

            console.log(`C'est à ${player.name} de jouer.`);

            alivePlayers = this.players.filter(p => p.status === 'playing'); // Recalcule les joueurs encore en vie


            const targets = alivePlayers.filter(target => target !== player);
            if (targets.length === 0) {
                console.log(`${player.name} n'a personne à attaquer.`);
                return;
            }

            // selectionner une cible aléatoire :
            const target = targets[Math.floor(Math.random() * targets.length)];

            player.dealDamage(target); // le player attaque la cible target
            console.log(`${player.name} attaque ${target.name} a qui il reste ${target.hp} point(s)`);
            

            // Si la cible tombe à 0 HP ou moins, elle est éliminée
            if (target.hp <= 0) {
                target.status = 'loser';
                console.log(`${target.name} est éliminé !`);
                player.mana += 20; // Le joueur gagne 20 points de mana en éliminant une cible
            }
        });




        // Réduire le nombre de tours restants
        this.turnLeft -= 1;
    }

    startGame() {
        while (this.turnLeft > 0) { //Le jeu continue tant qu'il reste des tours
            const alivePlayers = this.players.filter(player => player.status === 'playing'); // Calculer les joueurs en vie

            if (alivePlayers.length <= 1) break; // S'il reste un ou aucun joueur, on termine la partie
               

            this.startTurn(); // Lance un tour de jeu
          } 
          this.endGame(); // Fin du jeu une fois les tours écoulés

    }

    endGame() {

        const alivePlayers = this.players.filter(player => player.status === 'playing');

        if (alivePlayers.length === 1) {
            console.log(`${alivePlayers[0].name} a gagné!`);
        }

    }

   
}

export default Game;