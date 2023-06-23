class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size;
    }
    insertFirst(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    insertLast(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let temp=this.head;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=node;
        }

        this.size++;
    }
    insertAnyPosition(value,index){
        const node=new Node(value)
        if(index<0 || index>this.size){
            return;
        }
        if(index===0){
            return this.insertFirst(value);
        }
        else{
            let temp = this.head;
            while (index > 1) {
                temp=temp.next;
                index--;
            }
            node.next=temp.next;
            temp.next=node;

        }
        this.size++;
        
    }
    removeIndex(index){
        if(index<0 || index>this.size){
            return;
        }
        let removed;
        if(index==0){
            removed=this.head;
            this.head=this.head.next;
        }
        else{
            let temp=this.head;
            while(index>1){
                temp=temp.next;
                index--;
            }
            removed=temp.next;
            temp.next=temp.next.next;
        }
        this.size--;
        return removed;
    }
    removeValue(value){
        if(this.isEmpty()){
            return;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return value;

        }
        else{
            let temp=this.head;
            while(temp.next && temp.next.value!=value){
                temp=temp.next;
            }
            if(temp.next){
                let removedNode=temp.next;
                temp.next=removedNode.next;
                this.size--;
                return value;
            }
            return null;

        }

    }
    display(){
        let temp=this.head;
        let listValues="";
        while(temp!=null){
           temp.next != null
             ? (listValues += `${temp.value}->`)
             : (listValues += `${temp.value}`);
            temp=temp.next;
        }
        console.log(listValues)
    }
}

const list=new LinkedList();
console.log(`List isEmpty->`,list.isEmpty());
console.log(`List Size:`, list.getSize());
list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);
list.display();
list.insertLast(40);
list.display();
list.insertAnyPosition(50,2)
list.display();
list.removeIndex(4);
list.display();



