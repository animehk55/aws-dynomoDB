// // console.log("Hello World");

// var x = "Hello";
// var y = "Animesh";

// // console.log(x + y);

// console.log(`She sells sea shells 
// on the sea shore`);

// console.log('She sells sea shells \non the sea shore');

// -----------------------
// var x = "Hello";
// x = 2;
// x=false;
// console.log(x);

// var z;


// ---------------
// const a = 'my constant';
// a = 'something else';
// console.log(a);
// //error : Assignment to constant variable.

// concatinate
// var x="Ani";
// var y="Pu";
// console.log(x + '  ' + y);
// console.log(x.length);
// ----------------


// arthematic operation
// var a=20;
// var b=30;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// c= 5;
// console.log(a+b+c);
// console.log(a*b+c);
// console.log(a+b*c);
// console.log((a*b)+c);
// console.log((a+b)*c);
// console.log(a>b);
// console.log(a<b);



// arthematic operation var issue
// "use strict"
// var a=20;
// var b=30;
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);
// c= 5;
// console.log(a+b+c);
// console.log(a*b+c);
// console.log(a+b*c);
// console.log((a*b)+c);
// console.log((a+b)*c);
// //c is not defined

// ----------------

// var p = true;
// var q= false;
// console.log(p & q);
// console.log(p && q);

// --------------------------
// var student = {};
// student.firstname = "Riyaz";
// student.lastname = "Sayddd";
// student.age = 35;
// console.log(student);


// -----------------
// var student = {
//     firstname: "Riyax",
//     lastname: "Sahid",
//     age: "35"
// };
// console.log(student.firstname);
// console.log(student);

// -----------------------

// var x = [10, 20 ,30]
// var y = [10, 20, 30, true, 'Animesh']


// console.log(x);
// console.log(y);

// var a= 6;
// var b= 6;

// if (a>b) {
//     console.log("a is greater than b");
// } else if (b>a) {
//     console.log("b is greater than a");
// } else {
//     console.log("a is equal to b");
// }

// --------------------------
var i = 0;      //0, 1, 5
var limit =5;
// while (i<limit) {
//     console.log(i);
//     i++         // i+1
// }

// do {
//     console.log(i);
//     i++;
// } while(i<limit);

// for (i=0; i<limit; i++){
//     console.log(i);
// }

// var arr = [10, 20, 30];
// arr.forEach(function(item){
//     console.log(item);
// })

var arr =[10, 20, 30];
for (var i of arr) {
    console.log(i);
}