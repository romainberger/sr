#!/usr/bin/env node

const path = require('path')

const files = [
    'update-mac.json',
    'update-win.json',
]

let valid = true

files.forEach(file => {
    try {
        require(path.join(__dirname, '../', file))
    }
    catch(e) {
        console.error(`Invalid json file ${file}`);
        valid = false
    }
})

if (!valid) {
    process.exit(1)
}
else {
    console.log('All good');
}
