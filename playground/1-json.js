const fs = require("fs");

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// {"title":"Ego is the Enemy","author":"Ryan Holiday"}

// console.log(bookJSON.title); //undefined
// console.log(book.title); //Ego is the Enemy

// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed);{ title: 'Ego is the Enemy', author: 'Ryan Holiday' }
// console.log(bookParsed.author); //Ryan Holiday

// fs.writeFileSync("1-json.json", bookJSON);
//creates a file : '1-json.json' in the same folder

const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
//logs binary representation of 1-json.json
//<Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 ... 2 more bytes>
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
//{"title":"Ego is the Enemy","author":"Ryan Holiday"}

//parsing data
const data = JSON.parse(dataJSON);
console.log(data.title); // Ego is the Enemy
