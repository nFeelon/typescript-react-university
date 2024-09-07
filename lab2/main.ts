type DiscountedShoe = {
  id: number;
  size: number;
  color: string;
  value?: number;
  discount?: number;
  price?: number;
};

type DiscountedShoeCollection = {
  ботинки: DiscountedShoe[];
  кроссовки: DiscountedShoe[];
  сандалии: DiscountedShoe[];
};

//1
let products: {
  обувь: DiscountedShoeCollection;
  filterShoes: (
    minPrice: number,
    maxPrice: number,
    size: number,
    color: string
  ) => number[];
} = {
  обувь: {
    ботинки: [
      { id: 1, size: 42, color: "black", price: 2500 },
      { id: 2, size: 40, color: "brown", price: 2800 },
    ],
    кроссовки: [
      { id: 3, size: 39, color: "white", price: 2000 },
      { id: 4, size: 41, color: "blue", price: 2200 },
    ],
    сандалии: [
      { id: 5, size: 43, color: "green", price: 2200 },
      { id: 6, size: 43, color: "green", price: 2100 },
    ],
  },
  filterShoes(minPrice, maxPrice, size, color) {
    const filtered: number[] = [];
    for (const type in this.обувь) {
      for (const shoe of this.обувь[type as keyof DiscountedShoeCollection]) {
        if (
          shoe.price !== undefined &&
          shoe.price >= minPrice &&
          shoe.price <= maxPrice &&
          shoe.size === size &&
          shoe.color === color
        )
          filtered.push(shoe.id);
      }
    }
    return filtered;
  },
};

console.log(products.filterShoes(2000, 2500, 43, "green"));

//3-4
let newProducts: {
  обувь: DiscountedShoeCollection;
} = {
  обувь: {
    ботинки: [
      { id: 1, size: 42, color: "black", value: 2300, discount: 0.1 },
      { id: 2, size: 40, color: "brown", value: 2800, discount: 0.5 },
    ],
    кроссовки: [
      { id: 3, size: 39, color: "white", value: 2100, discount: 0.3 },
      { id: 4, size: 41, color: "blue", value: 2400, discount: 0.4 },
    ],
    сандалии: [
      { id: 5, size: 43, color: "green", value: 1800, discount: 0.2 },
      { id: 6, size: 43, color: "green", value: 2000, discount: 0.5 },
    ],
  },
};

for (let type in newProducts.обувь) {
  for (let shoe of newProducts.обувь[type as keyof DiscountedShoeCollection]) {
    Object.defineProperties(shoe, {
      price: {
        get() {
          return this.value ? this.value * (1 - this.discount) : undefined;
        },
        enumerable: true,
        configurable: false,
      },
      id: {
        writable: false,
        enumerable: true,
        configurable: false,
      },
    });
  }
}

//5
function newShoe(
  this: DiscountedShoe,
  id: number,
  size: number,
  color: string,
  discount: number,
  value: number
) {
  this.id = id;
  this.size = size;
  this.color = color;
  this.discount = discount;
  this.value = value;

  Object.defineProperties(this, {
    price: {
      get() {
        return this.value * (1 - this.discount);
      },
    },
    id: {
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });
}

let shoe1 = new (newShoe as any)(8, 40, "red", 0.5, 2000);
console.log(shoe1);

//6
let allProducts: {
  обувь: DiscountedShoeCollection;
} = {
  обувь: {
    ботинки: [
      new (newShoe as any)(8, 40, "red", 0.5, 200),
      new (newShoe as any)(8, 40, "red", 0.5, 2000),
    ],
    кроссовки: [
      new (newShoe as any)(8, 40, "red", 0.5, 2000),
      new (newShoe as any)(8, 40, "red", 0.5, 2000),
    ],
    сандалии: [
      new (newShoe as any)(8, 40, "red", 0.5, 2000),
      new (newShoe as any)(8, 40, "red", 0.5, 2000),
    ],
  },
};
console.log(allProducts);

let obj1: obj1 = {
    name: "Vasya",
    age: 12,
    marks: [
        10,9,8
    ],
    adress: {
        street: "Sverdlova",
        nh: 13
    }
}

type adress = {
    street: string,
    nh: number
}

type obj1 = {
    name: string,
    age: number,
    marks: number[],
    adress: adress
}