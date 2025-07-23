let input = document.getElementById("in");
let btn = document.getElementById("btn");
let main = document.getElementById("main");
btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("enter some task please");
  } else {
    let mem = document.createElement("ul");
    mem.innerHTML = `<li>${input.value}</li>`;
    main.appendChild(mem);
    input.value = "";
  }
});
