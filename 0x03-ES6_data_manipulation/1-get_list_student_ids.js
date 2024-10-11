// JavaScript Examples
// 1. Shallow Copy Examples
const originalArray = [1, [2, 3], { a: 4 }];


// Using spread operator
const spreadCopy = [...originalArray];
console.log(spreadCopy)

// Using Array.from()
const fromCopy = Array.from(originalArray);
console.log(fromCopy)

// Using slice()
const sliceCopy = originalArray.slice();
console.log(sliceCopy)



// 2. Deep Copy Implementation in JavaScript
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    
    const copy = Array.isArray(obj) ? [] : {};
    
    for (const key in obj) {
        copy[key] = deepCopy(obj[key]);
    }
    
    return copy;
}

// Using deep copy
const deepCopied = deepCopy(originalArray);
originalArray[1].push(5);
console.log(originalArray);     // [1, [2, 3, 4, 5], { a: 4 }]
console.log(deepCopied);        // 2. Deep Copy Implementation in JavaScript
