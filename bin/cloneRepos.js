const shell = require('shelljs');
const data = require("../data/data")
const repo = "https://github.com/tmax818"
const readrepo = "https://github.com/learn-co-curriculum"
const labrepo = "https://github.com/learn-co-students"


data.forEach(datum => {
    //shell.exec(`git clone --single-branch --branch tyler ${repo}/${datum.link}.git forks/${datum.link}`)
    shell.exec(`git clone ${repo}/${datum.link}.git forks/${datum.link}`)
    if (datum.lab) {
        shell.exec(`git clone ${labrepo}/${datum.link}.git origins/${datum.link} `)
    } else {
        shell.exec(`git clone ${readrepo}/${datum.link}.git origins/${datum.link} `)

    }
})




