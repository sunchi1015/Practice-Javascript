// Reverse Linked list for k

// input:1->2->3->4->5-6 == k=3
// output: 3->2->1->6->5->4

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  reverseLLRec(node, k) {
    let kk = 3;
    let count = 0;
    let curr = null;
    if (!node.next) {
      this.head = node;
      return;
    }
    while (count < k && curr !== null) {
      this.reverseLLRec(node.next, kk);
      curr = node.next;
      curr.next = node;
      node.next = null;
      count++;
    }
  }

  insertAtLast(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  printList() {
    let curr = this.head;
    let list = [];
    while (curr) {
      list.push(curr.val);
      curr = curr.next;
    }
    console.log(list);
  }
}

const ll = new LinkedList();
ll.insertAtLast(1);
ll.insertAtLast(2);
ll.insertAtLast(3);
ll.insertAtLast(4);
ll.insertAtLast(5);
console.log("Before reverse:");
ll.printList();
ll.reverseLLRec(ll.head, 3);
console.log("After reverse:");
ll.printList();
