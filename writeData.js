const fs = require("fs")
const data = require("./data")

const labs = fs.createWriteStream("./labs/labs.md")
const lectures = fs.createWriteStream("./lectures/lectures.md")
const readme = fs.createWriteStream("./README.md")



// data.map(el => { 
//     el.lab ? labs.write(` - [${el.title}](labs/${el.link})\n`) : lectures.write(` - [${el.title}](lectures/${el.link})\n`)
// })

data.map(el => {
    if (el.lab) {
        readme.write(`- [${el.title}](labs/${el.link})\n`)
        labs.write(` - [${el.title}](${el.link}/README.md)`)
        labs.write(` - [link](https://github.com/learn-co-students/${el.link})\n`)
    } else {
        readme.write(`- [${el.title}](lectures/${el.link}/README.md)\n`)
        lectures.write(` - [${el.title}](${el.link}/README.md)\n`)
    }

})