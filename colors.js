// Input:  prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
//         items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

// Output:{
//   total: 376,
//   itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
// }

function getresult (element,element2 ){
    let tota = 0;
    let result = Object.values(element);
    for(let num of result){
        tota=num+tota;
    }

    let items = {};
    for(let item of element2){
        if(items.hasOwnProperty(item)){
            items[item]++;
        }else{
            items[item]=1;
        }
    }

    return {
        total : tota,
        itemCount:items
    };
}
// let result = getresult({ rice: 70, oil: 180, egg: 12, sugar: 90 },["egg", "egg", "rice", "oil", "egg", "sugar"]);
// console.log(result);
// Input:
//  [5, 3, 5, 2, 3, 9, 2, 7]
// Output:
// [5, 3, 2, 9, 7]
function checkduplicate(numbers){
    let notduplicate = [];
    let i = 0;
    while(i<numbers.length){
        if(!notduplicate.includes(numbers[i])){
          notduplicate.push(numbers[i]);
        }
        
        i++;
    }
    return notduplicate;
}
// let result = checkduplicate( [5, 3, 5, 2, 3, 9, 2, 7]);
// console.log(result);
// Input:
//  "JavaScript is fun to learn"
// Output:
// { characters: 22, words: 5, vowels: 8, consonants: 14 }

function countthem(text){
    let character = 0;
    let lower = text.toLowerCase();
    for(let i = 0 ;i<text.length;i++){
        if( lower[i]>="a" && lower[i]<="z"  ){
            character++;
        }
    }
    let word = 0;
    let splittext = text.split(" ");
    for(let i = 0 ;i<splittext.length;i++){
        word++;

    }
    let vowel = 0;
    for(let i = 0 ;i<text.length;i++){
        if( lower[i]==="a"|| lower[i]==="e"|| lower[i]==="i"|| lower[i]==="o" || lower[i]==="u" ){
            vowel++;
        }
    }
    let consonant = 0;
    for(let i = 0 ;i<lower.length;i++){
        if( lower[i]>="a" && lower[i]<="z"&&lower[i]!=="a"&& lower[i]!=="e"&& lower[i]!=="i"&& lower[i]!=="o" && lower[i]!=="u" ){
            consonant++;
        }
    }
   
    return {
        character : character,
        words:word,
        Vowels: vowel,
        consonants:consonant
    }
}
// let result = countthem("JavaScript is fun to learn");
// console.log(result);
function findbigone(num1,num2){
    let result = Math.max(num1,num2);
    return result;
}
// console.log(findbigone(12,50));
function reversetext(text){
    let result = "";
  for(let i = text.length-1 ;i>=0 ;i--){
    result+=text[i];
  }
   return result;
}
// let result = reversetext('shifat if good');
// console.log(result);
function checkspalindrome(text,text2){
    let reverse = "";
    let reverse2= "";
    let result = false;
     let result2 = false;
    for(let i = text.length-1;i>=0;i--){
        reverse+=text[i];
    }
    if(text===reverse){
        result = true;
    }
    for(let i = text2.length-1;i>=0;i--){
        reverse2+=text2[i];
    }
    if(text2===reverse2){
         result2 = true;
    }
    
   return[
    result,result2
   ]
}
// let result = checkspalindrome("madam","level");
// console.log(result);
