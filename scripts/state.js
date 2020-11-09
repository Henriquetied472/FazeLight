const fs = require('fs')
const playerJSON = '.Saves/save.json'
let playerResetData = {

    name: "",
    life: 100,
    lvl: 0,
    exp: 0

}

module.exports.save = (print, playerDATA) => {

    const contentString = JSON.stringify(playerDATA)
    fs.writeFileSync(playerJSON, contentString)
    print('\x1b[0mO jogo foi salvo')
    return contentString

},

module.exports.load = (print) => {

    const fileBuffer = fs.readFileSync(playerJSON, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    return contentJson

}

module.exports.eraseSave = (print) => {

    const contentString = JSON.stringify(playerResetData)
    fs.writeFileSync(playerJSON, contentString)
    print('\x1b[0mO save foi resetado')
    return contentString

}