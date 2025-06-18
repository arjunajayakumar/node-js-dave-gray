const fs = require('fs');

// if directory doesn't exists
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err)=> {
    if(err)throw err
    console.log('Directory created')
})
}

if(fs.existsSync('./new')){
    fs.rmdir('./new', (err)=> {
    if(err)throw err
    console.log('Directory created')
})
}


