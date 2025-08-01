function clock()
{
 let today=new Date();
 let Hours=today.getHours();
 let Minutes=today.getMinutes();
 let second=today.getSeconds();
 let set=(Hours>=12?"PM":"AM");
Hours=Hours%12;
 function FormData(num)
 {
num=num<10?"0"+num:num;
return num;
 }
 const time=`${FormData(Hours)}:${FormData(Minutes)}:${FormData(second)}${set}`;
 document.getElementsByClassName("timeShow")[0].innerHTML=`<p>${time}</P>`
}

setInterval(clock,1000);
clock();