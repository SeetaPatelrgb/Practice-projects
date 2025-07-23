let input=document.getElementById("inp");
let butt=document.getElementById("btn");
butt.addEventListener("click",change);

function change()
{
    
    alert("color is applying");
  document.body.style.backgroundColor=input.value ; 
 
}