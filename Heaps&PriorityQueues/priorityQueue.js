class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = []; // Private variable
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heap[0];
  }

  _parent(idx) {
    // Private method
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return 2 * idx + 1;
  }

  _rightChild(idx) {
    return 2 * idx + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(ele) {
    this._heap.push(ele);
    this._siftUp();
    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;
    let parent = this._parent(nodeIdx);
    while (nodeIdx > 0 && this._compare(nodeIdx, parent)) {
      this._swap(nodeIdx, parent);
      nodeIdx = parent;
      parent = this._parent(nodeIdx);
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const popped = this._heap[0];
      this._siftDown();
      return popped;
    }
  }

  _siftDown() {
    this._heap[0] = this._heap[this.size() - 1];
    this._heap.pop();
    let nodeIdx = 0;
    let indexToCompare = this._getIndexToCompare(nodeIdx);

    while (indexToCompare && this._compare(nodeIdx, indexToCompare)) {
      this._swap(nodeIdx, indexToCompare);
      nodeIdx = indexToCompare;
      indexToCompare = this._getIndexToCompare(nodeIdx);
    }
  }

  _getIndexToCompare(nodeIdx) {
    let left = this._leftChild(nodeIdx);
    let right = this._rightChild(nodeIdx);
    const size = this.size();
    let indexToCompare;
    if (left < size && right < size) {
      indexToCompare = this._compare(left, right) ? left : right;
    } else if (left < size) {
      indexToCompare = left;
    } else {
      indexToCompare = null;
    }
    return indexToCompare;
  }
}
