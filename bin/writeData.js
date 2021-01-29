const fs = require("fs")
const data = require("../data/testData")
const notes = require("../data/notes")

const readme = fs.createWriteStream("./README.md")


data.forEach(modules => {
    readme.write(`# ${modules.title} \n`)
    modules.sections.forEach(section => {
        readme.write(`## Section ${section.id + 1}: ${section.title} \n`)
        section.lessons.forEach(lesson => {
            readme.write(`### [${lesson.title}](forks/${lesson.link})`)
            if (lesson.lab) { readme.write(`(LAB)\n`) } else { readme.write(`\n`) }
            notes.forEach(note => {
                if (lesson.id === note.lessonId) {
                    readme.write("|term|definition|\n")
                    readme.write("|---|---|\n")
                    note.terms.forEach(term => {
                        readme.write(`|${term.key}|${term.value}|\n`)
                    })
                }
            })
        })
    })
})

