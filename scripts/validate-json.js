#!/usr/bin/env node

const path = require('path')

const files = [
    'update-mac.json',
    'update-win.json',
]

files.forEach(file => {
    try {
        require(path.join(__dirname, '../', file))
    }
    catch(e) {
        process.exit(1)
    }
})
