const prompt=require("prompt-sync")(); 
let num=[,23,45,4,4,67,89,];
//for of loop
for(let number of num)
{
let index=num.indexOf(number);
console.log(num);
console.log(index);

}
//for in loop
const person = {fname:"John", lname:"Doe", age:25, fname:"asad"}; 
let out="";
for(let s in person)  // "s" is a key
{
    console.log(s);        // printing just keys i.e fname,lanme,age etc
    console.log(person[s]);  //printing values stored in an array using key 
    //out += person[s]  + "";


}
console.log(out);

//fizz buzz game using loop
const count=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(let i=0; i<count.length; i++)
{
    if((count[i]% 5==0) && (count[i]% 3==0))
    {             
        console.log("FIZZ BUZZ"+count[i]);
    }
    
   else if(count[i]%3==0)
    {             
        console.log("FIZZ"+count[i]);
    }
    else if(count[i]%5==0)
    {             
        console.log("BUZZ"+count[i]);
    } 

    
    else{
        console.log("---");
    }    
}
//code for encryption
let str=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// encryptor
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let plain_text="jul jnf gur zngu obbx fnq? orpnhft vg unq gbb znal ceboyrzf";


let key =4;
let actual_key;
for(let i=0;i<key.length; i++)
{
    for(let k=1; k<27; k++)           //finding the key
    {
        if(key[i]==k)
        {
             actual_key=k;
             console.log(actual_key);
        }
    }
}

let encoded = "";
for (let letter of plain_text) {
    position = (alphabet.indexOf(letter) + key+26) % 26;
    encoded += alphabet[position];
}
console.log(`encrypted text: ${encoded}`);
// decryption
//let keyy=1;
let decoded = "";
for (let letter of encoded) {
    position = (alphabet.indexOf(letter) - key+26) % 26;
    decoded += alphabet[position];
}
console.log(`decrypt text: ${decoded}`);







