let sumNumbers = 0;
for( let i= 1 ; i<20 ; i++){
    if((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)){
        console.log(i);
        sumNumbers += i;
        }
        }
console.log(sumNumbers);

S=  [2,1,6,4,-7];
newArr = [];
for(let j = S.length-1; j >= 0; j--){
    newArr.push(S[j]);
}
console.log(newArr);




let arrNum= []
for (let i = 1; i < 136; i++) {
    arrNum.push(i);
    for(let j = 0; j < arrNum.length; j++){
            arrNum[j] % 3 === 0? arrNum[j] = 'Fizz':
            arrNum[j] % 5 === 0?arrNum[j] = 'Buzz':
            arrNum[j] % 3 === 0 && arrNum[j] % 5 === 0?arrNum[j] = 'FizzBuzz'
    : arrNum[j]
        };console.log(arrNum)
}
    

    