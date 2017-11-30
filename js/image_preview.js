let isPreviewing = false;
let imagesUrls = [
  'konichiwa.png',
  'tpfufun.jpg',
  'vohiyo.png',
  'punoko.png',
  'tehepelo.jpeg',
];

function renderImages() {
  for (let i=0; i<3; i++) {
    let img = document.getElementById(`profile-pic${i+1}`);
    if (img) {
      img.src = `img/${imagesUrls[i]}`;
    }
  }
}

renderImages();

function handleClickBlur(e) {
  let preview = document.getElementById('imagePreview');
  preview.src = "";
  isPreviewing = false;
}

function handleClickPreview(e) {
  let preview = document.getElementById('imagePreview');
  preview.src = e.target.src;
  isPreviewing = true;
}


let images = document.getElementsByClassName('image');
for (let i=0; i < images.length; i++) {
  images[i].onclick = handleClickPreview;
}

let shadow = document.getElementById('previewShadow');
if (shadow) {
  shadow.onclick = handleClickBlur;
}

function carousel(e) {
  if (!isPreviewing) {
    if (e.keyCode == 37) {
      imagesUrls.unshift(imagesUrls.pop());
      renderImages();
    } else if(e.keyCode == 39) {
      imagesUrls.push(imagesUrls.shift());
      renderImages();
    }
  } else {
    let preview = document.getElementById('imagePreview');
    let previewUrls = imagesUrls.slice()
    let img = preview.src.split('/').pop();
    let i = previewUrls.indexOf(img);
    if (e.keyCode == 37) {
      i -= 1;
      if (i == -1) {
        i = imagesUrls.length-1;
      }
      preview.src = `img/${imagesUrls[i]}`;
    } else if(e.keyCode == 39) {
      i += 1;
      if (i > images.length) {
        i = 0;
      }
      preview.src = `img/${imagesUrls[i]}`;
    }
  }
}

document.addEventListener('keydown', carousel, true);

function handleClickArrows(e) {
  let className = e.currentTarget.querySelector('i').className;
  if (className.indexOf('right') !== -1) {
    imagesUrls.push(imagesUrls.shift());
    renderImages();
  } else if (className.indexOf('left') !== -1) {
    imagesUrls.unshift(imagesUrls.pop());
    renderImages();
  }
}

function handleClickPreviewArrows(e) {
  let className = e.currentTarget.querySelector('i').className;
  let preview = document.getElementById('imagePreview');
  let previewUrls = imagesUrls.slice()
  let img = preview.src.split('/').pop();
  let i = previewUrls.indexOf(img);
  if (className.indexOf('right') !== -1) {
    i += 1;
    if (i > images.length) {
      i = 0;
    }
    preview.src = `img/${imagesUrls[i]}`;
  } else if (className.indexOf('left') !== -1) {
    i -= 1;
    if (i == -1) {
      i = imagesUrls.length-1;
    }
    preview.src = `img/${imagesUrls[i]}`;
  }
}

let arrows = document.getElementsByClassName('arrowblock');
for (let i=0; i < arrows.length; i++) {
  arrows[i].onclick = handleClickArrows;
}

let preview_arrows = document.getElementsByClassName('preview_arrowblock');
for (let i=0; i < arrows.length; i++) {
  preview_arrows[i].onclick = handleClickPreviewArrows;
}
