class Product {
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
        this.productQty = 0;
        
    }
    calculateTotalPrice = () => {
        return this.price * this.productQty
    }
}

class Book extends Product {
    constructor(productName, price, author, pages) {
        super(productName, price)
        this.author = author
        this.pages = pages
    }
}

console.log(new Book("Harry Potter", 10000, "JK Rowling", 762));