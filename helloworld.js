console.log("Hellow World");
var myname="Ritik Raj Gupta";
console.log(myname);
console.log(10 + "20")
console.log(9 - "5")//bug
console.log("vinod"-"thapa");
console.log( " " + 0);
console.log(true+true);
console.log(true+false);
console.log(false-true);
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));
NaN===NaN;        
Number.NaN===NaN;
isNaN(NaN);         
isNaN(Number.NaN);  
Number.isNaN(NaN);
console.log(Number.isNaN(NaN));
var x = 5; 
var y = 5;

console.log(`is both the x and y are equal or not ${x == y}`);
console.log("Remainder Operator " + 27%4);

//I will tell you when we will see es6
//console.log(`Is both the x and y are equal : ${x == y}`);
var a = 30;
var b = 10;

// Equal (==)
console.log(a == b);

// Not equal (!=)
console.log(a != b);

// // Greater than (>)
console.log(a > b);

// // Greater than or equal (>=)
console.log(a >= b);

// // Less than (<)
console.log(a < b);

// // Less than or equal (<=)
console.log(a <= b);
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));
// //2nd javascript bug
var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));

var myPhoneNumber=9060928741;
var myName="Ritik Raj Gupta";
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));
if(isNaN(myName)){
console.log("Please enter a valied number.");
}
// NaN Practice 🤯



NaN===NaN;
Number.NaN===NaN;
isNaN(NaN);
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));

var x=5;
var y=5;
console.log("is both the x and y are equal or not "+ x==y);
console.log(`Is both the x and y are equal : ${x == y}`);
// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

console.log("Remainder Operator " + 27%4);
// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num-- + 5;
console.log(num);
console.log(newNum);
// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = --num + 5; 
console.log(num);
console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.
// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

var a = 30;
var b = 10;

// Equal (==)
console.log(a == b);

// Not equal (!=)
console.log(a != b);

// // Greater than (>)
console.log(a > b);

// // Greater than or equal (>=)
console.log(a >= b);

// // Less than (<)
console.log(a < b);

// // Less than or equal (<=)
console.log(a <= b);
// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

var a = 30;
var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

console.log(!((a>0) || (b<0)));
console.log(!true);

// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


console.log("Hello World");

console.log("hello " +  "world");

var myName = "vinod";

console.log(myName + " thapa");
console.log(myName + " bahadur");
console.log(myName + " bahadur Thapa");
console.log(true + false);
var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));
var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));
var myPhoneNumber = 9876543210;
var myName = "thapa technical";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));
if(isNaN(myName)){
console.log("plz enter valid phone no");
}
console.log(isNaN(NaN));
var x = 5; 
var y = 6;

console.log("is both the x and y are equal or not" + x == y );
//I will tell you when we will see es6
console.log(`Is both the x and y are equal : ${x == y}`);
x=x+y;
y=x-y;
x=x-y;
console.log(x+" "+y);
function sum(a,b){
var total = a+b;
console.log(total);
return total;
}
sum();
sum(20,30);
sum(50,50);
sum(5,6);
var funExp = sum(5,15);
console.log(funExp);
// var myName = "thapa technical";
//console.log(myName)
//myName = "vinod thapa";
console.log(myName)
let myName1 = "thapa technical";
console.log(myName1)
myName2 = "vinod thapa";
console.log(myName2);


// const myName = "thapa technical";
// console.log(myName);

// myName = "vinod thapa";
// console.log(myName);



function biodata() {
const myFirstName = "Vinod";
console.log(myFirstName)
if(true){
let myLastName = "thapa";

console.log('innerOuter ' + myLastName);
}

//console.log(myLastName);
}
biodata();
//const myBioData=['vinod','thapa',26];
//let myFName=myBioData[0];
//let myLName=myBioData[1];
//let myAge=myBioData[2];
//console.log(myFName);
//let [myFName,myLName,myAge,myDegree="MCS"]=myBioData;
//console.log(myDegree)
const myBioData={
    myFname : 'vinod',
    myLname : 'thapa',
    myAge : 26
}

let myname1=myBioData.myAge;
console.log(myname1);