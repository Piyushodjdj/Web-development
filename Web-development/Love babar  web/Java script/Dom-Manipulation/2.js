//Browser Events

//Event
//Respond to event
//Data stored in event
//Lifecycle of an event
//Stop an event

//Classes is a blue print of object
//Classes are blueprint and objects are reality
//interface are blueprint
//Eventtarget implemented by objects that can recive events and may have listners on them
//Click krne baad kya hogaaa
//add eventlistner
//remove eventlistner
// dispatch event
//Eventtarget is a top level entity

//Add event listner





function print()
{
    console.log('print');
}

document.addEventListener('click',print)
document.removeEventListener('click',print)






//Phases of Event




//Capturing phase
//Public Phasse


//The Event Object

// 

let links=document.querySelectorAll('a')
let third=links[2]


third.addEventListener('click',function(event)
{
    event.preventDefault();
    console.log('maza aaya');
})


//Avoid to many Events


let mydiv=document.createElement('div');

function para(event)
  {
    console.log('I have clicked on this event');
  }

for(let i=0;i<=100;i++)
{
    let newElement=document.createElement('p');
  newElement.textContent='This  is new paraa'+i


  newElement.addEventListener('click',para);

  mydiv.appendChild(newElement);

}
document.body.appendChild(mydiv);


let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event)
{
    console.log('span pr click kia  hai humnee'+event.target.textContent);
});


