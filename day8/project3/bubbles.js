let bubble_plate=document.querySelector(".bubbles");
let created_bubble="";
let time=60;
let num;
let hit_num;
let score=0;
let timer_con=document.querySelector("#Time_con");
let hit_con=document.querySelector("#hit_con");
let score_cont=document.querySelector("#Score_con");
// let num=Math.floor(Math.random()*10)
for(let i=1;i<=75;i++)
{
     num=Math.floor(Math.random()*10)
created_bubble+=`  <div class="bubble">${num}</div>`;
bubble_plate.innerHTML=created_bubble;
}

// update time function
function update_time()
{
time--;
if(time<0)
{
    bubble_plate.innerHTML="<h2>Game over!</h2>";
clearInterval(id);

}
timer_con.innerHTML=time;  

}

// time function
function Timer()
{
 let id=setInterval( update_time,1000)
}

function hit_generator()
{
  hit_num=Math.floor(Math.random()*10);  
 hit_con.innerHTML=hit_num;
}
bubble_plate.addEventListener("click",(details)=>
{
    let clickedval=Number(details.target.textContent);
    let bubb=details.target;
  if(clickedval==hit_num)
  {
    // alert("you hit right one😊❤️❤️");
    score+=10;
    score_cont.innerHTML=score;
    bubb.classList.add("anime");
    setTimeout(
()=>
{
bubb.classList.add("hidden");
},100

    );
    hit_generator();

  }
  else
  {
      // alert("you hit wrong one🤢");
  }
}
)
hit_generator();
Timer();