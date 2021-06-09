let a=[4,3,2,1];


console.log(a);


// both a and b is now sorted

// to solve this

let b=[... a];

console.log(b);
b.sort();
console.log(b);
console.log(a);

// using immutable method slice
let c=a.slice(0,2);
console.log(c);

// using immutable method filter
let d=a.filter(x =>  x>3);
console.log(d);

let e=[ ...a.slice(0,1), 5, ...a.slice(3)];
console.log(e);