//How to write Fast codee and Efficent one
//How to write speed of code
//How to Write Event loop
//Adding 100 para
let t1 =console.log(performance.now());
for(let i=0;i<100;i++)
{
    let element=document.createElement('p')
    element.textContent="This is new para"+i;
    document.body.appendChild(element);

}
let t2=console.log(performance.now());
//optimising a it
let t3=console.log(performance.now());
let myDiv=document.createElement('div');
for(let i=0;i<100;i++)
{
    let element=document.createElement('p')
    element.textContent="This is new para"+i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);



let t4=console.log(performance.now());
// The Call Stack


//Single threading-> one command at a time
// js is a single threaded language


function addpara()
{
    let para=document.createElement('p');
    para.textContent="Thiss is  para";
    document.body.appendChild(para)
}

function appendnewmssg()
{
    let para=document.createElement('p');
    para.textContent="kyaa haaal chaaal";
    document.body.appendChild(para)
}

addpara();
appendnewmssg();

//This is Synchronous language line b line chl rha hai har chizzz

//Code is run to completion 

//Js cannot exceute multiple lines at a same time


//Event loop



//Synchronous occuring at a same time.

//Aysnc code use js event loop
//Aysnc code handle by browser
//Aysnc code wait in queue till the empty of call stackk



//Set timeout Methood


setTimeout(function(){console.log("hiii"),4000;})// YE BHT LATER TIME K BAAD RUN HOGAA