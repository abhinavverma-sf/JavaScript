let myset=new Set();
myset.add('banana');
myset.add('watermelon');
myset.add('muskmelon');

console.log(myset);
myset.delete('banana');
console.log(myset);

let check=myset.has('grapes');
console.log(check);
console.log(myset.size);
myset.clear();
console.log(myset);
console.log(myset.size);

let ws=new WeakSet();
let arr=[1,2,3,4,5];
ws.add(arr);
console.log(ws);