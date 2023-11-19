/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      eval(prompt("Eval:"));
  }
})