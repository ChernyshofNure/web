function renderHint() {
  var x = document.getElementById("hint");
  if (x.style.display === "none") {
      x.style.display = "inline-block";
  } else {
      x.style.display = "none";
  }
}

function hideHint(e) {
  if (e.keyCode == 32) {
    localStorage.setItem('is_space_pressed', true)
    document.removeEventListener('keyup', hideHint)
    renderHint();
  }
}

function checkHint() {
  let is_pressed = localStorage.getItem('is_space_pressed');

  if (!is_pressed) {
    document.addEventListener('keyup', hideHint, false);
    renderHint();
  }
}

checkHint()
