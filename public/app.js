import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
var docOne;
var docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 500);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
//THE DOM AND TYPECASTING
var anchor = document.querySelector('a');
/*if(anchor){
    console.log(anchor.href);
}*/
console.log(anchor.href);
//the best part of using dom in typescript is that it automatically contain special type for every dom element.
//const form = document.querySelector('form')!;
//if there is more than one form
var form = document.querySelector('.new-item-form');
//typecasting : what type of element it is going to be
console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var detail = document.querySelector('#detail');
//list template interface
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail.value);
});
var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('i spent ', amount);
        return amount;
    },
};
console.log(me);
