var student1 = {
    firstname: "Ozioma",
    lastname: "Chukwuka",
    age: 20,
    location: "Lagos",
};
var student2 = {
    firstname: "David",
    lastname: "Oluwafemi",
    age: 21,
    location: "Abuja",
};
var studentsList = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement("table");
    studentsList.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = student.firstname;
        cell2.textContent = student.lastname;
    });
    document.body.appendChild(table);
});
var names = [];
names.push("John", "Doe");
var mixed = [];
mixed.push("John", "Doe");
mixed.push(23);
var ninja1;
