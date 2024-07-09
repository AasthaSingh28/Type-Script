import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let docOne : HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 500);

let docs: HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

//THE DOM AND TYPECASTING

const anchor = document.querySelector('a')!;

/*if(anchor){
    console.log(anchor.href); 
}*/
console.log(anchor.href);

//the best part of using dom in typescript is that it automatically contain special type for every dom element.


//const form = document.querySelector('form')!;
//if there is more than one form
const form =document.querySelector('.new-item-form') as HTMLFormElement;
//typecasting : what type of element it is going to be
console.log(form.children);


//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#detail') as HTMLSelectElement;

//list template interface
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        detail.value
    )
})

//Interfaces
//we use interface just to impose certain type of structure in classes and object

interface IsPerson {
    name : string;
    age: number;
    speak(a: string): void;
    spend(a:number): number;

    //we dont have constructor

}

const me : IsPerson ={
    name: 'shaun',
    age: 30,
    speak(text : string): void{
        console.log(text);
    },
    spend(amount : number): number{
        console.log ('i spent ', amount);
        return amount;
    },
};

console.log(me);










