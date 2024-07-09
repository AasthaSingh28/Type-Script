import { HasFormatter } from "../Interfaces/HasFormatter.js";

//classes in ts
export  class Invoice implements HasFormatter {
    readonly client: string;
     dtail: string;
     private amount: number;
 
     constructor(c: string, d: string, a: number){
         this.client =c;
         this.dtail =d;
         this.amount =a;
     }
 
     format(){
         return `${this.client} owns ${this.amount} for ${this.dtail}`;
     }
 }
 
 //object
 const invone = new Invoice('mario', 'work on the mario website', 500);
 const invtwo = new Invoice('mari', 'work on the mari website', 400);
 console.log(invone, invtwo);
 
 //Array in class
 let invoice: Invoice[]=[];
 //invoice.push('hello') //not allowed we can only push the elements or obj made by class
 invoice.push(invone);//allowed
 invoice.push(invtwo);//allowed
 //by default everything is public
 
 
 //access specifier: private, puclic and readonly
 
 invoice.forEach(inv =>{
     console.log(inv.client, inv.dtail, inv.format());
 })

