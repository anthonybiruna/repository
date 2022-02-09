// const buku = {
//     title: "Harry Potter",
//     author: [
//         name:"J. K. Rowling"
//         age: 50
//         nationality: "inggris"
//     ],
//     pages: 658,
//     yearReleased: "2001",
//     alternativeTitles: ["sang penyihir", "The Wizard"]
// }
// buku.judul = buku.title
// delete buku.title
// console.log(buku.pages);

const cars = [
    {
      brand: "toyota",
      year: "2010",
      colors: ["red", "black"],
    },
    {
      brand: "Honda",
      year: "2007",
      colors: ["grey", "black", "white"],
    },
  ];
  
  let row;
  
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    row = `${i + 1}. Brand: ${car.brand} || year: ${car.year} || colors: `;
  
    for (let j = 0; j < cars[i].colors.length; j++) {
      row += `${car.colors[j]} `;
    }
    console.log(row);
  }

