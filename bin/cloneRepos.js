const shell = require('shelljs');
const data = require("../data/data")
const repo = "https://github.com/tmax818"

data.forEach(datum => {
    shell.exec(`git clone --single-branch --branch tyler ${repo}/${datum.link}.git forks/${datum.link}`)
})




