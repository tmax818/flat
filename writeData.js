const fs = require("fs")
const data = require("./data")

const notes = fs.createWriteStream("./NOTES.md")


notes.write("| lab | notes |\n")
notes.write("|---|---|\n")

data.forEach(el => {

    notes.write(`|[${el.title}](forks/${el.link}/README.md)|[notes](forks/${el.link}/NOTES.md)|\n`)



})