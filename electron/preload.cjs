const { contextBridge } = require('electron');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

contextBridge.exposeInMainWorld('electron', {
    readFile: (filePath) => fs.readFileSync(path.resolve(filePath), 'utf-8'),
    parsedFile: (fileContent) => matter(fileContent, { delimiters: ['+++'] })
});