import { Person } from "./Person.js";
import { Bird, Dog, Cat, Tiger } from "./Animal.js";
import { BankAccount, Bank } from "./BankAccount.js";

const account1 = new BankAccount("230984293", "Spongebob Squarepants", 5000);
const account2 = new BankAccount("365803411", "Squidward Tentacles", 1000);

const bank = new Bank();

bank.addAccount(account1);
bank.addAccount(account2);

account1.deposit(550);
account2.withdraw(800);

bank.displayAllAccounts();

/*
const tweety = new Bird("Yellow", "Tweety");
const heli = new Dog("Heli");
const aurora = new Cat("Aurora");
const macaaaan = new Tiger("Macaaaan");

tweety.speak();
console.log(tweety.getColor());

heli.speak();
aurora.speak();
macaaaan.speak();

console.log(tweety);
console.log(Object.keys(tweety).length > 0);
*/
