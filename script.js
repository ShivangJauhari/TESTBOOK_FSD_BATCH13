// function to insert a node at the beginning of a linked list at end of the linked list


function insertAtBeginning(head, data) {
     let newNode = new Node(data);
     newNode.next = head;
     head = newNode;
     return head;
     }

function insertAtEnd(head, data) {
     let newNode = new Node(data);
     if (head == null) {
         head = newNode;
         return head;
     }
     let current = head;
     while (current.next != null) {
         current = current.next;
     }
     current.next = newNode;
     return head;
     }

