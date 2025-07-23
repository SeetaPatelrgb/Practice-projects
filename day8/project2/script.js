let bgim=document.querySelector(".bg");
let load_txt=document.querySelector("#loader_text");
let spin=document.querySelector(".spin");
setTimeout
(
    ()=>
    {
bgim.style.filter=`blur(0px)`;
load_txt.style.opacity=0;
spin.style.visibility="hidden";
    }
    ,3000
);