let mymap=new Map();
mymap.set(0,"P1");
mymap.set(1,"P2");
mymap.set(2,"P3");
mymap.set(3,"P4");
console.log(mymap);

for (let key of mymap.keys()) {
    console.log(`Keys are ${key}`);
}

for (let value of mymap.values()) {
    console.log(`Values are ${value}`);
}
for(let [key,value] of mymap.entries()){
    console.log(`Keys are ${key} and values are ${value}`);
}

mymap.forEach( (value)=> console.log(`Value is ${value}`) );

mymap.delete(3);
console.log(mymap);

let wm=new WeakMap();
wm.set("name","abhinav");
// console.log(wm);
// can't use primitive as keys in weakmap 
// also weakmap is not iterable
