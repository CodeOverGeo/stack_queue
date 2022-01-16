/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    /** Set first and last when starting the stack */

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      /** Store first and add on as next node */

      let tempNode = this.first;
      this.first = newNode;
      this.first.next = tempNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error('No items in stack');
    }

    let node = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return node.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
