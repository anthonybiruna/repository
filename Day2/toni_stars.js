let star = "";
let rows = 5;

for (let i = 0; i < rows; i++) {
  star += "";
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
