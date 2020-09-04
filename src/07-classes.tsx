interface Params {
  price?: number;
  size: string;
  toppings: string[];
}

class Pizza {
  static price = 50;
  public size: string;
  private toppings: string[];

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }
}

const pizza = new Pizza({ size: "medium", toppings: ["cheese"] });
console.log(pizza);

export {};
