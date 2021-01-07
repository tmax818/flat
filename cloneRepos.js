const shell = require('shelljs');
const data = require("./data")


data.forEach(datum => {
    if (datum.lab) {
        shell.exec(`git clone https://github.com/learn-co-students/${datum.link}.git labs/${datum.link}`)
        shell.exec(`git clone https://github.com/tmax818/${datum.link}.git forks/${datum.link}`)
    } else {
        shell.exec(`git clone https://github.com/learn-co-curriculum/${datum.link}.git lectures/${datum.link}`)
        shell.exec(`git clone https://github.com/tmax818/${datum.link}.git forks/${datum.link}`)
    }
})








//shell.exec(`git clone https://github.com/learn-co-curriculum/ruby-cli-applications-readme.git lectures/ruby-cli-applications-readme`);
