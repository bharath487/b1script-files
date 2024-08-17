document.addEventListener("DOMContentLoaded",()=>{
    var counterElement=document.getElementById("counter");
    var increment=document.getElementById("incrementButton");
    var decrement=document.getElementById("decrementButton");

    let count=0;

    incrementButton.addEventListener("click",()=>{
    count++;
    counterElement.textContent=count;   
    })
    decrementButton.addEventListener("click",()=>{
        count--;
        counterElement.textContent=count;
    })   
        
})