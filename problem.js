console.log('hello world');
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
function findminnumber(numbers){
    let lowest = numbers[0];
    for(let i = 1;i<=numbers.length;i++){
        if(numbers[i]>lowest){
            lowest = numbers[i];
        }
    }
    return lowest;
    }

//  const result = findminnumber([167, 190, 120, 165, 137]);
//  console.log(result);
 

// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findsmallname(names){
    let low = names[0];
    for(let i = 1 ;i<names.length;i++){
        if(low.length>names[i].length){
            low = names[i];
        }
       
}
        return low;
    }
    
// let result = findsmallname(['rahim', 'robin', 'rafi', 'ron', 'rashed']);

// console.log(result);
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(number){
    let total  = 0;
    let value = Object.values(number);
    for(let num of value){
        total=total+ num;

    }
    return total;

}
// let result = calculateElectronicsBudget({
//     laptop:35000,
//     tablet:15000,
//     mobile:20000
// })
// console.log(result);
// const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];
function findaverage(element){
    let total= 0;
    for(let i= 0;i<element.length;i++){
        total= element[i].price+total;
    }
    let average = total/element.length;
    let result= Math.round(average);
    return result;
}
// let result = findaverage([
//             { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 }
//     ]);
//     console.log(result);

// employees = [
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//         ];
function getsalary(data){
    let total= 0;
    let i = 0;
    while(i<data.length){
       let salary= data[i].starting+data[i].experience*data[i].increment;
        total=salary+total;
         i++;
    }
    return total;
}
// let result = getsalary([
//             { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//             { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//             { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//             { name: "shohel", experience: 0, starting: 29000, increment: 4000 }]);
//             console.log(result);

// Input: "I love JS and I love coding and JS is fun"
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

function countword(element){
    let words = element.split(" ");
    // console.log(words);
    let wordscount = {};
    for(let word of words){
        let lowercase = word.toLowerCase();
        if(wordscount.hasOwnProperty(lowercase)){
            wordscount[lowercase]++;
        }
        else{
            wordscount[lowercase]=1;
        }
    }
    return wordscount;
}
// let result = countword("I love JS and I love coding and JS is fun and Fun");
// console.log(result);
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }

// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }
// function higest(element){
//     total = 0;


// }

// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }
function validcheck(password){
    let reasons = [];
    if(password.length<8){
        reasons.push("it will be a minimum 8 character");
    }
   let hasnumber = false;
   let hasuppercase = false;
   let hasgap = false;
   for(let i =0;i<password.length;i++){
    let indexnum = password[i];
    if( indexnum>=" 1" && indexnum<="9" ){
        hasnumber = true;
    }
    if(indexnum>="A" && indexnum<="Z"){
        hasuppercase=true;
    }
     if(indexnum===" "){
        hasgap= true;
    }
   }
   if(hasnumber==false){
    reasons.push("give me a number");
   }
    if(hasuppercase==false){
    reasons.push('give  a uppercase letter');
   }
    if(hasgap==true){
    reasons.push('plz delete the gap');
   }
   let balid = true;
   if(reasons.length===0){
    balid = true;
   }
   else{
    balid = false;
   }
return {
    valid : balid ,
    reason:  reasons 

}
}
 let result = validcheck( "Hellow1ord");
 console.log(result);

