const fs = require('fs')
const book = {
    title: 'Egg is the Enemy',
    author : 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
