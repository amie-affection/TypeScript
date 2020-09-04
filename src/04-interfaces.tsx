interface PluginConfig {
  readonly selector: string; // только для чтения (изменить нельзя)
  perPage: number;
  startIndex?: number; // не обязательное свойство
  draggable: boolean;
}

const config: PluginConfig = {
  selector: "#plugin-1",
  perPage: 2,
  startIndex: 0,
  draggable: false,
};

console.log(config);

// =============================

interface Employees {
  [key: string]: number;
}

const employees: Employees = {
  mango: 5,
  poly: 10,
  ajax: 20,
  wiki: 50,
};

console.log(employees);

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
  if (bestEmployeeProIndex <= value) {
    bestEmployeeName = name;
  }
}

console.log(bestEmployeeName); // wiki

export {};
