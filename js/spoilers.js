function toggleSpoiler(_this, id) {
  let e = document.getElementById(id);
  if(e.style.display == 'table-cell') {
    e.style.display = 'none';
    _this.className = 'spoiler_hide';
  } else {
    e.style.display = 'table-cell';
    _this.className = 'spoiler_show'
  }
}
