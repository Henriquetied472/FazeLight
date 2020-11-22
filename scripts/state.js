const fs = require('fs')
const playerJSON = './saves/player.json'
let playerResetData = {

    name: "",
    life: 100,
    lvl: 0,
    exp: 0

}

module.exports.save = (print, playerDATA) => {

    const contentString = JSON.stringify(playerDATA)
    fs.writeFileSync(playerJSON, contentString)
    print('O jogo foi salvo')
    return contentString

},

module.exports.load = () => {

    const fileBuffer = fs.readFileSync(playerJSON, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    return contentJson

}

module.exports.eraseSave = (print) => {

    const contentString = JSON.stringify(playerResetData)
    fs.writeFileSync(playerJSON, contentString)
    print('O save foi resetado')
    return contentString

}
