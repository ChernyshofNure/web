function renderHint() {
  var hint = document.getElementById("hint");
  if (hint.style.display === "none") {
      hint.style.display = "inline-block";
  } else {
      hint.style.display = "none";
  }
}

function hideHintOnCheck() {
  let checkbox = document.getElementById("menucheck");
  let hint = document.getElementById("hint");
  checkbox.addEventListener('change', function() {
    localStorage.setItem('is_space_pressed', true);
    hint.style.display = "none";
  });
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
    hideHintOnCheck();
    renderHint();
  }

}

// Remove hint if menu's checkbox triggered

checkHint()
