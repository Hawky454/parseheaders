'use strict';

/* eslint-env node */

function parseHeaders(text) {
    // your code here
    let obj = {};
    obj.headers = {};
    let parsedLines = text.split('\n');

    for (let i = 0; i < parsedLines.length; i++) {
        console.log(`LINE ${i} IS: ${parsedLines[i]}`);
        
        if (i === 0) {
            let data = parsedLines[i].split(' ');
            obj.version = data[0];
            obj.code = data[1];
        } else {
            let newLine = parsedLines[i].split(': ');
            if (newLine.length === 2) {
               obj.headers[newLine[0]] = newLine[1];             
           }
        }
        obj.body = parsedLines.join();
    }

    return obj;
}

module.exports = parseHeaders;