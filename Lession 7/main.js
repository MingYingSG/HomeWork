//Baitap1
console.log("Bài tập 1: ");
let x = 10;
y = ++x + --x;
console.log("y= " + y);
z = --x + ++x;
console.log("z= " + z);
console.log(x++ + --x + --y + y++);

//Baitap2
console.log("Bài tập 2: ");
let a = 6;
if (Number.isInteger(a)) {
  if (a % 2 == 0) {
    console.log(a + " là số chẵn");
  } else {
    console.log(a + " là số lẻ");
  }
} else {
  console.log(a + " không là số nguyên");
}

//Baitap3
console.log("Bài tập 3: ");
let b = 8;
if (Number.isInteger(b)) {
  if (Number.isInteger(Math.sqrt(b))) {
    console.log(b + " là số chính phương");
  } else {
    console.log(b + " không là số chính phương");
  }
}

//Baitap4
console.log("Bài tập 4");
let c = "Có bao nhiêu kí tự";
console.log(c.length + " kí tự");
