'use strict';

class Node {
  constructor(value) {
    this.head = value.head;
    this.next = value.next;
  }
}


class LinkedList {

  constructor() {
    this.head = null;
    this.next = null;
  }


  mergeLists(value1, value2) {

    let A = new Node(value1);
    let B = new Node(value2);
    let C = value1.head;

    if(A && B) {
      C.head = A.head;
      C.next = B.head;
    }
    while(A.next || B.next) {
      if(A.next) {
        C.next = A.next;
        A.head = A.next;
      }
      if(B.next) {
        C.next = B.next;
        B.head = B.next;
      }
    }
    return C;
  }
}


