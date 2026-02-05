console.log("Hello world")
var money=100;
console.log(money);
var price=200;
var name = "saymon hossain shifat";
console.log(price + name)
var name =23;
name+=10
console.log(typeof name );
var roll = 20;
console.log(typeof roll);

console.log(name+roll);
console.log(name*roll);
console.log(roll-name);
console.log(name/roll);
console.log(name%roll);


var burger = 400 ;
if( burger>500 ){
    console.log("give him a free coke");
}
else{
    console.log("take a coke and give 30 tk");
}
var bmi = 27.3 ;
if (bmi<18.5){
    console.log("you are underweight");
}
else if ( bmi>= 18.5 && bmi <= 24.9){
    console.log('you are normal ');
}
else if (bmi>= 25 && bmi<=29.5){
    console.log('you are overweight');
}
else{
    console.log('you are obese');
}
samia = 45;
if(samia>=80){
    console.log('A+');
}
else if(samia<80 && samia>=60){
    console.log('A');
}
else if(samia<60 && samia >= 50){
    console.log("B");
}
else if(samia < 50 && samia >= 40){
    console.log("C");
}
else if (samia<40 && samia>= 33){
    console.log("D");
}
else{
    console.log("F")
}
var score = 75 ;
if(score>80){
    console.log("Go for launch");
}
else if (score<80 && score >= 60){
    console.log('good luck next time')
}
else if (score<60 && score>=40){
    console.log('Meesege unseen');
}
else if (score<40){
    console.log("go to hell");
}
else{
    console.log("block friend");
}
var num1 = 25;
var num2 = 23 ;
(num1>num2)? console.log(num1*2)  : console.log(num1+num2);

let mymoney = 50 ;
let friendmoney = "50";
console.log(mymoney==friendmoney);
console.log(mymoney===friendmoney);
let money = 4500 ;
if(money>3000){
       let discount = 4500*5/100;
       let price = money - discount;

    console.log( price);
}
 else if(money>6000){
    let discount = 4500*15/100 ;
    let price = money - discount ;
    console.log(price);
}
else{
    console.log(money);
}
const age = 6;
if (age<12){
    console.log("free food");
}
else if(age>60){
    console.log("give him 50% discount")
}
else {
    console.log("give full price")
}
const cashback = 4001;
cashback>3000 ? console.log(500) : console.log(0)
const sub = ["math", "english", "bangla", "accounting"]
console.log(sub);
sub.push("finance");
console.log(sub);
sub.pop();
console.log(sub);
sub.unshift('kalam');
console.log(sub);
sub.shift();
console.log(sub);

console.log(sub.indexOf('bangla'));
console.log(sub.includes('bangla'));