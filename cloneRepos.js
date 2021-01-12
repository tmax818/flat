const shell = require('shelljs');
const data = require("./data")


data.forEach(datum => {
    if (datum.lab) {
        //shell.exec(`git clone https://github.com/learn-co-students/${datum.link}.git repos/${datum.link}`)
        shell.exec(`git clone https://github.com/tmax818/${datum.link}.git forks/${datum.link}`)
    } else {
        //shell.exec(`git clone https://github.com/learn-co-curriculum/${datum.link}.git repos/${datum.link}`)
        shell.exec(`git clone https://github.com/tmax818/${datum.link}.git forks/${datum.link}`)
    }
})




