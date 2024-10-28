
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}


var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's a cool day.");
}



var number = 7;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


var score = 60;
if (score >= 50) {
  console.log("You passed the test!");
} else {
  console.log("You did not pass the test.");
}


var num = -10;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}


var totalAmount = 120;
var discount = totalAmount > 100 ? 10 : 0;
console.log("Discount applied:", discount);



var value = 20;
if (value % 5 === 0) {
  console.log("The value is a multiple of 5.");
} else {
  console.log("The value is not a multiple of 5.");
}


var driverAge = 17;
if (driverAge >= 18) {
  console.log("Eligible to drive.");
} else {
  console.log("Not eligible to drive.");
}


var age = 45;
if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}



var stock = 5;
var purchaseQuantity = 3;
if (purchaseQuantity <= stock) {
  console.log("Order placed successfully.");
} else {
  console.log("Not enough stock available.");
}






var price = 200;
var taxRate = 0.08;
var totalCost = price + (price * taxRate);
console.log("Total Cost:", totalCost);


var marks = 78;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}


var personAge = 21;
var status = personAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status);


var hasID = true;
var hasTicket = false;
if (hasID && hasTicket) {
  console.log("Entry allowed.");
} else {
  console.log("Entry not allowed.");
}


var weight = 70; // in kg
var height = 1.75; // in meters
var bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));



var billAmount = 250;
var serviceCharge = billAmount >= 200 ? billAmount * 0.1 : billAmount * 0.05;
console.log("Service Charge:", serviceCharge);



var passwordLength = 5;
if (passwordLength < 8 || passwordLength > 15) {
  console.log("Password length is not acceptable.");
} else {
  console.log("Password length is acceptable.");
}



var basePrice = 150;
var discount = basePrice > 100 ? 20 : 10;
var finalPrice = basePrice - discount;
console.log("Final Price:", finalPrice);



var year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}



var age = 20;
if (age >= 18) {
  if (age >= 21) {
    console.log("Eligible for driving and drinking.");
  } else {
    console.log("Eligible for driving only.");
  }
} else {
  console.log("Not eligible for driving or drinking.");
}



