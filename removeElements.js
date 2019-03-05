 // Definition for singly-linked list.
 // function ListNode(val) {
 //   this.val = val;
 //   this.next = null;
 // }

//given head of linked list, remove all nodes (elements) with value of val
var removeElements = function(head, val) {
    let curr = head;
    let prv = curr;

    if(head && head.next){//case of more than 1 node
        while(curr.next){
            if(curr.val === val){//case of nodes 2 & beyond
                prv.next = curr.next;//remove node
                curr = prv.next;
            } else{//if no removal
                prv = curr;
                curr = curr.next;
            }
        }

        if(head.val === val){//checks 1st node
            head = head.next;
        }

        if(curr.val === val){//checks last node
            prv.next = curr.next;//remove node
        }

    }

    if(head){//case of 1 node
        if(head.val === val){
            head = null;
        }
    }

    return head;

};
