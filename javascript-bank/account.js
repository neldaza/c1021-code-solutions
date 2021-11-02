/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

// 1. define deposit method with perameter amount, and assign it
// as prototype for Account
// 2. if the boolean return for amount being an integer isn't true and the amount
// isn't greater than 0
// 3. return false and dont initiate deposit
// 4. if it is true,
// 5. assign new transaction function with type deposit and amount of amount
// 6. push variable deposit to that function's transactions array
// 7. and return true

Account.prototype.deposit = function (amount) {

  if (amount > 0 && Number.isInteger(amount) === true) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }

};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount) === true) {
    var withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var finalNumber = 0;
  var withdrawalNumbers = 0;
  var depositNumbers = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositNumbers += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawalNumbers += this.transactions[i].amount;
    }
  }
  finalNumber = depositNumbers - withdrawalNumbers;
  return finalNumber;
};
