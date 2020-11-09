const playerJSON = require('../player.json')

module.exports = (print) => {

    print(`Status\nNome: ${playerJSON.name}\nVida: ${playerJSON.life}\nLevel: ${playerJSON.lvl}\nEXP: ${playerJSON.exp}`)

}