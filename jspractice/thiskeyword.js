'use strict'

console.log(this); // refers to global object

function sum(){
    console.log(this);
}
sum();

const myself={
    name: 'abhinav',
    myfunction: function(){
        console.log(this);
    }
}
myself.myfunction();