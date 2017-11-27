function menuLinksKeyUp(e) {
  var is_checked = document.getElementById("menucheck").checked;
  if (is_checked) {
    switch (e.keyCode) {
      case 49:
        window.location.href = 'index.html';
        break;
      case 50:
        window.location.href = 'about.html';
        break;
      case 51:
        window.location.href = 'ai.html';
        break;
      case 52:
        window.location.href = 'plans.html';
        break;
      case 53:
        window.location.href = 'blog.html';
        break;
      case 71:
        window.open('https://github.com/chernyshof', '_blank');
        break;
    }
  }
}

function menuKeyUp(e) {
  var x = document.getElementById("menucheck");
  if (e.keyCode == 32) {
    x.checked = !x.checked;
  }
}

function preventDefaultKeyUp(e) {
  e.preventDefault();
}

var checkbox = document.getElementById("menucheck");
checkbox.addEventListener('keyup', preventDefaultKeyUp, true);

document.addEventListener('keyup', menuKeyUp, false);
document.addEventListener('keyup', menuLinksKeyUp, false);