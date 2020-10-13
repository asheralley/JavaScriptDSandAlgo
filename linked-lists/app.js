// Custom JS -> Asher Alley

function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element) {
    let node = new Node(element);
    let current;

    // if first node on list
    if (head === null) {
      head = node;
    } else {
      current = head;
      // loop the list until last item is found
      while (current.next) {
        current = current.next;
      }
      // get last item and assign next to node to make the link
      current.next = node;
    }

    length++; // update size of list
  };

  this.insert = function (positon, element) {};

  this.removeAt = function (postion) {
    //check for out-of-bounds values
    if (postion > -1 && postion < length) {
      let current = head;
      let previous;
      let index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //link previous with current's next: skip it to remove
        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.remove = function (element) {};
  this.indexOf = function (element) {};
  this.isEmpty = function () {};
  this.size = function () {};
  this.toString = function () {};
  this.print = function () {};
}

