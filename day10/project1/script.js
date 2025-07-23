// step1 access all elements
let  text_cont;
let add_btn=document.getElementById("add");
let notes_container =document.querySelector(".notes_cont");
let imr_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORE6R0-yfRp6LRCU1hJNIKph9KG9-4ExfGg&s";
// step 2 addeventlister to the add btn
add_btn.addEventListener("click",create_note);
// step3 define createnote function
function create_note()
{
    text_cont=document.createElement("div") 
   text_cont.classList.add("text_con");
   let p=document.createElement("p"); 
   p.setAttribute("contenteditable" ,"true");
    let img=document.createElement("img"); 
    img.src=imr_url;
    text_cont.appendChild(p);
    notes_container.appendChild(text_cont).appendChild(img);

}

// step 4 addevent lister to th delete img
notes_container.addEventListener("click",(event)=>
{
 if(event.target.tagName==="IMG")
   {
    event.target.parentElement.remove();  
   }  
})