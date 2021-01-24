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
            html.write(`<li><a href="forks/${lesson.link}/README.md" target="blank">${lesson.title} </a>`)
            html.write(`<a href="forks/${lesson.link}/NOTES.md" target="blank">(Notes)</a> `)
            html.write(`<a href="https://github.com/tmax818/${lesson.link}" target="blank">(link)</a></li>`)
        })
    })
})



html.write(`
<script src="app.js"></script>
</body>
</html>`)