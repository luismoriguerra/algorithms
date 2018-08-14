
function midPoint(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
   
   while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next
   }
  return slow;
}

function circularList (list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  
   while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
     
     if (slow === fast) return true;
   }
  
  return false;
  
}


function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  
   while(n > 0) {
      fast = fast.next;
     n--;
   }
  
  while(fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
   
  return slow;
  
  
}
