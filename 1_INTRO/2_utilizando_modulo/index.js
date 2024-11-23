const fs = require('fs'); // file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => { // Syntex Sugar
    if (err) {
        console.error('Error:', err);
        return;
    }

    console.log(data);
});