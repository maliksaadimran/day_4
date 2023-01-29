const prompt=require("prompt-sync")(); 
// for loops 
let data=[0,2,3,4,67,35,786,89,90,97,98,99,908,9765];
let even;
var sum=0;
//counter initialize; condition; counter manage;
for(let i=0; i<data.length; i++)
{
    if(data[i]%2==0)   //FINDING EVEN NUMBERS IN ARRAY
    {
        sum=sum + data[i];                      //sum of all even numbers
        console.log("EVEN NUMBER : " + data[i]); // printing even number
        
    }
 

}
console.log("SUM OF ALL EVEN NUMBERS : "+sum);// printing sum off all even numbers

//for of loop
let num=[0,14,15,14,17,18,20,19,17,13,11,111];
for(let char of num)
{
    if(char%2==0)                           //finding even numbers using for of loop
    {
        console.log(char);   
    }
    }
    
    let key=2;

    let str=prompt("ENTER YOUR STRING PLEASE:");
    for(a=0;a<str.length;a++)
    {
        let asc=str.charCodeAt(a)+5;
        console.log(asc);
    }
    
