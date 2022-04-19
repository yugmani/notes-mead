const validator = require("validator");
const chalk = require("chalk");

let myEmail = "ymg@yahoo.com";

let isValid = validator.isEmail(myEmail);
let isEmpty = validator.isEmpty(myEmail);
let url = validator.isURL(
  "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions"
);

console.log(chalk.blue(isValid), chalk.white.bold(myEmail));
console.log(chalk.yellow.strikethrough(isEmpty), chalk.cyan.underline(myEmail));
console.log(chalk.red.italic(url), chalk.bgYellow(myEmail));

//Disclaimer: the latest one does not support
//$ npm i chalk@2.4.1
