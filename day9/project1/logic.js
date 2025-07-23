// stp 1 create array of sentences to render indide the text diplay box

let sen_arr = [
  " break it down and explain why we use this combination",
  " array of sentences to render indide the text diplay box",
  "	Allow manual positioning",
  " element ko normal flow se hata deta hai",
  "Tell me which one you want to start",
  "User types the sentence in a text area",
  "User ko ek sentence diya jata hai",
];
let current_sen;
let strt_tm;
// step2 access all necessary elements from the html file

let displ_text = document.querySelector(".sent_disp");
let text_in = document.querySelector("#input_field");
let start_btn = document.querySelector("#start");
let done_btn = document.querySelector("#done");
let speed_show = document.querySelector(".speed");
let accuracy_show = document.querySelector(".accu");
let time_show = document.querySelector(".time");

let arrow = document.querySelector("#arrow");
// step 3 add listener on the str btn

start_btn.addEventListener("click", start);

// stwp 4 define the start fun
function start() {
  //   sbse phle sentece render kro or show kr wao
  current_sen = sen_arr[Math.floor(Math.random() * sen_arr.length)];

  displ_text.innerHTML = current_sen;

  strt_tm = new Date().getTime();
  text_in.disabled = false;
  start_btn.disabled = true;
  done_btn.disabled=false;

  speed_show.innerHTML = "";
  accuracy_show.innerHTML = "";
  time_show.innerHTML = "";
}

// step5  add listener on the done btn

done_btn.addEventListener("click", work_done);

// step 6 define the work_done function

function work_done() {
  let original_words = current_sen.trim().split(" ");

  let typed_txt = text_in.value.trim().split(" ");
  let correct = 0;
  let end_tm = new Date().getTime();
  original_words.forEach((word, i) => {
    if (word === typed_txt[i]) {
      correct++;
    }
  });
time = (end_tm - strt_tm);
  start_btn.disabled = false;
  let speed = Math.round((typed_txt.length / (time/1000)) * 60);
  let accuracy =Math.round((correct / original_words.length) * 100);
  done_btn.disabled=true;

  speed_show.innerHTML = speed + "wpm";
  accuracy_show.innerHTML = accuracy + "%";
  time_show.innerHTML = time/1000;
  text_in.value="";
}

// event listner on arrow
arrow.addEventListener("click",()=>
{
     current_sen = sen_arr[Math.floor(Math.random() * sen_arr.length)];
  displ_text.innerHTML = current_sen;
});