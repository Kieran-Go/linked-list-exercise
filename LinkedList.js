class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // Add a new value to the end of the list
    append(value) {
        // Create a new node
        const newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    // Add a new value to the start of the list
    prepend(value) {
        const newNode = new Node(value);

        // If the list is empty
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        const oldHead = this.head;
        newNode.next = oldHead;

        this.head = newNode;
    }

    // Return the total number of nodes in the list
    size() {
        let size = 0;
        let current = this.head;
        while (current !== null) {
            size++;
            current = current.next;
        }
        return size;
    }

    // Return the first node in the list
    getHead() {
        if(this.head === null) return "Empty list";
        return this.head;
    }

    // Return the last node in the list
    getTail() {
        if(this.head === null) return "Empty list";
        return this.tail;
    }

    // Return the node at the specified index
    get(index) {
        let current = this.head;
        let i = 0;

        while(i < index){
            current = current.next;
            i++
        }

        return current.value;
    }

    // Remove the last node in the list and return its value
    pop() {
        if(this.head === null) return "Nothing to delete";

        // If list contains only one node
        if (this.head === this.tail) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }

        // Traverse to the second-to-last node
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }

        // Remove the last node and update the second-to-last node
        const value = this.tail.value;
        currentNode.next = null;
        this.tail = currentNode;
        return value;
    }

    // Return true if the value is in the list
    contains(value) {
        if(this.head === null) return false;

        let current = this.head;
        while(current !== null){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // Return the index with the specified value
    find(value) {
        if(this.head === null) return `"${value}" not found`;

        let i = 0;
        let current = this.head;
        while(i < this.size()){
            if(current.value === value){
                return `"${value}" found on index ${i}`
            }
            current = current.next;
            i++;
        }

        return `"${value}" not found`;
    }

    // To String method
    toString() {
        if(this.head === null){
            return "Empty list";
        }

        let listString = "";
        let current = this.head;
        while(current.next !== null){
            listString += `( ${current.value} ) -> `;
            current = current.next;
        }
        
        listString += `( ${current.value} )`;
        return listString;
    }

    insertAt(index, data) {
        if (index === 0) {
          const node = new Node(data);
          node.next = this.head;
          this.head = node;
        } else {
          let current = this.head;
          let previous = null;
          let i = 0;
    
          while (i < index) {
            previous = current;
            current = current.next;
            i++;
          }
    
          const node = new Node(data);
          node.next = current;
          previous.next = node;
        }
    }

    removeFrom(index) {
        if (index === 0) {
          this.head = this.head.next;
        } else {
          let current = this.head;
          let previous = null;
          let i = 0;
    
          while (i < index) {
            previous = current;
            current = current.next;
            i++;
          }
    
          previous.next = current.next;
        }
    }
}