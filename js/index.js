// use this to copy code snippets or use your browser's console
function greet() {
	console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
	name: 'Bob',
	greet: greet
};

let sally = { name: 'Sally' };

person.greet(); // my name is Bob, hi!
console.log('-------')
greet.call(sally)
console.log('-------')// my name is Sally, hi!
console.log('-----')
greet.apply(sally)