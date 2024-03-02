let lastname='  hello bababr    '
console.log(typeof lastname);
let firstname=new String("Piyush")


console.log(firstname);
console.log(typeof firstname);


console.log(lastname.length);
console.log(lastname[1]);
console.log(lastname.includes('hello'));
console.log(lastname.endsWith('sh'));

console.log(lastname.toUpperCase())  ;

console.log(lastname.trim());

let message="This is my first message"
let words=message.split(' ');
console.log(words);


console.log(message.replace('first','second'));  

let message1="This is \n my \n second message"
console.log(message1);

let message2=`
Hello oppurtunity and regards
myy second hello${firstname}
message
1`
console.log(message2);




let date=new Date(1998,12,5);
console.log(date);

let date2=new Date('june 20 1998 07:15')
console.log(date2);

//Arrays
let arr=[10,20,30,40,50,"piyush","agrawal","hi","bye"]
console.log(arr);

let arr2=["piyush","Agrawal"]
arr2.push("1901292067")
console.log(arr2);

arr2.unshift("Hii")
console.log(arr2);

arr.splice(2,0,'a','b','c','d','e')
console.log(arr);

//Searching

console.log(arr.indexOf(20));



console.log(arr.includes(7));


console.log(arr.includes(50));

let courses=[
{no:1,naam:"piyush"},
{no:2,naam:"Agrawal"}
];
console.log(courses);
console.log(courses.indexOf({no:2,naam:"Agrawal"}));
//In Objects We use CallBack Functions
let coursse=courses.find(function(course)
{
    return course.naam=="piyush"
}
)
console.log(coursse);

//Arrow Function

let coursse1=courses.find(course=>

     course.naam=="piyush"

)
console.log(coursse1);



//Splice

let numbers3=[10,20,30,40,50,60,70,80,90,100]
console.log(numbers3.splice(2,1));



//Emptying array
let n=[1,2,3,4,5]
n2=n
n.length=0
n=[]
console.log(n2);
console.log(n.splice(0,n.length));



//POP METHOD


//Combining and slicing array




let first=[1,2,3]
let second=[4,5,6]
console.log(first.concat(second));


let marks=[10,20,30,40,50,60,70,80,90,100]
let slice=marks.slice();
console.log(slice);

//sperad operator


let z=[1,2,3]
let x=[5,6,7,8,9]
let c=[...z,...x]
console.log(c);

//copy kaise kroo??



let another=[...c]
console.log(another);

//Iterating 


let ar1=[10,20,30,40,50,60,70,80,90,100]

for(let value of ar1)
{
    console.log(value);
}


ar1.forEach(n=>console.log(n));



let t=[10,20,30,40,50,60,70,80,90,100]
const joined=t.join(',')
console.log(joined);

//SPLIT METHOD

let message4="This is my new message"
let parts=message4.split(' ')
console.log(parts);

let joined1=parts.join('_')
console.log(joined1);




//Filtering in Arrays





let aa=[10,20,30,-40,50,-60]
let filtered=aa.filter(x=> x>0);
console.log(filtered);


//MAPPING


let v=[7,8,9,10]
let items=v.map(function(value)
{
  return 'student-no'+value
})

console.log(items);


let mp=[1,2,-6,8,-9,11]
let ft=mp.filter(x=>x>0);


let items1=ft.map(function(num)
{
    return {value:num}
}
)
console.log(items1);