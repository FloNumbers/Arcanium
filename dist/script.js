var Currency = (function () {
    function Currency() {
        this.counter = document.getElementById('counter');
        this.dust = 0;
        this.dustIncrement = 0;
        this.dustMultiplication = 1;
        this.books = 0;
        this.bookCounter = document.getElementById("books");
        document.getElementById("bookbuy").addEventListener("click", this.buyBook.bind(this));
    }
    Currency.prototype.count = function () {
        this.dust += 1 + this.dustIncrement * this.dustMultiplication;
        this.counter.innerHTML = "You have " + this.dust + " dust";
    };
    Currency.prototype.buyBook = function () {
        if (this.dust >= 10) {
            this.dust -= 10;
            this.books++;
            this.counter.innerHTML = "You have " + this.dust + " dust";
            this.bookCounter.innerHTML = "You have " + this.books + " books";
        }
    };
    return Currency;
}());
window.addEventListener("load", init);
function init() {
    var currency = new Currency();
    setInterval(function () { currency.count(); }, 1000);
}
//# sourceMappingURL=script.js.map