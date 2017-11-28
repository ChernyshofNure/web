function handleClickBlur(image) {
  return function(e) {
    if (image.id == 'imagePreview') {
      image.id = 'image';
    }
  }
}

function handleClickPreview(e) {
  if (e.target.id == 'image') {
    e.target.id = 'imagePreview';
  }
}


let image = document.getElementById('image');
let shadow = document.getElementById('previewShadow');
image.onclick = (handleClickPreview);
shadow.onclick = (handleClickBlur(image));
