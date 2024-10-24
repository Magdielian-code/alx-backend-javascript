interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstname: "Ozioma",
  lastname: "Chukwuka",
  age: 20,
  location: "Lagos",
};

const student2: Student = {
  firstname: "David",
  lastname: "Oluwafemi",
  age: 21,
  location: "Abuja",
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");

  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstname;
    cell2.textContent = student.lastname;
  });

  document.body.appendChild(table);
});
