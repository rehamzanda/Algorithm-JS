// 1. Print 1 - 135

// Write a program using JavaScript that will print all the numbers from 1 to 135.
// The program should use a for loop to iterate over the numbers and print each number.
for (let i = 1; i <= 135; i++) {
            console.log(i); }


// 2. Print Odd Numbers 1 - 135

// Write a program using JavaScript that will print all the odd numbers from 1 to 135.



// to print odd numbers we iterare and make the counter loop only for odd numbers using i+2 to skip even numbers
for(i=1; i<136; i= i+2) {
    console.log(i);}

// 3. Sum of Printed Numbers

// Write a program that will print all the numbers from 1 to 135 AND the sum 
// of the numbers that have been printed so far. Your output should look similar to this:

// define a var to store the sum calculation of nubmers inside it
// first we will creat the range of numbers 1-135 using for loop
// inside for loop we will print the number and add it to the sum variable
// after the loop we will print the sum variable
let sum = 0;
for(i=0; i<136; i++) {
    console.log(i);
    sum += i;
    console.log(`Number is: ${i} Sum: ${sum}`);
}

// 4. Print the elements of an array

// Given an array X = [1,4,2,12], write a program that will iterate through
//  the array and print all numbers on the screen. Your program should work with arrays of all sizes.

X = [1,4,2,12]
//  creat a fun tion to print the array elements
let printArraysNum = (array) => {
    // use for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        //  print the array elements
        console.log(array[i]);}
}
// call the function with the array X
printArraysNum(X); // Output: 1, 4


// 5. Find Max
// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.


Y = [2,-3,-1,4,0]
// give the max variable the initate value of the first element of the array to start the comparion
let max = Y[0]
// loop through the array to find the max value
for (let i = 1; i < Y.length; i++) {
    // check if the next element is bigger than the max variable
    if (Y[i] > max)
        // if yes replace the max value with the next element value and make the max value , the procese will repeat until the end of the array
         { max= Y[i] }}
        //   after the loop print the max value
    console.log(max); // Output: 2


// 6. Get Average

// Given an array X, write a program that will return
//  the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

    Z = [2,1,3] 
    // create a fun tion to get the average of the array
let averageValue = (array) => {
    //  define a variable to store the sum of the array elements values
    let sum = 0;
    // loop through the array and add each element to the sum variable
    for (let i = 0; i < array.length; i++) {
        sum += array[i];}
        // return the sum divided by the array length
        return sum / array.length;
    }
// call the function with the array Z and print the result
console.log(averageValue(Z))
    
// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers 
// and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be


let Arr = [2,-1,4,-10];
let EleminateNegatives= (array) => {
// itrate inside the array to check each element of the array using for loop
for(let i=0 ; i<array.length ; i++)
    {
// and check if the elements of an array negstive number? then replace it with 0
if(array[i]< 0 ){
    array[i]=0
}
// print the array after replacing the negative number with 0
 } return array;
}

console.log(EleminateNegatives(Arr));

// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values into strings.

// For example, For array 
const A= [1,-4,0,-1]  
// The output should be [1,'Turing,0,'Turing'].

//  create a fun that take an array of number and return an array of string and number
 let NumberToString = (array) => {
    // itrate inside the array to check each element of the array using for loop
    for (let i = 0; i < array.length; i++) {
    // and check if the elements of an array negstive number? then replace it with string
        if (array[i] < 0) {
            array[i] = 'Turing'  } }
            // return the array after replacing the negative number with 0

            return array; }
// print the array 
console.log(NumberToString(A));


