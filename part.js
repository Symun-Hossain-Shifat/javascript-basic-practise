console.log('hello world');
function tempareture (celcius){
    let result = celcius*3.11525;
    return result;
}
// let result = tempareture(23);
// console.log(result);
function find (num,num1){
    let count = [];
    for(const number of num){
        if(number===5){
count.push(number);
        }
    }
    let result = count.length;
    return result;

}
// let result = find([2,5,3,6,5,4,5,8],5);
// console.log(result);
function vowel ( text ){
    let count = 0;
    for(let i = 0 ;i<=text.length-1;i++){
        if(text[i]==="a"||text[i]==="e"||text[i]==='i'||text[i]==='o'||text[i]==='u'){
            count++;

        }
    }
    return count;

}
// let result = vowel("Bangladesh is my home country.i love my country very much so much from my life");
// console.log(result);
const number = [12,6,5,36,22,45,78,98,63];
// let result = Math.min(12,6,5,36,22,45,78,98,63);
// console.log(result);
let number2 = Math.max(12,6,5,36,22,45,78,98,63);
// console.log(number2);
let number3 = Math.round(12,6,5,36,22,45,78,98,63);
// console.log(number3);
// console.log(Math.PI);
let num = Math.abs(32-35);
// console.log(num);
let nim  = Math.floor(3245.656565);
// console.log(nim);
let nm  = Math.ceil(3245.656565);
// console.log(nm);
// console.log(Math.round(2.05));
// console.log(Math.ceil(2.30));
// console.log(Math.round(Math.random()*20));
let a = 32 ;
let  b = 65;
let t = a;
a= b;
b= t;
console.log(a,b);
// console.log()
function findnum(num){
    let count = [];
    for(const number of num){
        if(number%3!==0){
            count.push(number);
        }
    }
    return count;
}
// let result = findnum([3,6,12,1,5,51,64,15,27,33,39]);
// console.log(result);
function findthing (num){
    let count = [];
    for(let i = 0 ;i<=num.length-1;i++){
        if(num[i]>=1){
           count.push(num[i]);
        }
        
    }
    if(count.length===num.length){
        return ' positive';
    }
    else{
        return 'No result';
    }
}
// console.log(findthing([2,56,45,98,32]));
function get(minitue){
    let hour = Math.floor(minitue/60);
    let mini = (minitue/60)-hour;
   let result = ["Hour:",hour, "-------" , "Minitue:",mini];
   let total = result.join('');
   return total;
}
let result = get(62);
console.log(result);