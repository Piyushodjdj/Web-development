//Functionn

//Block of code

//Block of code that fulfil a specific task 

//Function is kind of sequece to do some specific taask


let a=function sqaure(x)
{
    return x*x
}

console.log(a(4));
console.log(a(10));
console.log(a(100));


//Function defn

run();//Hoisting
function run()
{
    console.log("running");
}



let stand=function()
{
    console.log("standing");
}


stand();
let jump=stand
jump();
let stand1=stand
stand1();


//Anonymous

let stand2=function()
{
    console.log("Biking");
}

stand2();


let x=1;
x='a';
console.log(x);

function sum(a,b)
{
    console.log(arguments);
    return a+b;
}

console.log(sum(8,7));

console.log(sum(1,2,3,4,5));


//Using for of loop

function sum(a,b)
{
    let total=0;
    for(value of arguments)
    {
        total=total+value;
    }
   console.log(total);
}

sum(1,2,3,4,5,6,7,8,9,10);



//Rest Operators
function sum1(num,...arg)
{
    console.log(arg);

}

sum1(1,2,3,4,5,6,7,8,9,10)

//Default parameter

function intrest(p,r=1,t=10)
{
    return (p*r*t)/100
}

console.log(intrest(1000,10,undefined));



//Getter to Get the Value and Setter to Set the Value





let person=
{
name:"Piyush",
title:"Agrawal"
};

console.log(person);



function Fullname()
{

return `${person.name} ${person.title}`


}

console.log(Fullname());



//Getter or Setter

//getter -> to get the values
//setetr-> to set the values


let person1 = {
    name: "Piyush",
    title: "Agrawal",
    get Fullname() {
      return `${this.name} ${this.title}`;
    },
    set Fullname(value) {
      let parts = value.split(' ');
      this.name = parts[0];
      this.title = parts[1];
    }
  };
  
  console.log(person1.Fullname);  // Output: Piyush Agrawal
  person1.Fullname = "Rahul Kumar";
  console.log(person1.Fullname);  // Output: Rahul Kumar
  
  //Try and error






  //Scope



{
var q=5;
console.log(q);
}

console.log(q);



for(var i=0;i<10;i++)
{

}

console.log(i);



let arr=[1,2,3,4,5]

// let total=0;
// for(let value of arr)
// {
//     total=total+value
// }
// console.log(total);


let ts=arr.reduce((accumlator,currentvalue)=>accumlator+currentvalue,0);
console.log(ts);