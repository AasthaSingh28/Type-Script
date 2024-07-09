//classes in ts
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.dtail = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owns ").concat(this.amount, " for ").concat(this.dtail);
    };
    return Invoice;
}());
export { Invoice };
//object
var invone = new Invoice('mario', 'work on the mario website', 500);
var invtwo = new Invoice('mari', 'work on the mari website', 400);
console.log(invone, invtwo);
//Array in class
var invoice = [];
//invoice.push('hello') //not allowed we can only push the elements or obj made by class
invoice.push(invone); //allowed
invoice.push(invtwo); //allowed
//by default everything is public
//access specifier: private, puclic and readonly
invoice.forEach(function (inv) {
    console.log(inv.client, inv.dtail, inv.format());
});
