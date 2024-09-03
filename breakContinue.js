// Break

let n = 60;

while(n > 25){
    if(n < 55){
        break;
    }
    console.log(n);
    n--;
}

// Continue

for(let n = 0; n < 16; n++){
    if(n % 2 === 0){
        continue;
    }
    console.log(n);
}

let num = 0;

while(num < 60){
    num++;
    if(num % 2 !== 0){
        continue;
    }
    console.log(num);
}