//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
//subtract the value of the first element in the array from the value in the last element of the array 
let result = ages[ages.length -1] - ages[0];
console.log(result); // 90
//Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(38);
console.log("new age array is", ages);
result = ages[ages.length -1] - ages[0];
console.log("subtracted value is",result);
//Use a loop to iterate through the array.
for ( let i = 0; i < ages.length; i++); 
console.log("loop ages is",ages);
//calculate the average age.
 let sum = 0;
 let average = sum / ages;
 console.log("average ages",average);

 // Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
 let names =["Sam","Tommy", "Tim", "Sally", "Buck", "Bob"];
 console.log(names);
 //Use a loop to iterate through the array. 
 for ( let i = 0; i <names.length; i++); 
console.log("loop names are",names);

 //and calculate the average number of letters per name. 
 let letters = 0;
 for (let i=0; i<names.length; i++){
    letters += names[i].length;
 }
 let averageletters = letters / names.length;
 console.log("avarage number of letters per name is ",averageletters);

 //Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
  for (let i =0; i<names.length; i++);
  console.log("second loop names are",names);

 
 //concatenate all the names together, separated by spaces.
 concatenateNames = ["Sam",'Tommy',"Tim","Sally","Buck","Bob"];
 console.log("concatenated names",concatenateNames);
 //3.How do you access the last element of any array?
 // we access the last element of an array by using the last index in an array -1.
 //4. How do you access the first element of any array?
 // We access the first element of an array by use of the index '0'.
 // 5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [names];
for (let i= 0; i < names.Length; i++);{
    nameLengths.push(names.length);

}
console.log("Lenght of names is",nameLengths);
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//let sum = 0;
//for (i=0, i<nameLengths.length; i++){
    //sum += nameLengths;
//}
 
 //console.log(sum);
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
 
function repeatWord(word, n) {
let result = 'Hello';
for (let i = 0; i < n; i++);{
    result += n;
}
return result;
}
console.log("repeat",repeatWord('Hello',3));
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  
function fullNames(firstName,lastName){
    return `${firstName} ${lastName}`;
}
console.log("Full Names;",fullNames('Mary', 'Joe'));
//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(numbers){
    let sum = 0;
    for (let i =0; i < numbers.length; i++){
    
    }
    return sum > 100;
}

console.log("is the sum greater than 100?",sumGreaterThan100([10,20,30]));

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array
function allAverage (numbers){
    sum =0;
    for (let i =0; i < numbers.length; i++){

    }
    return sum / numbers.length;
}
console.log(allAverage([1,2,3,4,5,6,7,8,]));
// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array

function compareAverages(arr1, arr2) {
    const avg1 = arr1.reduce((sum, num) => sum + num) / arr1.length;
    const avg2 = arr2.reduce((sum, num) => sum + num) / arr2.length;
    return avg1 > avg2;
  }
  
  console.log("The average is; ",compareAverages([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); 

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
      return true;
    } else {
      return false;
    }
  }
 console.log(willBuyDrink);  

 //13.	Create a function of your own that solves a problem.  
 //In comments, write what the function does and why you created it.
 
function triangleArea(base, height) {
    let area = (base * height) / 2;
    return area;
  }
 // This function takes two parameters "base" and "height", which are the base and heaight of a triangle.
 // The function then calculates thr area of the triangle using the formula area = (base*height) /2;
 //I created this function because my niece in high school had a mathemetical assignment of this kind.
  





