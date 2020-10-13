// Custom JavaScript

// function Stack() {
//   // properties and methods go here...
//   let items = [];

//   this.push = function (element) {
//     items.push(element);
//   };

//   this.pop = function () {
//     items.pop();
//   };

//   this.peek = function () {
//     return items[items.length - 1];
//   };

//   this.isEmpty = function () {
//     return items.length == 0;
//   };

//   this.size = function () {
//     return items.length;
//   };

//   this.clear = function () {
//     items = [];
//   };

//   this.print = function () {
//     console.log(items.toString());
//   };
// }

// let stack = new Stack();
// console.log(stack.isEmpty());

//ES6 syntax

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

// let stack = new Stack();

// Using a Stack to solve a real world problem

function divideBy2(decNumber) {
  let remStack = new Stack();
  var rem;
  var binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(divideBy2(1000));
