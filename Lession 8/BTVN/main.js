// Bài tập 1
a = prompt("Phí thuê bao hằng tháng: ");
a = Number(a);
console.log("");
console.log("Bài tập 1: ");
function TotalPayment(Time){
    if (Time<=50){
        c = a + 600*Time
    }else if(150 <= Time <= 200){
        c = a + 600*50 + (Time - 50)*400
    }else {
        c = a + 600*50 + 400*150 + (Time - 200)*200
    }
    console.log("Tổng chi phí cước gọi tháng này của bạn là: " + c + " VND");
}

// function TotalPayment(Time){
//     switch (Time){
//     case Time <= 50:    
//         c = a + 600*Time;
//         console.log("Tổng chi phí cước gọi tháng này của bạn là: " + c + " VND");
//         break;
//     case 150 <= Time <= 200:
//         c = a + 600*50 + (Time - 50)*400;
//         console.log("Tổng chi phí cước gọi tháng này của bạn là: " + c + " VND");
//         break;
//     case 200 <= Time:
//         c = a + 600*50 + 400*150 + (Time - 200)*200;
//         console.log("Tổng chi phí cước gọi tháng này của bạn là: " + c + " VND");
//         break;
//     }
// }
TotalPayment(Number(prompt("Tổng số phút trong tháng bạn đã gọi: ")));

// Bài tập 2
console.log("");
console.log("Bài tập 2: ");
// n = prompt("Nhập số n: ");
// n = Number(n);
function Sum(Number){
    let d = 0
    for (i = 1; i <= Number; i++){
        if (i % 2 === 0){
            d = d + i;
        }
    }
    console.log("Tổng các số chắn từ 1 đến n: " + d);
}

Sum(Number(prompt("Nhập số n: ")));