let circles=document.querySelectorAll(".circle");
let pre_btn=document.getElementById("pre");
let next_btn=document.getElementById("next");
let indic=document.getElementById("indic");
let current_step=1;

// pre button working
 pre_btn.addEventListener("click",()=>
{
if(current_step>1)
{
    current_step--;
  update();
  
}
});

// next button working

next_btn.addEventListener("click",()=>
{
if(current_step<circles.length)

{
current_step++;
update();
}
});

//update function 
 function update()
{
    circles.forEach((circle,ind)=>
    {
     if(ind<current_step)   
     {
       circle.classList.add("active") ;
     }
     else
     {
        circle.classList.remove("active");
     }
    }
)
// for each loop ended
let bar=((current_step-1)/(circles.length-1))*100;
indic.style.width=`${bar}%`;
}