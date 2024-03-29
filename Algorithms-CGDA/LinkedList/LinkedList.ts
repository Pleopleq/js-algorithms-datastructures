import { Node } from "./Node"

class LinkedList {
    firstNode: Node | null | undefined

    constructor(firstNode) {
        this.firstNode = firstNode
    }

    read(index: number) {
        let currentNode = this.firstNode
        let currentIndex = 0

        while(currentIndex < index) {
            currentNode = currentNode?.next
            currentIndex += 1
        } 

        if(!currentNode) { return null }
        return currentNode
    }

    insertAt(index: number, value: string) {
        let currentNode = this.firstNode
        let currentIndex = 0
        const newNode = new Node(value)

        if(index === 0) {
            newNode.next = this.firstNode
            this.firstNode = newNode
            return this.firstNode
        }

        while(currentIndex < (index - 1)) {
            currentNode = currentNode?.next
            currentIndex += 1
        }
        
        if(!currentNode) { 
            console.error("Index is out of range")
            return null
        }

        newNode.next = currentNode.next
        currentNode.next = newNode
        return currentNode
    }

    indexOf(value: string) {
        let currentNode = this.firstNode
        let currentIndex = 0

        do {
            if (currentNode?.value === value) {
                return currentIndex
            }
            
            currentNode = currentNode?.next
            currentIndex += 1
        } while (currentNode);

        if(!currentNode) { return null }

        return currentIndex
    }

    getAll() {
        let currentNode = this.firstNode
        const nodes: Node[] = [] 

        while(currentNode){
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        
        return nodes
    }

    getLast() {
        let currentNode = this.firstNode

        while(currentNode?.next !== null) {
            currentNode = currentNode?.next
        }

        return currentNode
    }

    removeAtIndex(index: number) {
        if(index === 0){
            this.firstNode = this.firstNode?.next
        }

        let currentNode = this.firstNode
        let currentIndex = 0

        while(currentIndex < (index - 1)) {
            currentNode = currentNode?.next
            currentIndex += 1
        }

        let nodeAfter = currentNode?.next?.next 

        currentNode!.next = nodeAfter
    }

    pop() {
        let currentNode = this.firstNode
        let removedNode: Node

        if(!currentNode) { return null }

        if(!currentNode?.next) {
            this.firstNode = null
            return currentNode
        }

        while(currentNode?.next?.next !== null ) {
            currentNode = currentNode?.next
        }

        removedNode = currentNode.next
        currentNode.next = null

        return removedNode
    }

    reverse() {
        let previousNode: Node | null = null
        let currentNode = this.firstNode

        while(currentNode) {
            let nextNode = currentNode.next
            currentNode.next = previousNode

            previousNode = currentNode
            currentNode = nextNode
        }

        this.firstNode = previousNode
        return this.firstNode
    }
}

const node01 = new Node("node one")
const node02 = new Node("node two")
const node03 = new Node("node three")
const node04 = new Node("node four")
const node05 = new Node("node five")

node01.next = node02;
node02.next = node03;
node03.next = node04;
node04.next = node05;

const linked = new LinkedList(node01)

export default LinkedList