export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") throw TypeError("name must be a string");
    if (typeof length !== "number") throw TypeError("length must be a number");
    if (
      !Array.isArray(students) ||
      !students.every((student) => typeof student === "string")
    ) {
      throw TypeError("students must be an array of strings");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw TypeError("name must be a string");
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }
  set length(length) {
    if (typeof this.length !== "number") {
      throw TypeError("students must be an array of strings");
    } else {
      this._length = length;
    }
  }

  get students() {
    return this._students;
  }
  set students(students) {
    if (
      !Array.isArray(students) ||
      !students.every((student) => typeof student === "string")
    ) {
      throw TypeError("students must be an array of strings");
    }
    this._students = students;
  }
}
