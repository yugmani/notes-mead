//declare a variable and assign a value
const name = "Yoog";

//a function to return sum of two variables
function add(a, b) {
  return a + b;
}

//to export only name
// module.exports = name;

//to export only a function add
// module.exports = add;

//to export more than one variables
module.exports = {
  add,
  name,
};
