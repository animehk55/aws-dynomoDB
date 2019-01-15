// function add(a,b) {
//     return (a+b);
// }

// // console.log(add(1,2))

// --------------------------------

// function add(a, b, callback) {
//     callback(a+b);
// }

// function print(c) {
//     console.log(c);
// }

// add(1, 2, print);
// Generally callback functions are written inline
// OR
// --------
// add(1, 2, function(c){
//     console.log(c);
// })
// ----------OR
// add(1, 2, (c) => console.log(c));


// ---------------

// give an error as trying to take values of c outside from its block
// function add(a, b, callback) {
//     callback(a + b);
// }

// var a = 5;
// var b = 3;

// add (a, b, (c) => console.log(c));

// console.log(c);
//--------------------------------
// can acces that c = 20
// function add(a, b, callback) {
//     callback(a + b);
// }

// var a = 5;
// var b = 3;
// var c = 20;
// add (a, b, (c) => console.log(c));

// console.log(c);

// ------------------------
// var a = 10;
// if (true) {
//     let a= 20;
//     console.log(a);
// }
// console.log(a);

// ------------------------------
//  using callbacks
// function doStuff(data, callback) {
//     callback("done");
// }
// doStuff(true, (result)=> console.log(result));

// using promises
// function doStuff(data){
//     return new Promise((resolve, reject)=> {
//         let successMessage = {
//             status: 'success',
//             message: 'All is well!'
//         };

//         let errorMessage = {
//             status: 'error',
//             message: 'Oops, there was an error!'
//         };

//         if(typeof data === 'boolean' && data === true) {
//             resolve(successMessage);
//         } else {
//             reject(errorMessage);
//         }
//     });
// }

// doStuff(false).then(
//     (successMessage) => {
//         console.log(successMessage);
//     },
//     (errorMessage)=> {
//         console.log(errorMessage);
//     }
// );

// ------------------------
// Chaining Promises 
function doStuff(data){
    return new Promise((resolve, reject)=> {
        let successMessage = {
            status: 'success',
            message: 'All is well!'
        };

        let errorMessage = {
            status: 'error',
            message: 'Oops, there was an error!'
        };

        if(typeof data === 'boolean' && data === true) {
            resolve(successMessage);
        } else {
            reject(errorMessage);
        }
    });
}

doStuff(true).then(
    ()=>{
        let a = false;
        console.log("First doStuff resolved");
        return doStuff(a);                                    // Added (chaining) processes
    }
).then(
    ()=>{
        console.log("Second doStuff resolved");
    }
).catch(
    ()=>{
        console.log("An error occured");
    }
);
// doStuff(false).then(
//     (successMessage) => {
//         console.log(successMessage);
//     },
//     (errorMessage)=> {
//         console.log(errorMessage);
//     }
// );