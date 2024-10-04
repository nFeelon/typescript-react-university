//1

type student = {
  id: number;
  name: string;
  group: number;
};

type students = student[];

const array: students = [
  { id: 1, name: "Vasya", group: 5 },
  { id: 2, name: "Ivan", group: 4 },
  { id: 3, name: "Nikita", group: 9 },
  { id: 4, name: "Zhenya", group: 10 },
  { id: 5, name: "Daniel", group: 10 },
];

//2
type CarsType = {
  [key: string]: string;
};

let car: CarsType = {};
car.manufacturer = "manufacturer";
car.model = "model";

//3
const car1: CarsType = {};
car1.manufacturer = "manufacturer";
car1.model = "model";

const car2: CarsType = {};
car2.manufacturer = "manufacturer";
car2.model = "model";

type ArrayCarsType = {
  cars: CarsType[];
};

const arrayCars: ArrayCarsType[] = [
  {
    cars: [car1, car2],
  },
];

//4
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DoneType = boolean;

type MarkType = {
  subject: string;
  mark: MarkFilterType;
  done: DoneType;
};

type StudentType = {
  id: number;
  name: string;
  group: GroupFilterType;
  marks: Array<MarkType>;
};

type GroupType = {
  students: StudentType[];
  studentFilter: (group: number) => Array<StudentType>;
  marksFilter: (mark: number) => Array<StudentType>;
  deleteStudent: (id: number) => void;
  mark: MarkFilterType;
  group: GroupFilterType;
};

let group: GroupType = {
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
  studentFilter: function (groupNumber: number): StudentType[] {
    return this.students.filter((student) => student.group === groupNumber);
  },
  marksFilter: function (mark: number): StudentType[] {
    return this.students.filter((student) =>
      student.marks.some((m) => m.mark === mark)
    );
  },
  deleteStudent: function (id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  },
  mark: 5,
  group: 1,
};

console.log(group.studentFilter(1));
console.log(group.marksFilter(10));
group.deleteStudent(2);
console.log(group.students);