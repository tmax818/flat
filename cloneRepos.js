const shell = require('shelljs');
const data = require("./data")


data.forEach(datum => {
    if (datum.lab) {
        shell.exec(`git clone https://github.com/learn-co-students/${datum.link}.git labs/${datum.link}`)
    } else {
        shell.exec(`git clone https://github.com/learn-co-curriculum/${datum.link}.git lects/${datum.link}`)

    }
})








//shell.exec(`git clone https://github.com/learn-co-curriculum/ruby-cli-applications-readme.git lectures/ruby-cli-applications-readme`);
