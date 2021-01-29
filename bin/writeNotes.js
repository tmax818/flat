const fs = require("fs")
const test = fs.createWriteStream("./test.js", { flags: 'a' })


const writeNote = (key, value) => {
    test.write(`{key: ${String(key)}, value: ${String(value)}}`)
}

module.exports = writeNote