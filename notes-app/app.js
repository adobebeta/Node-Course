const fs = require('fs')

fs.writeFileSync('notes.txt' , 'My name is zoom!')

fs.appendFile('notes.txt', 'data to append', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });