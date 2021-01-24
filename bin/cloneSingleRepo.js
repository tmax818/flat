const shell = require('shelljs');
const repo = "https://github.com/tmax818"


export const cloneSingle = link => {
    shell.exec(`git clone ${repo} `)
}

