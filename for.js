// For loop

for(let i = 0; i < 5; i+=3){
    console.log(i);
}

const array = [1, 2, 3, 4, 5, 6, 7];

for(let i = 1; i < array.length; i++){
    if(i == 5){
        continue;
    }
    console.log(array[i]);
}