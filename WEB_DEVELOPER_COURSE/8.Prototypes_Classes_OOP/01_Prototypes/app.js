//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function () {
	console.log(`OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`);
};

'bees'.yell(); //"OMG!!! BEES!!!!! AGHGHGHG!"

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
	console.log('SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!');
};

const nums = [6, 7, 8, 9];

nums.pop(); // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"

// STRING WILL HAVE METHOD YELL ON ITS PROTOTYPE
const dog = 'Name';