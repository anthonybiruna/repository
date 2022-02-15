const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const duplicateForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

duplicateForEach(numbers, (val, idx, array) => {
    console.log(val);
})

// 1. duplikat method array
// 2. filter akn menghasilkan sebuah array --> pasti akan return array
// 3. gimana cara menentukan item yang akan masuk ke array
    // callback function harus menghasilkan true
// 4. gimana cara masulkan item ke dalam array
// gunakan method push

const books = ["LOTR", "Harry Potter", "Naruto"]

const duplicateFilter = (array, callback) => {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}

let filteredData = books.filter((val) => {
    return val.length < 6
})

console.log(filteredData)