let x = 7;

// THIS VERSION RETURNS TRUE
//&& runs before ||
//x == 7 || x === 3 && x > 10;

// THIS VERSION RETURNS FALSE
// Use parens to change order
(x == 7 || x === 3) && x > 10;


/////////////////////////////////////////////////////////


let day = 7;

// USING TRADITIONAL CONDITIONAL....
// if (day === 1) {
// 	console.log('MONDAY');
// }
// else if (day === 2) {
// 	console.log('TUESDAY');
// }
// else if (day === 3) {
// 	console.log('WEDNESDAY');
// }
// else if (day === 4) {
// 	console.log('THURSDAY');
// }
// else if (day === 5) {
// 	console.log('FRIDAY');
// }
// else if (day === 6) {
// 	console.log('SATURDAY');
// }
// else if (day === 7) {
// 	console.log('SUNDAY');
// }
// else {
// 	console.log('INVALID DAY');
// }

// USING A SWITCH INSTEAD...
switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6:
        console.log('SATURDAY');
        break;
    case 7:
        console.log('SUNDAY');
        break;
    default:
        console.log('INVALID DAY');
}

// EXAMPLE 2
let emoji = 'heart';

// Switch with overlapping cases...
switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
}

//////////////////////////////////////////////////////

let num = 7;

// Without Ternary Operator...
// if (num === 7) {
// 	console.log('lucky!');
// }
// else {
// 	console.log('BAD!');
// }

// Same thing written with Ternary Operator...
num === 7 ? console.log('lucky!') : console.log('BAD!');

// ==============
// EXAMPLE 2
// ==============

let status = 'offline';

// Without ternary operator
// let color;
// if (status === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }

// One-liner using Ternary Operator...
let color = status === 'offline' ? 'red' : 'green';
console.log(color);