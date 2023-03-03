// Bài tập 1
console.log("                   Bài tập 1: ");
console.log("Các số từ 1 đến 100 được liệt kê như sau: ");
for (i = 1; i < 101; i++){
    console.log(i);
}


// Bài tập 2
console.log("");
console.log("                   Bài tập 2: ");
console.log("Các số từ 100 đến 1 được liệt kê như sau: ");
for (i = 100; i > 0; i--){
    console.log(i);
}

// Bài tập 3
console.log("");
console.log("                   Bài tập 3: ");
for (i = 5; i < 71; i++){
    if (i % 5 === 0){
        console.log(i);
    }
}

// Bài tập 4
let t = 0;
function CountDivisors(Number){
    for (i = 1;i <= Number; i++){
        if ( Number % i === 0){
        t = t + 1 ;
        }
    }
}
CountDivisors(parseInt(a = prompt("Nhập số nguyên dương muốn tìm nó có bao nhiêu ước số: ")));
console.log("");
console.log("                   Bài tập 4: ");
console.log(a + " có " + t + " ước số");

// Bài tập 5
console.log("");
console.log("                   Bài tập 5: ");
let b = 0;
function TotalDivisors(numBer){
    for (i = 1;i < numBer; i++){
        if ( numBer % i === 0){
        b = b + i;
        }
    }
}
TotalDivisors(c = prompt("Nhập số cần kiểm tra số hoàn hảo: "));
c = parseInt(c);
if (b === c){
    console.log(c + " là số hoàn hảo");
}else{
    console.log(c + " không là số hoàn hảo");
}

// Bài tập 6
console.log("");
console.log("                   Bài tập 6: ");
let triangle = ""
function rightAngledTriangle(nUmber){
    for (i = 1; i <= nUmber; i++){
        triangle = triangle + "*";
        console.log(triangle);
    }
}
rightAngledTriangle(Number(prompt("Nhập số n muốn vẽ tam giác vuông: ")));