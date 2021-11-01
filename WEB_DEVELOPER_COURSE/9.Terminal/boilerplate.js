// CREATE A FOLDER WITH HTML CSS AND JAVASCRIPT FILE IN IT

const fs = require('fs');

// GET FOLDER NAME
const folderName = process.argv[2] || 'Project';

try {
    // create folder
    fs.mkdirSync(folderName);

    // create files
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}