var Currency = (function () {
    function Currency() {
        this.counter = document.getElementById('counter');
        this.dust = 100;
        this.dustIncrement = 0;
        this.dustMultiplication = 1;
        this.books = 0;
        this.bookCounter = document.getElementById("books");
        this.mapButton = document.getElementById("mapButton");
        this.inventoryButton = document.getElementById("inventoryButton");
        this.settingsButton = document.getElementById("settingsButton");
        this.featuresBought = 0;
        document.getElementById("bookbuy").addEventListener("click", this.buyBook.bind(this));
        document.getElementById("featureBuy").addEventListener("click", this.featureBuy.bind(this));
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
    Currency.prototype.featureBuy = function () {
        if (this.dust >= 30) {
            this.dust -= 30;
            if (this.featuresBought = 0) {
                this.mapButton.innerHTML = "MAP";
            }
            else if (this.featuresBought = 1) {
                this.inventoryButton.innerHTML = "INVENTORY";
            }
            else if (this.featuresBought = 2) {
                this.settingsButton.innerHTML = "SETTINGS";
            }
            else {
                var buttonsDiv = document.getElementById("buttons");
                var newP = document.createElement("p");
                newP.innerHTML = "You already bought all features";
                buttonsDiv.appendChild(newP);
            }
            this.featuresBought += 1;
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