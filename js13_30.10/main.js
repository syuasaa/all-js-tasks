const user = {
  name: "Joe",
  age: 25,
  city: "Yerevan",
  isStudent: false,
  isDeveloper: true,
  getInfo() {
    return `${this.name} is ${this.age} years old and from ${this.city}`;
  },
  getAgeAfter10Years() {
    return `${this.name} will be ${this.age + 10} tears old in 10 years`;
  },
  changeCity(newCity) {
    this.city = newCity;
    return `${this.name}'s new city is ${this.city}`;
  },
};
console.log(user.getInfo());
console.log(user.getAgeAfter10Years());
console.log(user.changeCity("Abovyan"));

//////////////////////////////////////////

const bankAccount = {
  owner: "Joe",
  balance: 1000,
  currency: "USD",
  deposit(amount) {
    return (this.balance += amount);
  },
  withdraw(amount) {
    return amount <= 0
      ? "Invalid amount"
      : this.balance < amount
        ? "Insufficient balance"
        : (this.balance -= amount);
  },
  getBalance() {
    return this.balance + " " + this.currency;
  },
  getOwnerInfo() {
    return `Owner is ${this.owner} and his balance is ${this.balance} ${this.currency}`;
  },
};

console.log(bankAccount.withdraw(200));
