import Game from './Game.js';
import Fighter from './Fighter.js';
import Paladin from './Paladin.js';
import Monk from './Monk.js';
import Berzerker from './Berzerker.js';
import Assassin from './Assassin.js';

// Créer une instance de la classe Game
const game = new Game();

// Fonction pour ajouter un personnage
function addCharacter(name, type) {
    let newCharacter;

    switch (type) {
        case 'Fighter':
            newCharacter = new Fighter(name);
            break;
        case 'Paladin':
            newCharacter = new Paladin(name);
            break;
        case 'Monk':
            newCharacter = new Monk(name);
            break;
        case 'Berzerker':
            newCharacter = new Berzerker(name);
            break;
        case 'Assassin':
            newCharacter = new Assassin(name);
            break;
        default:
            console.log(`Type de personnage inconnu : ${type}`);
            return;
    }

    game.players.push(newCharacter);
    console.log(`${newCharacter.name} (${type}) a été ajouté au jeu.`);
}

// Fonction pour afficher les statistiques des personnages
function watchStats() {
    console.log("=== Statistiques des personnages ===");
    game.players.forEach(player => {
        console.log(`${player.name}  - HP: ${player.hp}, Mana: ${player.mana}, Status: ${player.status}`);
    });
    console.log("====================================");
}

// Ajouter des personnages de manière interactive
addCharacter('Grace', 'Fighter');
addCharacter('Ulder', 'Paladin');
addCharacter('Moana', 'Monk');
addCharacter('Draven', 'Berzerker');
addCharacter('Carl', 'Assassin');

// Afficher les statistiques initiales
watchStats();

// Lancer la partie
console.log("=== Le jeu commence ===");
game.startGame();

// Afficher les statistiques finales
console.log("=== Fin de la partie ===");
watchStats();
