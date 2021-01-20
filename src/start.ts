class Currency {
    private counter = document.getElementById('counter');
    private dust = 0;
    private dustIncrement = 0;
    private dustMultiplication = 1;
    private books = 0;
    private bookCounter = document.getElementById("books");
    
    constructor() {
        document.getElementById("bookbuy").addEventListener("click", this.buyBook.bind(this))
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
  }

window.addEventListener("load", init);
function init(): void {
    const currency = new Currency();
    setInterval(() => {currency.count();}, 1000);
}