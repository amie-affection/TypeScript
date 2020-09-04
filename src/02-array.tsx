const temps: number[] = [30, 31, 27, 28, 32];
const temp: Array<number> = [30, 31, 27, 28, 32];

const coords: [number, number] = [50.4501, 30.5245]; // только 2 числа

const template: (number | string)[] = [50, 45, "UAH", 30, 52, 45];

temps.push(6);

const t = temps.filter((t) => t > 30);
console.log(t);

const templates: readonly number[] = [30, 30, 40, 40]; // только для чтения

console.log(temps, temp, coords, template);

export {};
