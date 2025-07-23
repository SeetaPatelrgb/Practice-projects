let btn = document.getElementById("change");
let swap = document.getElementById("swap");

btn.addEventListener("click", convert);
swap.addEventListener("click", swap_val);

function convert() {
  let upper_choice = document.getElementById("first").value;
  let lower_choice = document.getElementById("second").value;
  let entered_value = document.getElementById("curre_in1").value;
  let enterd_choice = document.getElementById("choosen");
  let choice_value = document.getElementById("val");
  let converted_val = document.getElementById("answer");
  alert("ensure you want to convert");
  let result;
  if (upper_choice == lower_choice) {
    result = entered_value;
    converted_val.innerHTML = `${result}the value is`;
    enterd_choice.innerText = upper_choice;
  } else {
    let rate = 85.69;
    if (upper_choice == "INR" && lower_choice == "USD") {
      result = entered_value / rate;
      choice_value.innerText = rate;
    } else {
      result = entered_value * rate;
      choice_value.innerText = 1;
    }
    converted_val.innerHTML = `<b>${result}</b>`;
    enterd_choice.innerText = upper_choice;
  }
}

function swap_val() {
  let upper_choice = document.getElementById("first");
  let lower_choice = document.getElementById("second");
  let temp;
  temp = upper_choice.value;
  upper_choice.value = lower_choice.value;
  lower_choice.value = temp;
}
