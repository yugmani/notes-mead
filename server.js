const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

//validating and log colorful output
// ***************************************

// let myEmail = "ymg@yahoo.com";

// let isValid = validator.isEmail(myEmail);
// let isEmpty = validator.isEmpty(myEmail);
// let url = validator.isURL(
//   "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions"
// );

// console.log(chalk.blue(isValid), chalk.white.bold(myEmail));
// console.log(chalk.yellow.strikethrough(isEmpty), chalk.cyan.underline(myEmail));
// console.log(chalk.red.italic(url), chalk.bgYellow(myEmail));

//Disclaimer: the latest one does not support
//$ npm i chalk@2.4.1

// process.argv
// **************************

console.log(process.argv);
//   'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\yugma\\js-node\\notes-mead\\server.js',
// 'yoog'
// console.log(process.argv[0]); //C:\Program Files\nodejs\node.exe
// console.log(process.argv[1]); //C:\Users\yugma\js-node\notes-mead\server.js
// console.log(process.argv[2]); //yoog

//conditional arguments and options
// ****************************

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// } else {
//   console.log("Choose either 'add' or 'remove'");
// }

//using yargs
// **************************

// console.log(yargs.argv);
// { _: [], '$0': 'server.js' }

// node server.js add --title="Things to buy";
//{ _: [ 'add' ], title: 'Things to buy', '$0': 'server.js' }

//noder server.js --help
// Options:
// --help     Show help                                              [boolean]  --version  Show version number

//noder server.js --version
// 1.0.0

//customise yargs version
yargs.version("1.1.0");
//noder server.js --version
//1.1.0

//add, remove, read, list with yargs
// ************************************

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    //added later
    title: {
      describe: "Note title",
      demandOption: true, //false by default
      type: "string", //boolean by default
    },
    //challenge part
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Adding a new note", argv);
    console.log("Title: ", argv.title); //being specific to title
    //challenge part
    console.log("Body: ", argv.body);
  },
});

//node server.js add
//Adding a new note
// { _: [ 'add' ], '$0': 'server.js' }

//after adding builder
//node server.js add --title="Shopping list"
// Adding a new note { _: [ 'add' ], title: 'Shopping list', '$0': 'server.js' }
// { _: [ 'add' ], title: 'Shopping list', '$0': 'server.js' }

//Output After refactoring handler
// Title:  Shopping list

//After adding challenge part
// Title:  Buy
// Body:  list of things to buy

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

//node server.js remove
// Removing the note
// { _: [ 'remove' ], '$0': 'server.js' }

//node server.js --help
// Commands:
// server.js add     Add a new note
// server.js remove  Remove a note

// create list command
yargs.command({
  command: "list",
  describe: "Listing a note",
  handler: function () {
    console.log("Listing all my notes");
  },
});

//node server.js list
// Listing all my notes
// { _: [ 'list' ], '$0': 'server.js' }

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading my note!");
  },
});

//node server.js read
// Reading my note!
// { _: [ 'read' ], '$0': 'server.js' }

// console.log(yargs.argv); //logs two times
//so, instead of logging yargs.argv, we add :
yargs.parse();
