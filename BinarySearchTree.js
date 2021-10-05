class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  breadthFirstSearch() {
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length != 0) {
      let dequeue = queue.shift();
      visited.push(dequeue.value);
      if (dequeue.left) {
        queue.push(dequeue.left);
      }
      if (dequeue.right) {
        queue.push(dequeue.right);
      }
    }
    return visited;
  }
}

var tree = new BinarySearchTree();

//            20
//        12       25
//      6       21    30
//   3    7

tree.insert(20);
tree.insert(25);
tree.insert(12);
tree.insert(6);
tree.insert(7);
tree.insert(3);
tree.insert(30);
tree.insert(21);
