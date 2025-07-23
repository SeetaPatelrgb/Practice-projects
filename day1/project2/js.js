let num=document.getElementById("count");
let decrease=document.getElementById("dec");
let reset=document.getElementById("res");
let increase=document.getElementById("inc");
let c=50;
let id;

// decrease function

decrease.addEventListener("click",()=>
{
id=setInterval(dec,100);
});
function dec()
{
     if(c==0)  
  {
    clearInterval(id);
    alert("you have reached your limit")
  }
 
    c--;
    num.innerText=c;
 
}

// reset function
reset.addEventListener("click",
    ()=>
    {
     clearInterval(id);
      c=0;
      num.innerHTML=c;  
    }
);

// increase function

increase.addEventListener("click",
    ()=>
    {
id=setInterval(incr,100);
    }
);

function incr()
{
   c++;
   num.innerText=c;
   if(c==100)
   {
    clearInterval(id)
    alert("you have reached limit");
   }
}