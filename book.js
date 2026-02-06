// console.log('hello world');
function multify(num,num1){
    let result = num*num1;
    return result;
}
// console.log(multify(2,3));
function kilo(getelement){
    let kilokelori = 860;
    let result = getelement*kilokelori;
    return result;
}
// let result = kilo(5);
// console.log(result);
function checktax(incomeamount){
    if(incomeamount<=50000){
        return 10;
    }
    else if(incomeamount>=50001&&incomeamount<=100000){
        return 20;
    }
    else if(incomeamount>=100001&&incomeamount<=200000){
        return 30;
    }
    else if(incomeamount>=200001){
        return 40;
    }
}
// let result = checktax(560000);
// console.log(result);
function average(arr){
    let total = 0;
    let averagenum = [];
    for(let number of arr){
        if(number%2===0){
            total+=number;
            averagenum.push(number);

        }
        else{
            continue;
        }

    }
    let average = total/averagenum.length;
    return average;
}
// let result = average([23,65,41,25,36,96,85,47,65,98,87]);
// console.log(result);
function chekodd(arr){
    let result = [];
    for (let number of arr){
        if(number%2!==0){
            let multify = number*2;
            result.push(multify);
        }
    }
    return result;
}
// let result = chekodd([3,2,4,5,1,7,8,2,9]);
// console.log(result);
function checkduplicate(arr){
    let duplicatearr = [];
    for(let number of arr){
        if(duplicatearr.includes(number)){
            continue;
        }
        else{
            duplicatearr.push(number);
        }
    }
return duplicatearr;
}
// let result = checkduplicate([2,65,3,65,2,4,5,6,8,5,4,2]);
// console.log(result);
