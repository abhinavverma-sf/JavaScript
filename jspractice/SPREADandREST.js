function sumall(...args){
    let sum=0;
    for (const arg of args) {
       
        sum+=arg;
    }
    return sum;
}

console.log(sumall(1,2,3,4,5));


function sumtwo(a,b){
    return a+b;
}
myar=[1,2,3];
console.log(sumtwo(...myar));
