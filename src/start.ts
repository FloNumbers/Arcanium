class Currency {
    private counter = document.getElementById('counter');
    private dust = 100;
    private dustIncrement = 0;
    private dustMultiplication = 1;
    private books = 0;
    private bookCounter = document.getElementById("books");
    private mapButton = document.getElementById("mapButton");
    private inventoryButton = document.getElementById("inventoryButton");
    private settingsButton = document.getElementById("settingsButton");
    private featuresBought = 0;
    
    constructor() {
        document.getElementById("bookbuy").addEventListener("click", this.buyBook.bind(this));
        document.getElementById("featureBuy").addEventListener("click", this.featureBuy.bind(this));
    }

    public count() {
        this.dust += 1 + this.dustIncrement * this.dustMultiplication;
        this.counter.innerHTML = "You have " + this.dust + " dust";
    }

    public buyBook() {
        if (this.dust >= 10) {
            this.dust -= 10;
            this.books ++;
            this.counter.innerHTML = "You have " + this.dust + " dust";
            this.bookCounter.innerHTML = "You have " + this.books + " books";
        }
    }

    public featureBuy() {
        if (this.dust >= 30) {
            this.dust -= 30;
            if (this.featuresBought = 0) {
                this.mapButton.innerHTML = "MAP";
            } else if (this.featuresBought = 1) {
                this.inventoryButton.innerHTML = "INVENTORY";
            } else if (this.featuresBought = 2) {
                this.settingsButton.innerHTML = "SETTINGS";
            } else {
                let buttonsDiv = document.getElementById("buttons");
                let newP = document.createElement("p");
                newP.innerHTML = "You already bought all features";
                buttonsDiv.appendChild(newP);
            }
            this.featuresBought += 1;
        }
    }
  }

window.addEventListener("load", init);
function init(): void {
    const currency = new Currency();
    setInterval(() => {currency.count();}, 1000);
}