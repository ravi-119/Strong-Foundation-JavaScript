// Dates 

let myDate = new Date();
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object


// let myCreatedDate = new Date(2025, 0, 23);
// let myCreatedDate = new Date(2025, 0, 23, 5, 3);
// let myCreatedDate = new Date("2025-01-14");
let myCreatedDate = new Date("01-14-2025");


// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1626351835129
// console.log(myCreatedDate.getTime()); // 1732054400000
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})




