const fs = require("fs")
const data = require("./data")

const labs = fs.createWriteStream("./labs/labs.md")
const lectures = fs.createWriteStream("./lectures/lectures.md")
const readme = fs.createWriteStream("./README.md")
const notes = fs.createWriteStream("./NOTES.md")



// data.map(el => { 
//     el.lab ? labs.write(` - [${el.title}](labs/${el.link})\n`) : lectures.write(` - [${el.title}](lectures/${el.link})\n`)
// })

notes.write("| lab | notes |\n")
notes.write("|---|---|\n")

data.map(el => {
    if (el.lab) {
        readme.write(`- [${el.title}](labs/${el.link})`)
        readme.write(` - LAB\n`)
        labs.write(` - [${el.title}](${el.link}/README.md)`)
        notes.write(`|[${el.title}](forks/${el.link}/README.md)|[notes](forks/${el.link}/NOTES.md)|\n`)
        labs.write(` - [link](https://github.com/learn-co-students/${el.link})\n`)

    } else {
        readme.write(`- [${el.title}](lectures/${el.link}/README.md)\n`)
        lectures.write(` - [${el.title}](${el.link}/README.md)\n`)
        notes.write(`|[${el.title}](forks/${el.link}/README.md)|[notes](forks/${el.link}/NOTES.md)|\n`)
    }

})