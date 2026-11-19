const user = {
  name: "Joe",
  age: 35,
  inventory: [],
  bank: 1000000,
  buy(product) {
    //product obja
    let buyProduct = products.items.find((el) => el.name === product);

    if (this.age < 18) {
      return "tariqy chi bavararum";
    }
    // console.log(buyProduct);
    // console.log(user);

    if (buyProduct.count === 0) {
      return "apranqic chka ays payin";
    } else if (buyProduct.cost > this.bank) {
      return "chka bavarar gumar";
    } else {
      this.bank -= buyProduct.cost;
      buyProduct.count--;
      this.inventory.push({
        ...buyProduct,
        count: 1,
      });
      return "gnumy hajoxvec";
    }
  },

  getBank() {
    return this.bank;
  },
  showInventory() {
    return this.inventory;
  },

  sell(productName) {
    const product = this.inventory.find((el) => el.name === productName);

    if (!product) {
      return "product chi gtnvel";
    }

    this.inventory = this.inventory.filter((el) => el.name !== productName);

    this.bank += (product.cost * 80) / 100;

    return "vajarqy hajoxvec ";
  },

  getInfo() {
    return `
   Name:${this.name} 
   Age:${this.age} 
   Bank:${this.bank} 
   Inventory: ${this.inventory.length} `;
  },
  /////////////////////////////////////////
  getTotalInventoryCost() {
    if (this.inventory.length === 0) {
      return "pahestum chka apranq";
    }
    return `ogtatiroj guyqagrman bolor apranqaneri yndhanur arjeqy : ${this.inventory.reduce(
      (acc, el) => {
        return acc + el.cost;
      },
      0,
    )}`;
  },
};

///////////////////////////////////////////////////////

const products = {
  items: [
    {
      name: "iPhone 15",
      type: "Smartphone",
      cost: 300000,
      description: "Apple smartphone with 128GB storage",
      count: 5,
    },
    {
      name: "Samsung Galaxy S24",
      type: "Smartphone",
      cost: 250000,
      description: "Samsung smartphone with 256GB storage",
      count: 3,
    },
    {
      name: "MacBook Air",
      type: "Laptop",
      cost: 450000,
      description: "Apple laptop with M2 chip",
      count: 2,
    },
    {
      name: "AirPods Pro",
      type: "Headphones",
      cost: 80000,
      description: "Wireless noise-cancelling headphones",
      count: 10,
    },
    {
      name: "Logitech Mouse",
      type: "Accessories",
      cost: 25000,
      description: "Wireless computer mouse",
      count: 0,
    },
  ],
  showProducts() {
    this.items.forEach((el) => {
      console.log(`${el.name} : ${el.description} :${el.count}`);
    });
  },
  findProduct(name) {
    const product = this.items.find((el) => el.name === name);

    return product ? product : "chka";
  },
  filterByType(type) {
    const category = this.items.filter((el) => el.type === type);

    return category ? category : "chka tenc type";
  },
  changePrice(name, newPrice) {
    const product = this.items.find((el) => el.name === name);
    if (!product) {
      return "chka tenc apranq";
    }

    if (newPrice <= 0) {
      return "giny sxal e nshvac";
    }
    product.cost = newPrice;
    return `${product.name}i nor giny ${product.cost} dram e`;
  },

  ///////////////////////////////////////////////
  getCheapestProduct() {
    let product = this.items.reduce((min, el) => {
      return el.cost < min.cost ? el : min;
    }, this.items[0]);
    return product;
  },
  getMostExpensiveProduct() {
    let product = this.items.reduce((max, el) => {
      return el.cost > max.cost ? el : max;
    }, this.items[0]);
    return product;
  },
  // addProduct(product) {
  //   product.cost > 0? this.items.push(product):;
  // },
  getProductsCount() {
    return this.items.length === 0
      ? "chka aparanq"
      : this.items.reduce((acc, el) => {
          return acc + el.count;
        }, 0);
  },
};

// // console.log(user.buy("AirPods Pro"));
console.log(user.buy("AirPods Pro"));
console.log(user.buy("MacBook Air"));
// // console.log(user.getBank());
// console.log(user.showInventory());

// // // console.log(user.sell("AirPods Pro"));
// console.log(user.getInfo());
// console.log(products.findProduct("Samsung Galaxy S24"));
// console.log(products.filterByType("Smartphone"));
// console.log(products.changePrice("Samsung Galaxy S24", 20));

console.log(user.getTotalInventoryCost());
console.log(products.getMostExpensiveProduct());
console.log(products.getCheapestProduct());

// products.addProduct({
//   name: "iPhone 17",
//   type: "Smartphone",
//   cost: 600000,
//   description: "Apple smartphone with 256GB storage",
//   count: 5,
// });
console.log(products.getProductsCount());
products.showProducts();
