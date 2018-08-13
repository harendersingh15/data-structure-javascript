class SingleLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addNode(newNode) {
        const node = new SingleLinkedListNode(newNode);
        if (this.head == null) {
            this.head = node;
        } else {
            // ## logic to add node to head ##//
            // node.next = this.head;
            // this.head = node;

            this.tail.next = node;

        }
        this.count++;
        this.tail = node;
    }

    traverse() {
        let list = this.head;
        while (list) {
            console.log(list.data);
            list = list.next;
        }
    }

    itemCount() {
        return this.count;
    }

    insertAtPosition(data, position) {


        if (this.head == null && position == 0) {
            let ltNode = new SingleLinkedListNode(data);
            this.head = ltNode;
            this.count++;
        } else {
            let current = this.head;
            let index = 0;
            while (current && index < position) {
                current = current.next;
                index++;
            }

            if (current) {

                // Insert node here, make the child current.
                let ltNode = new SingleLinkedListNode(current.data);

                ltNode.next = current.next;
                current.next = ltNode;
                current.data = data;


                this.count++;
            } else {
                this.tail.next = ltNode;
                this.tail = ltNode;
                this.count++;
            }
        }
    }

    inertAtEnd(head, data) {
        let node = new SingleLinkedListNode(data);

        if (head == null) {
            head = node;
        } else {
            let d = head;
            while (d.next != null) {
                d = d.next;
            }

            d.next = node;
        }

        return head;
    }

    deleteAtPosition(position) {

        if (this.head == null) {
            throw new Error('Linked List is Empty!!!');
        }

        if (position > this.count - 1) {
            throw new Error('Out of range!!!');
        }

        let index = 0;
        let current = this.head;
        let previous;

        if (position == 0) {
            previous = current;
            this.head = current.next;
        } else if (this.count == 1) {
            this.head = null;
            this.tail = null;
        } else {
            while (index < position && current.next != null) {
                previous = current;
                current = current.next;
                index++;
            }

            previous.next = current.next;

            if (current.next == null) {
                this.tail = previous;
            }
        }
        this.count--;

        return this.head;
    }

    revert() {
        let currNode = this.head;
        let prevNode = null;

        while (currNode != null) {
            let temp = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = temp;
        }

        this.head = prevNode;
        return prevNode;
    }

    compareTwoLinkedList(listA, listB) {
        while (listA != null && listB != null) {

            if (listA.data != listB.data) {
                return 0;
            }

            listA = listA.next;
            listB = listB.next;
        }

        //if both the list are identical then both should be at null position here
        if (listA == null && listB == null) {
            return 1;
        }

        return 0;
    }

    mergeSortedList(listA, listB) {

        //step compare both the list head, to make head on the new sorted list!!!

        if (listA == null)

            return listA;
    }

}