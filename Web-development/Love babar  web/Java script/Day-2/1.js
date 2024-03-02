console.log("Chaliye shuru krte h");
let rectangle={
length:1,
breadth:2,
draw:function()
{
    console.log("drawing rectangle");
}

};

let rectangle1={
    length:1,
    breadth:2,
    draw:function()
    {
        console.log("drawing rectangle");
    }
    
    };

let rectangle2={
length:1,
breadth:2,
draw:function()
{
console.log("drawing rectangle");
} 
 };  
//Function Factory


function createRectangle(l,b)
{
return rectangle={
        length:l,
        breadth:b,
        draw:function()
        {
        console.log("drawing rectangle");
        } 
         };  
}






let rect1=createRectangle(2,3)
console.log(rect1.length);
console.log(rect1.breadth);



let rect2=createRectangle(4,5)
console.log(rect2.length);
console.log(rect2.breadth);



//Constructor

function Rectangle(length,breadth)
{
    this.length=length,
    this.breadth=breadth,
    this.draw=function()
    {
        console.log("hi");
    }
}

//Object Creation

let rectangleobject=new Rectangle(4,6);
console.log(rectangleobject);

//Dynamic nature of Objects

rectangleobject.color='yellow'
console.log(rectangleobject);

delete(rectangleobject.color)
console.log(rectangleobject);


let Rectanglee1=new Function('length','breadth',`
 this.length=length,
this.breadth=breadth,
this.draw=function()
{
    console.log("hi");
}
`)


let rect=new Rectanglee1(10,20)
console.log(rect);
//Functions Are Objects


//Types in js


//Primitive Types



//Reference Type


let a={value:10}
let b=a;

a.value++;
b.value++;
console.log(a.value);
console.log(b.value);


//FOR_OF LOOPS

let ectangle=
{
    length:1,
    breadth:2
};

for(let key in ectangle)
{
    console.log(key,ectangle[key]);
}


//For-off loop

for(let key of Object.entries(ectangle))
{
    console.log(key);
}

//

if('color' in ectangle)
{
    console.log('present');
}
else 
{
    console.log('absent');
}


//object cloning


let src={val:10,b:20,c:30};







// let ds=Object.assign({ },src)
// console.log(ds);

let ds={...src}
console.log(ds);



