const fs = require("fs")
const data = require("../data/data")

const notes = fs.createWriteStream("./NOTES.md")


notes.write("| fork | notes |\n")
notes.write("|---|---|\n")

data.forEach(el => {

    notes.write(`|[${el.title}](forks/${el.link})`)
    el.lab ? notes.write("(LAB)|") : notes.write(`|`)

    notes.write(`[notes](forks/${el.link}/NOTES.md)|\n`)




})