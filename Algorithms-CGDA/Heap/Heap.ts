class Heap {
    data: number[]

    rootNode() {
        return this.data[0]
    }

    lastNode() {
        const lastNodeIdx = this.data.length - 1   
        return this.data[lastNodeIdx]
    }

    leftChildIndex(index: number) {
        return (index * 2) + 1
    }

    rightChildIndex(index: number) {
        return (index * 2 ) + 2
    }

    parentIndex(index: number){
        return (index - 1) / 2
    }
}