type AddFn = (a: number, b: number) => number;

const addExpression: AddFn = function (x, y) {
  return x + y;
};

const res = addExpression(2, 3);

console.log(res);

// =============================

type LogFn = (m: string) => void;

const log: LogFn = (message) => {
  console.log(message);
};

log("Hello");

// =============================

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  logSize?(): void;
  getSize(): string;
  addTopping(topping: string): void;
}

const pizza: IPizza = {
  size: PizzaSize.Small,
  toppings: ["sause", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(pizza);

export {};
