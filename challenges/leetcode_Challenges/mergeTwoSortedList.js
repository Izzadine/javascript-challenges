/**
 * @param {ListNode} list1 -> first linked list
 * @param {ListNode} list2 -> second linded list
 * @return {ListNode} list1 -> return head of the merge linkded list
 *
 * 
 * 
 */

function ListNode(val, next){
    this.val=(val===undefined ? 0: val)
    this.next=(next===undefined? null:next)
}


function listToArray(head){
    let arr= []

    while(head){
        arr.push(head.val)
        head = head.next
    }

    return arr
}


function arraytoList(arr){
    let dummy = new ListNode(-1)
    let current = dummy

    for(let val of arr){
        current.next=new ListNode(val)
        current =current.next
    }

    return dummy.next

}
var mergeTwoList = function(list1, list2){
    let  temp =  new ListNode(-1)
    let current =temp

    while(list1 !==null && list1!==null){
        if(list1.val<= list2.val){
            current.next=list1
            list1=list1.next
        }else{
            current.next= list2
            list2=list2.next
        }

        current=current.next
    }

    current.next=list1 !==null? list1: list2

    return temp.next    
}

const list1= arraytoList([1,2,4])
const list2 = arraytoList([1,3,4])

let mergedList = mergeTwoList(list1, list2)
console.log(listToArray(mergedList))

// console.log(mergeTwoList(list1, list2))