module.exports = {
    read: read,
    write: write
}

const fs = require('fs')

function read() {
    return JSON.parse(fs.readFileSync('./backend/db/database.json'))
}

function write(data) {
    fs.writeFileSync("./backend/db/database.json", JSON.stringify(data, null, 2))
}