const fs = require("fs")
const data = require("../data/testData")
const html = fs.createWriteStream("./index.html")

const readrepo = "https://github.com/learn-co-curriculum"
const labrepo = "https://github.com/learn-co-students"


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
            html.write(`<li><a href="origins/${lesson.link}/README.md" target="blank">${lesson.title} </a>`)
            if (lesson.lab) {
                html.write(`<a href="${labrepo}/${lesson.link}" target="blank">(LAB)</a></li>`)
            } else {
                html.write(`<a href="${readrepo}/${lesson.link}" target="blank">(README)</a></li>`)
            }
        })
    })
})

html.write(`
<script src="app.js"></script>
</body>
</html>`)