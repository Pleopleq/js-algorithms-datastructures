class MaxBinaryHeap {
  constructor() {
    this.values = [41, 30, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) return;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
