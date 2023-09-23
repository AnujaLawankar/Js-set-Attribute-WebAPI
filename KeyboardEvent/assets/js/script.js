



function keydownAction(event) {
  // TODO: Complete keydown function
  var keyPress = event.keypress;
  var keycode = event.code;

  document.querySelector("#keypress").textContent = keyPress;
  document.querySelector("#code").textContent = keycode;
  document.querySelector("#status").textContent = "KEYDOWN Event";




}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

