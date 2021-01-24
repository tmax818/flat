const fs = require("fs")
const ruby = fs.createWriteStream("./test.rb")

ruby.write("puts 'Hello'")