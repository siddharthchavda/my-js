// // const promiseOne = new Promise(function(resolve,reject){
// //     //
// //     //
// //     setTimeout(function(){
// //          console.log('async task is complete');
// //          resolve()
// //     },1000)
        
// // })

// // promiseOne.then(function(){
// //     console.log("promise consumed");
    
// // })

// // new Promise (function (resolve,reject) {
// //     setTimeout(function() {
// //         console.log("async is 2");
// //         resolve()
// //         }, 1000)
// //     }).then(function(){
// //         console.log("async 2 reslowed");
        
// //     })
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve({ username: "chai", Email: "chai@example.com" });
//     }, 1000);
//   });
  
//   promiseThree.then(function (user) {
//     console.log(user);
//   });
    
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; // Set error to true to simulate failure
        
        if (!error) {
            resolve({ username: "sid", Email: "sid@example.com" });
        } else {
            reject('ERROR: something went wrong');
        }
        
    }, 1000);
});

promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log('the promise is either resolved or reject'))