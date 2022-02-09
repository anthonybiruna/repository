const product = {
    productName: "LOTR",
    price: 10000,
    quantity: 0,
}

const newProduct = {
    ...product,
    author: "seto"
}

const numbers = [1, 2, 3, 4]

const newNumbers = [...numbers]

console.log(newNumbers)