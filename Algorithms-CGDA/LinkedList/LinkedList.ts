import { Node } from "./Node"

class LinkedList {
    firstNode: Node | null | undefined

    constructor(firstNode) {
        this.firstNode = firstNode
    }

    read(index: number) {
        let currentNode = this.firstNode
        let currentIndex = 0

        for (let i = 0; i < index; i++) {
            currentNode = currentNode?.next
            currentIndex += i

            if(!currentNode) { return null }
            return currentNode
        }
    }

}

const node01 = new Node("node one")
const node02 = new Node("node two")
const node03 = new Node("node three")
const node04 = new Node("node four")

node01.next = node02;
node02.next = node03;
node03.next = node04;

const linked = new LinkedList(node03)

console.log(linked.read(2))

export default LinkedList