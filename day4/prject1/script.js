let chatbox=document.querySelector(".chatbox");
let chat_input=document.querySelector("#input_field");
let send_btn=document.querySelector("#sent_btn");
let user_input="";
function handle_input()
{
 user_input=chat_input.value.trim();
 if(user_input=="")
    return;
// console.log(user_input);
let content=(Message,classname) =>
{
const chatList=document.createElement("li");
chatList.classList.add("chat" , classname);
let contents=classname==="outgoing"?`<p>${Message}`:`<span>🤖</span><p>${Message}</p>`;
// chatList.innerHTML=contents;
chatList.innerHTML=contents
chatbox.appendChild(chatList);
}
 content(user_input, "outgoing");
 let Ai_res= content("thinking...", "incoming");
chat_input.value="";

}
send_btn.addEventListener("click",handle_input);