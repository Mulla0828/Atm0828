// alert("connected");
// var name= prompt("what is your name?");
// document.write("Hello," + name );
// var age= prompt("How old are you?");
//  document.write(" You are " + age + ("years old"));
// console.log("Mulla is the Main Man");

//  var mystring1 = "I am learning ";
//  var mystring2 = "Javascript with LCI Academy";
//  document.write(mystring1 + mystring2);

// var x = "32", y = 32, z = x + y;
// console.log(z);
// var animal = "Lion";

// var x=2;
// var y=2;
// var z=3;
// alert(x==y);
// alert(x==z);

// var x;
// alert(x);

// var word = "Missisippi";
// var x = word.length;
// alert(x); 

// var fruit = "berry, mango, pear, apple";
// var x = fruit.slice (19,25);
// alert(x)

// var text = "I am learning JS";
// var x = text.replace ("learning ", "writting");
// alert(x);

// var x ="         hello      ";
// alert(x.trim().length);
// alert(x.length());

// var animal = ['cat', 'dog', 'cow', 'fish'];
// // animal.push('duck');
// // alert(animal.sort());
// //document.getElementById('demo') .innerHTML = animal[2];
// animal.pop(2);
// alert(animal);

// var age= prompt("How old are you?");

// if(age < 18) {
//     alert('Only 18 above is allowed');
// }else{
//     alert('Welcome to Rock Ass club');
// };


// var w= prompt('What is your weight?');
// var h= prompt('What is your height?');


// var bmi= w / (h * h);
// alert(bmi);
// if(bmi < 18.5){
//     alert("your bmi is " + bmi + " kg/m" + ' and you are underweight');
// }else if((bmi >= 18.5) && (bmi <= 24.9)) {
//     alert("your bmi is " + bmi + " kg/m" + ' and you are healthy');
// }else if((bmi >= 25) && (bmi <= 30)){
//     alert("your bmi is " + bmi + " kg/m" + ' and you are overweigth');
// }else ((bmi > 30){
//     alert("your bmi is " + bmi + " kg/m" + ' and you are obese');

// var day = prompt( "days");
// if(day == 1 ) {
//     alert('Sunday');
// }
// else if (day == 2){
//     alert('Monday');
// }
// else if (day == 3){
//     alert('Tuesday');
// }
// else if (day == 4){
//     alert('Wednessday');
// }
// else if (day == 5){
//     alert('Thursday');
// }
// else if (day == 6){
//     alert('Friday');
// }
// else if (day == 7){
//     alert('Saturday');
// }
// else{
//     alert('Invalid number');
// }

// var year = prompt(' Display Leap year');
// if (year == 2000){
//     alert('Leap year');
// }
// else if (year == 2004){
//     alert('Leap year');
// }
// else if (year == 2008){
//     alert('Leap year');
// }
// else if (year == 2012){
//     alert('Leap year');
// }
// else if (year == 2016){
//     alert('Leap year');
// }
// else {
//     alert('Invalid Leap year');
    
// }


        
// program to check leap year
// function checkLeapYear(year) {

//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         alert(year + ' is a leap year');
//     } else {
//         alert(year + ' is not a leap year');
//     }
// }
// var year = prompt('Enter a year:');

// checkLeapYear(year);

// var num = prompt('Enter a number');

// if(num % 2 == 0){
//     alert('even number');
// }else{
//     alert('odd number');
// }
// var x = 3;
// switch(x){
//         case 1:
//             document.write(x);
//             break;

//         case 2:
//             document.write(x+2);
//             break;

//         default:
//             document.write(x+5); 
//             break;
// }
// function arrow(){
//     var name = "ehis";
//     var age = 24;
//     document.write(name + age);
// }

// arrow();
// function sayHello(name){
//     alert("Hi, " + name);
// }
// sayHello('Mulla');
// sayHello('Sarah');
// sayHello('John');
alert("Welcome to LCI ATM Center");
var pin =prompt("Kindly enter pin");

function display(){
   var x = prompt("SELECT AN OPTION \n1. Withdraw \n2. Transfer \n3. Airtime Recharge");
   if(x==1){
           withdraw();
   }else if(x==2){
       transfer();
   }else if(x==3){
       airtime();
   }else{
       alert("invalid option");
       display();
   }
}
display();

function transfer(){
   var bank = prompt("SELECT BANK TYPE\n 1. GTB \n 2. First Bank \n 3. UBA");
   if(bank==1 || bank==2 || bank ==3){
       var accountNumber =prompt("Enter account number");
       amount();

   }else{
       alert("invalid input");
       transfer();
   }
}

function amount(){
    var amt = prompt("SELECT AMOUNT \n 1. 1000 \n 2. 2000 \n 3. 5000 \n 4.10000");
    if (amt==1 || amt==2 || amt==3 || amt==4){
        alert("Processing ----");
        alert("Transfer Successful");
        alert("Thank you for banking with us");
    }else{
        alert("invalid input");
        amount();
    }
}
function recharge(){
    var charge = prompt("Enter Number");
    var network = prompt("SELECT AMOUNT \n 1. 200 \n 2. 500 \n 3. 1000");
    if (network==1 || network==3 || network==3 ){
        alert("Processing ----");
        alert("Transfer Successful");
        alert("Thank you for banking with us");
    }else{
        alert("invalid input");
        recharge();

    }

}
function withdraw(){
   var accountType = prompt("SELECT ACCOUNT TYPE\n 1. Current \n 2. Savings");
   if(accountType==1 || accountType==2){
       amount();

   }else{
       alert("invalid input");
       withdraw();
   }
}
function airtime(){
    var airtime = prompt("SELECT NETWORK \n 1. Glo \n 2. Airtel \n 3. MTN");
    if(airtime==1 || airtime==2 || airtime==3){
        recharge();
    }else{
        alert("invlid input");
        airtime();
    }
}

