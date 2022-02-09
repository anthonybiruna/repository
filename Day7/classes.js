// class Car {
//     constructor(year, brand, color) {
//     this.year = year;
//     this.brand = brand;
//     this.color = color
//     }
// }

// const mobilBaru = new Car ("2000", "toyota", "white")
// const mobilLama = new Car ("1998", "ford", "white")
// console.log(mobilBaru);
// console.log(mobilLama);

class Book {
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
        this.productQty = 5;
        this.bougth = 0;
    }
    calculateTotalPrice = () => {
        return this.price * this.productQty
    }
    
    toString = () => {
       return `${this.productName} || ${this.price.tolocaleString()} x ${this.calculateTotalPrice().tolocaleString()}`
    }
}

const buku = new Book("LOTR", 10000)
const buku1 = new Book("Naruto", 15000)
console.log(buku)
console.log(buku1)

