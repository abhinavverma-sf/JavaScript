class Person{
    
    constructor(name,age){
        this.username=name;
        this.userage=age;
        this.userjob="";
    }
    getName(){
        return this.username;
    }
    getAge(){
        return this.userage;
    }
    setJob(job){
        this.userjob=job;
    }
}

let p1=new Person("Abhinav",23);
let p2=new Person("Saloni",22);
let p3=new Person("Mantu",55);
console.log(p1.getName());

class House{
    constructor(address,price,residents){
        this.myaddress=address;
        this.myprice=price;
        this.myresidents=residents;
    }

    getAddress(){
        return this.myaddress;
    }
    getPrice(){
        return this.myprice;
    }
    getResidents(){
        return this.myresidents;
    }

    addResident(resident){
        this.myresidents.push(resident);
    }
}
let h1=new House("abcd",10000000,[p1,p2]);
h1.addResident(p3);
 console.log(h1.getResidents());

 class Programmer extends Person{
     constructor(name,age,company,salary,language){
        super(name,age); 
        this.usercompany=company;
         this.usersalary=salary;
         this.userlanguage=language;
     }
     sayHi(){
         console.log(`Hello, I am a programmer! My name is ${this.getName()} I work for ${this.usercompany}`);
     }

 }

 let pg1=new Programmer("Abhinav",23,"Youtube",10000000,"JavaScript");
 pg1.sayHi();

 class Doctor extends Person{
    constructor(name,age,specialization){
       super(name,age); 
       this.userspecialization=specialization;
    }

}