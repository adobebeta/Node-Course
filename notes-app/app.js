const validator = require('validator')
const getNotes = require('./notes')



 const msg = getNotes()

 console.log(msg)

 console.log(validator.isEmail('ss'))
 
 console.log(validator.isEmail('ss@gmail.com'))