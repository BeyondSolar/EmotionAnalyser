


//JS Promises

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// let dealer=function(){
//     return new Promise(function(resolve,reject){
//         resolve("Dealer");
//     })
// }

// let distributor=function(message){
//     return new Promise(function(resolve,reject){
//         resolve(message+" distributor");
//     })
// }

// let retailer=function(message){
//     return new Promise(function(resolve,reject){
//         resolve(message+" retailer");
//     })
// }

// dealer()
//     .then(function(result){
//         return distributor(result);
//     })
//     .then(function(result){
//         return retailer(result);
//     })
//     .then(function(result){
//         console.log("finished "+result);
//     })

// const http=require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end("Hello World");
// }).listen(8000);

//Callback Function

// const callback=function(){
//     console.log("HELLO");
// }


// setInterval(()=>{
//     callback();
// },1000);



//Why to use Arrow Functions instead of CallBack Functions?

// class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     startCounting() {
//       // Using an arrow function to define a callback within the method
//       const callback = ()=> {
//         console.log(`Current count: ${this.count}`);
//       };
  
//       // Simulating an asynchronous operation (e.g., setInterval)
//       this.interval = setInterval(() => {
//         this.count++;
//         callback(); // Maintains the "this" context of the outer function
//       }, 1000);
//     }
  
//     stopCounting() {
//       clearInterval(this.interval);
//       console.log("Counting stopped.");
//     }
//   }
  
//   const myCounter = new Counter();
//   myCounter.startCounting();
  
//   // After 5 seconds, stop counting
//   setTimeout(() => {
//     myCounter.stopCounting();
//   }, 5000);