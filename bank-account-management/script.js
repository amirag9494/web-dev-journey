class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount });
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be greater than zero.";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount)
      .join(",");
    return `Deposits: ${deposits}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount)
      .join(",");
    return `Withdrawals: ${withdrawals}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.withdraw(30);
myAccount.deposit(100);