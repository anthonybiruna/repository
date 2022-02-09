const benar = true;
const salah = false;

const password = "password"
// jika password lebih dari 8 karrakter -> "strong password"
// jika password sam dengan 8 karrakter -> "medium password"
// jika password kurang dari 8 karrakter -> "weak password"

if (password.length >8) {
    console.log("strong password")
} else if (6 < password.length < 8) {
    console.log("medium password")
} else{ 
    console.log("weak password")}
