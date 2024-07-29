// || = assigns the right side value only if the left is a falsy value.


let a = null;
// if (!a) {
//     a = 10;

// }
//same


//a = a || 10;
//same
a ||= 10;

console.log(a);


// && = assigns the right side value only if the left is a truthy  value

let b = 10;

// if (b) {
//     b = 20;
// }

//b = b && 20;

b &&= 20;
//same


console.log(b);

// ?? = assigns the right side value only if the left is null or undefined

let c = undefined;

// if (c === null || c === undefined) {

//     c = 10;

//     console.log(c);
// }
//same


// c = c ?? 20;
// same

c ??= 20;

console.log(c);