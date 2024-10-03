// export default function appendToEachArrayValue(array, appendString) {
//   for (const idx of array) {
//     const value = array[idx];
//     array[idx] = appendString + value;
//   }

//   return array;
// }

export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const item of array) {
    myarray.push(appendString + item);
  }

  return myarray;
}