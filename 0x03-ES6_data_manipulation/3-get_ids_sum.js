export default function getStudentIdsSum(array) {
  return array.reduce((acc, item) => acc + item.id, 0);
}
