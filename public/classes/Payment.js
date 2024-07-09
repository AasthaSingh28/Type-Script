var Payment = /** @class */ (function () {
    function Payment(recipient, dtail, amount) {
        this.recipient = recipient;
        this.dtail = dtail;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed ").concat(this.amount, " for ").concat(this.dtail);
    };
    return Payment;
}());
export { Payment };
