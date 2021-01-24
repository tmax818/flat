const fs = require("fs")
const data = require("../data/testData")

const notes = fs.createWriteStream("./NOTES.md")


data.forEach(modules => {
    notes.write(`# ${modules.title} \n`)
    modules.sections.forEach(section => {
        notes.write(`## Section: ${section.id + 1} ${section.title} \n`)
    })
})








// data.forEach(el => {

//     notes.write(`|[${el.title}](forks/${el.link})`)
//     el.lab ? notes.write("(LAB)|") : notes.write(`|`)

//     notes.write(`[notes](forks/${el.link}/NOTES.md)|\n`)




// })