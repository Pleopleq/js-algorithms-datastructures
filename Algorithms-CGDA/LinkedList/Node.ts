class Node {
    value: string;
    next: Node | null | undefined;

    constructor(value, next = null) {
        this.value = value,
        this.next = next
    }
}

export {Node}