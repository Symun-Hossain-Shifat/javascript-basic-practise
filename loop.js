// let day = 1 ;
// while(day<=60){
//     console.log('i will invest atleast six hour in next sixty day',day);
//     day++;
// 
// odd number
// let total = 0;
// let odd = 91 ;
// while(odd<121){
//     console.log(odd);
//     odd+=2;
//     total = odd +total ;
    
// }
// console.log(total);
// let total = 0;
// for(let even = 52 ;even<85 ; even+=2 ){
//     console.log(even);
//     total=even+total;
//     console.log(total);
// }
// let num = 64;
// while(num>45){
//     console.log(num);
//     num--;
// }
// let nam = [32,65,12,36,25,1,3,30] ;
// for(const num of nam){
// console.log(num);

// }

// for(let num = 55; num<=85 ; num+=2 ){
   
//     if(num%5===0){
//         continue;
//     }
//      console.log(num);
// }
// let num = 1;
// while(num<=200){
//      if(num===50){
//         break;
//     }
//     console.log(num);
//     num++;
   
    
// }
// let total= 0 ;
// let num = 1;
// while(num<200){
//      total=total + num;
//      if(total>=100){
//         break;
//     }
//     num++;
// }
//  console.log(total);
//  for(let i = 0 ; i<30 ; i++){
//     if(i%2==0 || i%5==0){
//         console.log(i);
//     }
//  }
// let nam =0;
// while(nam<30){
//     nam++;
//     if(nam%5==0 && nam%10==0 ){
//         console.log(nam);
//     }
    
// }
let sum = 0;
let num = 1;
while(num<100){
    num++;
    if(num % 9 ==0 || num % 6 ==0){
        console.log(num);

    }
    sum = num + sum ;
    console.log(sum);
}
