console.log('btree:')
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

let root = new Node(10)
let c1   = new Node(5)
let c2   = new Node(19)
let c3   = new Node(1)
let c4   = new Node(6)
let c5   = new Node(17)
let c6   = new Node(21)

root.left = c1
root.right = c2
c1.left = c3
c1.right = c4
c2.left = c5
c2.right = c6

const inOrder = (root) => {
    if(root.left) inOrder(root.left)
    console.log(root.val)
    if(root.right) inOrder(root.right)
}

inOrder(root)
console.log('root ->', root)

