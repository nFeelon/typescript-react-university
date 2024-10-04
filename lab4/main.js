"use strict";
//1
const array = [
    { id: 1, name: "Vasya", group: 5 },
    { id: 2, name: "Ivan", group: 4 },
    { id: 3, name: "Nikita", group: 9 },
    { id: 4, name: "Zhenya", group: 10 },
    { id: 5, name: "Daniel", group: 10 },
];
let car = {};
car.manufacturer = "manufacturer";
car.model = "model";
//3
const car1 = {};
car1.manufacturer = "manufacturer";
car1.model = "model";
const car2 = {};
car2.manufacturer = "manufacturer";
car2.model = "model";
const arrayCars = [
    {
        cars: [car1, car2],
    },
];
let group = {
    students: [
        {
            id: 1,
            name: "Nikita Filon",
            group: 1,
            marks: [
                { subject: "TypeScript", mark: 10, done: true },
                { subject: "CMS", mark: 9, done: true },
            ],
        },
        {
            id: 2,
            name: "Bob",
            group: 2,
            marks: [
                { subject: "TypeScript", mark: 7, done: true },
                { subject: "CMS", mark: 6, done: false },
            ],
        },
    ],
    studentFilter: function (groupNumber) {
        return this.students.filter((student) => student.group === groupNumber);
    },
    marksFilter: function (mark) {
        return this.students.filter((student) => student.marks.some((m) => m.mark === mark));
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(student => student.id !== id);
    },
    mark: 5,
    group: 1,
};
console.log(group.studentFilter(1));
console.log(group.marksFilter(10));
group.deleteStudent(2);
console.log(group.students);
