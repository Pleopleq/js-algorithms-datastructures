class Stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        this.stack.push(value)
    }

    pop() {
        return this.stack.pop()
    }

    read() {
        const lastItem = this.stack.length - 1;
        return this.stack[lastItem]
    }
}

function reverseString(str) {
    const stack = new Stack()
    let newString = "";

    for (let elem of str) {
        stack.push(elem);
    }

    while (stack.read()) {
        newString += stack.pop()
    }

    return newString;
}


console.log(reverseString("anita lava la tina owo"))
