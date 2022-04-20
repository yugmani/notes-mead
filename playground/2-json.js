const fs = require("fs");

//read json file in buffer binary form
const bufferData = fs.readFileSync("2-json.json");
console.log(bufferData);
//<Buffer 7b 20 22 6e 61 6d 65 22 3a 20 22 41 6e 64 72 65 77 22 2c 20 22 70 6c 61 6e 65 74 22 3a 20 22 45 61 72 74 68 22 2c 20 22 61 67 65 22 3a 20 32 37 20 7d ... 2 more bytes>

//convert buffer data into string
const stringData = bufferData.toString();
console.log(stringData); //{ "name": "Andrew", "planet": "Earth", "age": 27 }

//parsing string data
const parsedData = JSON.parse(stringData);
console.log(parsedData); //{ name: 'Andrew', planet: 'Earth', age: 27 }

//update some properties in parsedData
parsedData.name = "Yoog";
parsedData.age = 50;
console.log(parsedData); //{ name: 'Yoog', planet: 'Earth', age: 50 }

// Overwrite the 2-json.json with the updated data
fs.writeFileSync("2-json.json", JSON.stringify(parsedData));
//2-json.json ->updated
//{"name":"Yoog","planet":"Earth","age":50}
