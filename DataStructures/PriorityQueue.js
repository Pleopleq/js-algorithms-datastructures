class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const elementToBubble = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (elementToBubble.priority >= parent.priority) return;
      this.values[parentIndex] = elementToBubble;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const arrLength = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < arrLength) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < arrLength) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) return;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
    return this.values;
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }
}

let prio = new PriorityQueue();

prio.enqueue("dfgsdfg", 5);
prio.enqueue("sdfg", 4);
prio.enqueue("sdafsdf", 3);
prio.enqueue("sdfgsdf", 4);
prio.enqueue("sdfg", 1);
