const character = 'mari';
console.log (character);
const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});


//cant change the type of datatypes once assigned


const circle = (diameter : number) =>{
    return diameter * Math.PI;
}
console.log(circle(3.4));

//arrays
let names = ['aashi', 'isha'];
names.push ('soniya');
names[0]= 'aastha';
console.log(names);
//note that we can also have mixed arrays of different datatypes

//objects
let btech ={
    branch : 'IT',
    number : 51,

};

btech.branch = 'CSE';
btech.number = 72;

//note that we cant even change the basic structure of object also cant add one more object.


//expilcit types
let characters : string;

let ninjas : string[]= [];


//union type

let mixed :(string|number) []= [];

let uid : string | number;

//object
let ninja: object;
ninja = {name : 'aastha', age : 20}

let ninjaone :{
    names: string,
    age: number,

}



//ANY TYPE : it can be of any type either boolean number or string.

let age : any = 25;
age= true;
console.log(age);
age ='hello';
console.log(age);
age = {naam : 'aashi', age: 21};
console.log(age);


let mixedarray : any[]=[];
mixedarray.push(24);
mixedarray.push(true);
mixedarray.push("nisha");
console.log(mixedarray);

console.log ('test');

//functions

let greet : Function;
greet =()=>{
    console.log("hello!")
}

const add= (a:number, b:number, c?:number | string)=>{
    console.log(a +b);
}
add(5, 10); //gives 15
//add('str', 'ing'); //error


//type alliases
type stringOrNUm = string | number;
const logdetail =(uid:stringOrNUm, item: string)=>{
    console.log(`${item} has a uid of ${uid}` )
}


//Function Signature

let gree :(a: string , b:string)=> void;
gree = (name:string, greeting:string)=>{
    console.log(`${name}says ${greeting}`);
}

//example of func sign

let calc:(a:number, b:number, c:string)=> number;

calc= (num1:number, num2:number, action:string)=>{
    if (action === 'add'){
        return num1 +num2;
    }
    else{
        return num1 - num2;
    }
}

let logdetails :(obj:{name: string , age:number})=>void;
logdetails=(ninja: {name:string, age:number})=>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}



