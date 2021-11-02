function ExampleConstructor() {

}

console.log('Value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);
var newExample = new ExampleConstructor();
console.log('value of newExample:', newExample);
console.log('does newExample contain an instance of ExampleConstructor:', newExample instanceof ExampleConstructor);
