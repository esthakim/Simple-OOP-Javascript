import { formatter } from "./Formatter.js";

export class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `\nSetoran sebesar ${amount} berhasil.\nSaldo saat ini: ${this.balance}`
    );
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `\nPenarikan sebesar ${amount} berhasil.\nSaldo saat ini: ${this.balance}`
      );
    } else {
      console.log("Saldo tidak cukup. Penarikan dibatalkan");
    }
  }

  checkBalance() {
    const fBalance = formatter(this.balance);
    console.log(`Sisa saldo: ${fBalance}`);
  }
}

export class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
    console.log(`Akun telah ditambahkan: ${account.accountNumber}`);
  }

  removeAccount(accountNumber) {
    this.accounts = this.accounts.filter(
      (account) => account.accountNumber !== accountNumber
    );
    console.log(`Akun telah dihapus: ${accountNumber}`);
  }

  displayAllAccounts() {
    console.log("\nSemua Akun: ");
    this.accounts.forEach((account) => {
      console.log(
        `Nomor rekening: ${account.accountNumber}, \nNama Pemegang: ${account.accountHolder}, \nSaldo: ${account.balance}`
      );
    });
  }
}
