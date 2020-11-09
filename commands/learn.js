module.exports = (print) => {

    let magics = ["conquista","liberdade","raio de luz","onda reluzente","escudo"]
    let learnedMagics = []
    let i = 0

    let rand = Math.floor(Math.random() * 5)
            
    if (magics[rand] != "learned") {

        learnedMagics[i] = magics[rand]
        print(`\x1b[0mParabéns, você aprendeu ${magics[rand]}`)
        magics[rand] = "learned"
                
    }else {

            print('\x1b[0mQue pena, você não aprendeu nenhum feitiço')

    }

    

}