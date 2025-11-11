const fs = require('fs');

fs.writeFile('text.txt', 'Hello Async!', err => {
    if(err) throw err;

    fs.readFile('text.txt', 'utf-8', (err, data) => {
        if(err) throw err;
        console.log('파일 내용', data);
    });
});