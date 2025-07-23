// let bigcup = document.getElementById("big_cup");
let cups = document.querySelectorAll(".cup");
// let remaining = document.getElementById("remain");
let percentage = document.getElementById("per");

function update() {
  let total = cups.length;
  let filled = document.querySelectorAll(".cup.fill").length;
  if(filled===0)
  {
  percentage.style.visibility="hidden";
  percentage.style.height=0;
  }
  else{
    let perc=(filled/total)*100;
    percentage.style.visibility="visible";
    percentage.style.height=`${perc*2.7}px`;
    percentage.innerHTML=`${perc}`;
  }
}

function highlight(index)
{
 cups.forEach((cup,i)=>
{
  if(index==i)  
  {
    cup.classList.add("fill");

  }
});
update();   
}

cups.forEach((cup,index)=>
{
cup.addEventListener("click",()=>
{
    highlight(index);
})
});