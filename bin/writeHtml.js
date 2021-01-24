const fs = require("fs")
const data = require("../data/testData")
const html = fs.createWriteStream("./index.html")


html.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Flat Notes</title>
</head>
            <body>
            <h1>Flat Notes</h1>
            `)


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



html.write(`</body>
</html>`)