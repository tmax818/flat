const fs = require("fs")
const data = require("../data/testData")

const notes = fs.createWriteStream("./NOTES.md")
const html = fs.createWriteStream("./index.html")


data.forEach(modules => {
    notes.write(`# ${modules.title} \n`)
    modules.sections.forEach(section => {
        notes.write(`## Section ${section.id + 1}: ${section.title} \n`)
        section.lessons.forEach(lesson => {
            notes.write(`### [${lesson.title}](forks/${lesson.link}) \n `)
        })
    })
})

