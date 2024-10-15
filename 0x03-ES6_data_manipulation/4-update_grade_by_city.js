export default function updateStudentGradeByCity(array, city, newGrade) {
  return array
    .filter((item) => item.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }
        if (!student.grade) {
          student.grade = "N/A";
        }
        return student;
      });
      return student;
    });
}

// const map1 = ["1", "2", "3"].map((x) => parseInt(x, 10));
// console.log(map1);

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.map((numbers, index) => {
//   if (index < 3) {
//     return numbers;
//   }
// });
// console.log(filteredNumbers);

// const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];
// const selected = cities.filter((city, index) => {
//   if (index < 3) {
//     return city.toUpperCase();
//   }
// });
// console.log(selected);

// const cart = [5, 40, 23];
// let total = 0;
// const withTax = cart.map((cost) => {
//   total += cost;
//   return cost * 1.05;
// });

// console.log(withTax);
// console.log(total);

// const products = [
//   { name: "apples", price: 2 },
//   { name: "oranges", price: 3 },
//   { name: "bananas", price: 1 },
// ];

// const updatedProducts = products.map((product) => {
//   return { ...product, price: `${product.price + 100}` };
// });

// console.log(updatedProducts);

// const Numbers = [1, 4, 6, -7, -2, 5, 7, -9, 4];
// const averaged = Numbers.filter((numbers) => numbers > 0).map(
//   (numbers, index, arr) => {
//     const prev = arr[index - 1];
//     const next = arr[index + 1];

//     let count = 1;
//     let total = numbers;
//     if (prev !== undefined) {
//       count++;
//       total += prev;
//     }
//     if (next !== undefined) {
//       count++;
//       total += next;
//     }
//     const average = total / count;
//     return Math.round((average * 100) / 100);
//   }
// );
// console.log(averaged);

// const arrayLike = {
//   length: 4,
//   0: "foo",
//   1: "bar",
//   2: "baz",
//   3: 2,
//   4: 3,
//   5: 4,
// };

// const arrayLikeArray = Array.from(arrayLike);
// const arrayLikeArray2 = Object.entries(arrayLike).map(([key, value]) => {
//   if (typeof value === "string") {
//     return [key, "changed"];
//   }
//   return [key, value];
// });
// console.log(arrayLikeArray2);
// console.log(Object.fromEntries(arrayLikeArray2));
