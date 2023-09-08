class accountdetails {
  static totalFunds = 0;
  constructor(name, accNo, balance) {
    this.name = name;
    this.accNo = accNo;
    this.balance = balance;
    this.transactions = [];
    accountdetails.totalFunds += balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      const transaction = {
        transaction_id: this.transactions.length + 1,
        date: Date.now(),
        transaction_type: "credited",
        amount: this.amount,
      };
      this.transactions.push(transaction);
      accountdetails.totalFunds += amount;
      return `${this.name} your balance after deposit is:$${this.balance}`;
    }
  }

  withdraw(wamount) {
    if (wamount > 0 && wamount <= this.balance) {
      this.balance -= wamount;
      const transaction = {
        transaction_id: this.transactions.length + 1,
        date: Date.now(),
        transaction_type: "debited",
        amount: this.wamount,
      };
      this.transactions.push(transaction);
      accountdetails.totalFunds -= wamount;
      return `${this.name} your balance after withdraw is :${this.balance}`;
    } else {
      return "invalid amount";
    }
  }

  getTransactions() {
    return this.transactions;
  }
  getBalance() {
    return `${this.name} your balance is:${this.balance}`;
  }
  static getTotalFunds(accounts) {
    return `total funds across all accounts:${accountdetails.totalFunds} `;
  }
}
const charan = new accountdetails("charan", 3902435265599, 20_00_000);
const sudeesh = new accountdetails("sudeesh", 3902435265599, 20_00_000);
const vamsi = new accountdetails("vamsi,", 3902435265599, 20_00_000);
console.log(charan);

console.log(charan.withdraw(1_00_000));
console.log(charan.deposit(10.29));
console.log(charan.getBalance());
console.log(charan.getTransactions());
console.log(accountdetails.getTotalFunds());
