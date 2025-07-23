let quiz = [
  {
    question: "what does it stands for html",
    a: "hight time  multi lang ",
    b: "home",
    c: " structural language",
    d: "hypertext markup language",
    correct: "d",
  },
  {
    question: "why we use css in webpages",
    a: "for structure",
    b: "for designing",
    c: "intractiveness",
    d: "programming language",
    correct: "b",
  },
  {
    question: "when was javasript launched",
    a: "1989",
    b: "1978",
    c: "1995",
    d: "1990",
    correct: "c",
  },
  {
    question: "when was javasript launched",
    a: "1989",
    b: "1978",
    c: "1995",
    d: "1990",
    correct: "c",
  },
  {
    question: "when was javasript launched",
    a: "1989",
    b: "1978",
    c: "1995",
    d: "1990",
    correct: "c",
  },
];

let main = document.getElementById("container");
let question = document.getElementById("question");
let a = document.getElementById("a1");
let b = document.getElementById("b1");
let c = document.getElementById("c1");
let d = document.getElementById("d1");
let btn = document.getElementById("sub");
let options = document.querySelectorAll(".answer");
let current_quiz = 0;
score = 0;

function deselectAnswers() {
  options.forEach(option => option.checked = false);
}

function getselected() {
  let answer;
  options.forEach((option) => {
    if (option.checked) {
      answer = option.id;
    }
  });
  return answer;
}

function load_quiz()
{ 
    deselectAnswers(); 
 let quiz_data=quiz[current_quiz] ; 
 question.innerHTML=quiz_data.question; 
 a.innerText=quiz_data.a;
  b.innerText=quiz_data. b;
  c.innerText=quiz_data.c;
  d.innerText=quiz_data.d;

}
btn.addEventListener("click",()=>
{
  ans=getselected();
if(ans)
{
  if(ans==quiz[current_quiz].correct)
  {
    
    score++;
  }
current_quiz++;
if(current_quiz<quiz.length)
{
  load_quiz();
}
else
{
  main.innerHTML=`<h2>Quiz completed</h2>
  your score is ${score}
  <p>You did your best  but do you want to play again</p>
  <button>Play again</button>
  `
}
}

});

 load_quiz();