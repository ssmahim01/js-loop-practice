const cities = ["dhaka", "chottogram", "sylhet", "rajshahi", "barishal"];

for(const city of cities){
    console.log(city);
    console.log('I would like to go');
}

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

let sum = 0;

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i);
        sum = sum + i;
        console.log('Total : ' , sum);
    }
}

console.log('The sum of the numbers : ', sum);