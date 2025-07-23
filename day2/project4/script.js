

function run()
{
let struc=document.getElementById("html_code").value;
let design=document.getElementById("css_code").value;
let log=document.getElementById("js_code").value;
let output=document.getElementById("out");

output.contentDocument.body.innerHTML=struc+`<style>${design}</style>`;
output.contentwindow.eval(log);


}