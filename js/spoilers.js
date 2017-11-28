function toggleSpoiler(id) {
  let e = document.getElementById(id);
  if(e.style.display == 'block' || e.style.display == '') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
}
