// export default function updateStudentGradeByCity(array, city, newGrade) {
//   return array.filter((item) => item.location === city).map((student) => {
//     const
//   });
// }
const map1 = ["1", "2", "3"].map((x) => parseInt(x, 10));
console.log(map1);

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.map((numbers, index) => {
  if (index < 3) {
    return numbers;
  }
});
console.log(filteredNumbers);

const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];
const selected = cities.filter((city, index) => {
  if (index < 3) {
    return city.toUpperCase();
  }
});
console.log(selected);

const cart = [5, 40, 23];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.05;
});

console.log(withTax);
console.log(total);

const product = [
    { name: "apples", price: 2 },
    { name: "oranges", price: 3 },
    { name: "bananas", price: 1 },
]

product.map((product) => {
    return {...product, price: `${product.price}` + 100};
})

console.log(product);
