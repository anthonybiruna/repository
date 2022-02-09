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
