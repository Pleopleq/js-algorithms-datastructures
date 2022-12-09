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

    pop() {
        let currentNode = this.firstNode
        let lastNode: Node

        while(currentNode?.next?.next !== null) {
            currentNode = currentNode?.next
        }

        lastNode = currentNode.next
        currentNode.next = null

        return lastNode
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