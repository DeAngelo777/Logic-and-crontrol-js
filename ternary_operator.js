const age = 17;

// Using an if statement


if (age >= 18) {
    console.log(`You can vote!`);
} else {
    console.log(`You can not vote!`);
}


// Using a ternary operator


age >= 18 ? console.log('You can vote!') : console.log(`You can not vote!`);


// Assigning a conditional value to variable

const canVote = age  >= 18 ? true : false;
const canVote2 = age  >= 18 ? 'You can vote' : 'You can not vote';


console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// let redirect;

// if (auth) {
//     console.log('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     console.log('Access denied');
//     redirect = '/login';
// }
//same

// const redirect = auth ? (console.log(`Welcome to the dashboard`), '/dashboard') :
//  (console.log(`Access denied`, `/login`));

// console.log(redirect);

// Shorhand, tik if veikia, else nieko nedaro
// auth ? console.log(`Welcome to the dashboard`) : null;

auth && console.log(`Welcome to the dashboard`);



