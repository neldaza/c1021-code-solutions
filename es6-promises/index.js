const takeAChance = require('./take-a-chance');
const myName = takeAChance('Nelson');
const error = myName;

const promise = new Promise((resolve, reject) => {
  resolve(myName);
}
);

promise.then(myName => {
  console.log(myName);
});

promise.catch(error => {

  console.error('' + error.message);
});
