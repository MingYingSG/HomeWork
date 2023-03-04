import { products } from "./data.js";

// Bài tập 1
function thePrices(arr){
    let lengthArr = arr.length;
    let newArr = [];
    for (let i = 0; i <= lengthArr; i++){
        if (arr[i]?.price >= 50){
            // Cách 1 : console.log(arr[i]);
            // Cách 2 :
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("Danh sách những sản phẩm có giá lớn hơn 50$: ", thePrices(products));

console.log("");
// Bài tập 2
function rate4More(arr){
    let lengthArr = arr.length;
    let newArr = [];
    for (let i = 0; i <= lengthArr; i++){
        if (arr[i]?.rating?.rate >= 4){
            // Cách 1 : console.log(arr[i]);
            // Cách 2 :
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("Danh sách các sản phẩm có dánh giá từ 4* trở lên: ", rate4More(products));

console.log("");
// Bài tập 3
function womenCategories(arr){
    let lengthArr = arr.length;
    let newArr = [];
    for (let i = 0; i <= lengthArr; i++){
        if (arr[i]?.category == "women's clothing"){
            // Cách 1 : console.log(arr[i]);
            // Cách 2 :
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("Danh sách các sản phẩm thuộc category: women's clothing" , womenCategories(products))

console.log("");
// Bài tập 4
// Cách 1:
// function listCategory(arr){
//     let lengthArr = arr.length;
//     let newArr = [];
//     for (let i = 1; i <= lengthArr; i++){
//         if (newArr.indexOf(arr[i]?.category) === -1){
//             newArr.push(arr[i]?.category);
//         }
//     }
//     newArr.pop();
//     return newArr;
// }

// Cách 2:
function listCategory(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!newArr.includes(arr[i].category)){
            newArr.push(arr[i].category);
        }
    }
    return newArr;
}

// Cách 3:
// function listCategory(arr){
//     let tArr = [];
//     for (let i = 0; i < arr.length; i++){
//         tArr.push(arr[i].category);
//     }
//     let newArr = new Set(tArr);
//     return newArr;
// }

console.log("Danh sách các category: ", listCategory(products));

console.log("");
// Bài tập 5
let tempArr = [];
let a = listCategory(products);
let lengthNarr = a.length;
let lengthArr = products.length;
for (let i = 0; i < lengthNarr; i++){
let b = 0;
    for (let j = 0; j <= lengthArr; j++){
        if (products[j]?.category === a[i]){
            b++;
        }
    }
    tempArr.push(a[i] + ": " +b);
}
console.log("Products_by_type = ",tempArr);

console.log("");
// Bài tập 6
console.log("Bài tập 6: ");
function insert(array, position, value) {
    array.splice(position,0,value);
    return array;
}
  
var my_array = [10, -5, 6, 8, 7];

console.log(insert(my_array, 1, 100)); // [10, 100, -5, 6, 8, 7]
console.log(insert(my_array, 5, 10000));
console.log(insert(my_array, 0, 8888));

console.log("");
// Bài tập 7
console.log("Bài tập 7: ");
function remove(array, position) {
    array.splice(position, 1);
    return array;
}
my_array = [10, -5, 4, 9, 7, 65];
console.log(remove(my_array, 5));

console.log("");
// Bài tập 8
console.log("Bài tập 8: ");
function sumOfEvenNumbers(array) {
    let sum = 0;
    let lengthArr = array.length;
    for (let i = 0; i <= lengthArr; i++){
        if (array[i] % 2 === 0){
            sum = sum + array[i];
        }
    }
    return sum;
}
console.log(sumOfEvenNumbers([]));
console.log(sumOfEvenNumbers([-1, 1, 2]));
console.log(sumOfEvenNumbers([0, 9, 2, 8, 10, -6, 100]));

console.log("");
// Bài tập 9
console.log("Bài tập 9: ");
function arrayValuesTypes(array) {
    let new_array = [];
    let lengthArr = array.length;
    for (let i = 0; i < lengthArr; i++){
        // Cach 1: console.log(typeof(array[i]));
        new_array.push(console.log(typeof(array[i])));
    }
    new_array.pop();
    return new_array;
}

arrayValuesTypes([1, "null", 2, []]);
// ➞ ["number", "string", "number", "object"]
console.log("");
arrayValuesTypes(["214", true, null,  2, false, 2.15, []]);
// ➞ ["string", "boolean", "object", "number", "boolean", "number", "object"]
console.log("");
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]);
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]