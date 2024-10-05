export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {});
}






// const promise = doSomething();
// const promise2 = promise.then(successCallback, failureCallback);

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve('Success');
//     } else {
//         reject('Failed');
//     }
// });

// p.then((message) => {
//     console.log('This is in the then ' + message);
// }).catch((message) => {
//     console.log('This is in the catch ' + message);
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded');
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded');
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded');
// })

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages);
// }).catch((error) => {
//     console.log(error)
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages);
// }).catch((error) => {
//     console.log(error)
// })