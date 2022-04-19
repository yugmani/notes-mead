const fs = require("fs");
const { add, name } = require("./utils.js");
const getNotes = require("./notes.js");
//To create a new file
// fs.writeFileSync("message.txt", "This file was created by Yoog!");

//To append the content into an existing file
// fs.appendFileSync("message.txt", "\nIt is appended part of the notes.");

//calling imported function from utils.js
const sum = add(4, 3);
console.log(sum);

//calling imported function from notes.js and a variable from utils.js
const myNote = getNotes(name);
console.log(myNote);
