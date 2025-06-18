const fs = require('fs');
const path = require('path');

// read file
// default method

fs.readFile('starter.txt', 'utf8', (err, data)=> {
    if(err) throw err
    console.log(data);
})

// using path module
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data)=> {
    if(err) throw err
    console.log(data)
})

// write file
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err)=> {
    if(err) throw err
    console.log('Write complete');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n yes it is', (err)=> {
        if (err) throw err;
        console.log('Append complete');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err)=> {
            if(err) throw err
            console.log('Rename completed');
    })
    })

})

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit();
})