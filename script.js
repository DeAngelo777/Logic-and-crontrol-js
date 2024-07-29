// --- Falsy Values
// false
// 0
// "" or ``
// null
// undefined
// NaN


// --- Truthy Values
// Everything else that is not falsy
// true
// '0' (0 in a String)
// ' ' space in a String
// 'false' in a String
// []
// {}
// function () {} (empty function)

const x = function () {};

if (x) {
    console.log(`This is true`);
} else {
    console.log(`This is falsey`);
}

console.log(Boolean(x));


// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log(`Please enter number of children`);
}


//Checking for empty arrays

const posts = [];

if (posts.length > 0 ) {
    console.log(`Lists Posts`);
} else {
    console.log(`No posts`);
}


// Checking for empty objects

const user = {
    name: 'Brad'
};

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No user');
}


// Loose Equality (==)

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);