const chalk = require('chalk');
const getNotes = require('./notes')
const yargs = require('yargs')
const command = process.argv[2]


// customize yargs version
yargs.version('1.1.0')

//crate add command
yargs.command({
    command: 'add' ,
    describe : 'Add a new note',
    handler : function(){
        console.log('Adding a new note!')
    }
})

//add ,remove , read , list


console.log(yargs.argv)