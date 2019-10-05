// 請介紹兩個字串方法跟數字方法
console.log('='.repeat(30));
console.log("作業1");
console.log('='.repeat(30));
//substring(索引值)=>從索引值~字串的最後一個
//substring(起始索引值, 結束索引值)=>起始索引值~結束索引值的前一個索引值
let a: string = 'Hi how are you'
console.log(a.substring(3)); //索引值3對應到字串a的 "h"，印出索引值3~最後
console.log(a.substring(3, 6)); //印出從索引值3~索引值5
console.log('-'.repeat(30));

//match('欲搜尋的字串') 使用括號中的字串搜尋輸入的字串
//回傳一個陣列說明欲搜尋的字串在輸入的字串中第幾個索引值
console.log(a.match('h')); //h在字串a中的第三個索引值
console.log('-'.repeat(30));

//toFixed(數字) 保留小數點後多少個位數，若不輸入，預設為0
let b: number = 3.1415;
console.log(b.toFixed()); //結果為3
console.log(b.toFixed(2)); //保留小數點後兩個位數，結果為3.14
console.log('-'.repeat(30));

//isInteger(要判斷的值) 判斷是否為整數，回傳布林值
let c: number = 666;
console.log(Number.isInteger(b)); //b是小數，結果為false
console.log(Number.isInteger(c)); //c是整數，結果為true

console.log('='.repeat(30));
console.log("作業2");
console.log('='.repeat(30));
// 錢錢大於一個值，叫乾爹
let money = 45000;
let limit = 22000; // 限制值

if (money > limit) {
    console.log("好啦好啦你很有錢~");
} else {
    console.log("可憐...");
}

