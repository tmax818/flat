const fs = require("fs")
const data = require("../data/testData")

const notes = fs.createWriteStream("./NOTES.md")
const html = fs.createWriteStream("./index.html")


data.forEach(modules => {
    notes.write(`# ${modules.title} \n`)
    modules.sections.forEach(section => {
        notes.write(`## Section ${section.id + 1}: ${section.title} \n`)
        section.lessons.forEach(lesson => {
            notes.write(`### [${lesson.title}](forks/${lesson.link}/README.md) `)
            notes.write(`[NOTES](forks/${lesson.link}/NOTES.md) \n`)
        })
    })
})

data.forEach(modules => {
    html.write(`<h1> ${modules.title} </h1>`)
    modules.sections.forEach(section => {
        html.write(`<h2> Section ${section.id + 1}: ${section.title} </h2>`)
        section.lessons.forEach(lesson => {
            html.write(`<li><a href="forks/${lesson.link}/README.md">${lesson.title} </a>`)
            html.write(`<a href="forks/${lesson.link}/NOTES.md">(Notes)</a></li>`)
        })
    })
})


// data.forEach(el => {

//     notes.write(`|[${el.title}](forks/${el.link})`)
//     el.lab ? notes.write("(LAB)|") : notes.write(`|`)

//     notes.write(`[notes](forks/${el.link}/NOTES.md)|\n`)




// })