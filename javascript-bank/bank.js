/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance) === true) {
    var currentAccountNumber = this.nextAccountNumber - 1;
    var newAccount = new Account(currentAccountNumber, holder);
    this.accounts.push(newAccount);
    newAccount.deposit(balance);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  }
  return null;
};

// 1. define getAccount method with perameter number (Bank prototype)
// 2. loop through bank's accounts' indexes
// 3. if the number property of one the accounts is equal to argument number
// 4. return the account
// 5. if it isn't, return null

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }

  }
  return null;

};
