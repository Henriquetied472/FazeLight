const readline = require('readline-sync')
const config = require('./config.json')
const player = require('./player.json')
const commandsReader = require('./scripts/commandsReader')
const print = console.log
let loaded
const state = require('./scripts/state')
let playerData = {

    name: "",
    life: 100,
    lvl: 0,
    exp: 0

}

print(`Olá, bem vindo ao ${config.game.name}.\naqui você ira de sobreviver a uma revolução magica causada pelas trevas\n\x1b[31mATENÇÃO: ESTE JOGO ESTA EM ALPHA, ENTÃO INFORME BUGS PELO COMANDO "repobug {seu bug}"\x1b[0m`)

playerData.name = readline.question('Agora, me diga seu nome: ')
print(`Ah sim, ${playerData.name}, você é um pricipe de um reino magico e tem que aprender feiticos para derrotar as trevas.`)

player.name = playerData.name
player.life = playerData.life
player.lvl = playerData.lvl
player.exp = playerData.exp

while (true) {

    let command = readline.question('\x1b[37m> ')
    if (command == 'save') {
        
        state.save(print, playerData)

    }else if (command == 'load') {

        loaded = state.load(print)
        player.name = loaded.name
        player.life = loaded.life
        player.lvl = loaded.lvl
        player.exp = loaded.exp
        if (player.name == "") {

            print('Ops, você não salvou o jogo')

        }else {

            print('Opa, oi ', player.name)

        }

    }else if (command == 'eraseSave') {
    
        state.eraseSave(print)

    }else {

        commandsReader(command, print,)

    }

}