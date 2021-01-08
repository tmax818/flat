const fs = require("fs")
const data = require("./data")

const notes = fs.createWriteStream("./NOTES.md")


notes.write("| repo | fork |\n")
notes.write("|---|---|\n")

data.forEach(el => {

    notes.write(`|[${el.title}](repos/${el.link})|[notes](forks/${el.link}/NOTES.md)|\n`)



})