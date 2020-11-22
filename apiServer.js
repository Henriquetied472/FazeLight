const express = require('express')
const app = express()
const state = require('./scripts/state')
let load; 

module.exports = () => {

    app.get('/', (req, res) => {

        load = state.load()
        return res.json(load)

    })

    app.listen(8080, () => {

        console.log("Porta: 8080; Servidor: http://localhost:8080")

    })

}