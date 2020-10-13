// Custom JavaScript

// Queues

// function Queue() {
//   // properties and methods go here...
//   let items = [];

//   this.enqueue = function (el) {
//     items.push(el);
//   };

//   this.dequeue = function () {
//     return items.shift();
//   };

//   this.size = function () {
//     return items.length;
//   };

//   this.front = function () {
//     return items[0];
//   };

//   this.isEmpty = function () {
//     return items.length == 0;
//   };

//   this.print = function () {
//     console.log(items.toString());
//   };
// }

// WeakMap and a closure to keep properties private
// plus ES6 syntax for our viewing pleasure

let Queue2 = (function () {
  const items = new WeakMap();

  class Queue2 {
    constructor() {
      // 'this' below is reference to the class Queue2
      // items is the WeakMap here, key value pair: this (queue), value (array)
      items.set(this, []);
    }

    enqueue(el) {
      let q = items.get(this);
      q.push(el);
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      return r;
    }
  }
})();

let queue = new Queue();
console.log(queue.isEmpty());
