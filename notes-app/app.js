const chalk = require('chalk');
const getNotes = require('./notes')


const command = process.argv[2]

if (command === 'add'){
    console.log('Adding note!')
} else if (command === 'remove'){
    console.log('Removing Note!')
}
