//1

function createPhoneNumber(massiv: number[]): string {
  return (
    "(" +
    massiv.slice(0, 3).join("") +
    ") " +
    massiv.slice(3, 6).join("") +
    "-" +
    massiv.slice(6).join("")
  );
}

console.log("Задание 1 : " + createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//2
class Challenge {
  static solution(par: number): number {
    if (par < 0) return 0;
    let sum: number = 0;
    for (let i = 0; i < par; i++) {
      if (i % 3 == 0 || i % 5 == 0) sum += i;
    }
    return sum;
  }
}

console.log("Задание 2 : " + Challenge.solution(10));

//3

function rightMove(massiv: number[], k: number): number[] {
  if (k < 0) return [];
  if (k >= massiv.length) k = k % massiv.length;
  let nmass = massiv
  
    .slice(massiv.length - k)
    .concat(massiv.slice(0, massiv.length - k));
  return nmass;
}

console.log("Задание 3 : " + rightMove([1, 2, 3, 4, 5, 6, 7], 16));

let strarr: string[] = ["hello", "world"];
//4

function getMediane(mass1: number[], mass2: number[]): number {
  let mass12 = mass1.concat(mass2).sort((a: number, b: number) => a - b);

  if (mass12.length % 2 == 0) {
    let ind1: number = mass12.length / 2;
    let ind2: number = ind1 - 1;

    return (mass12[ind1] + mass12[ind2]) / 2;
  }
  return mass12[Math.round(mass12.length / 2) - 1];
}

let mass1: number[] = Array.from({ length: Math.random() * 10 }, () =>
  Math.floor(Math.random() * 10)
).sort((a: number, b: number) => a - b);
let mass2: number[] = Array.from({ length: Math.random() * 10 }, () =>
  Math.floor(Math.random() * 10)
).sort((a: number, b: number) => a - b);

console.log("Задание 4 : " + getMediane([1, 3], [2, 4]));
