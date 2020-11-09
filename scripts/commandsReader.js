const learn = require('../commands/learn')
const status = require('../commands/status')

module.exports = (command, print) => {

    if (command == 'learn'){

        learn(print)

    }else if (command == 'repobug') {

        repobug(print)

    }else if (command == 'exit') {

        console.log('\x1b[0m')
        process.exit(0)

    }else if (command == 'status') {

        status(print)

    }

}