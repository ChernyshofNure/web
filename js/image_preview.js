let isPreviewing = false;
let imagesUrls = [
  'punoko.png',
  'tpfufun.jpg',
  'vohiyo.png',
  'koncha.png',
  'tehepelo.jpeg',
];

function renderImages() {
  for (let i=0; i<3; i++) {
    let img = document.getElementById(`profile-pic${i+1}`);
    img.src = `img/${imagesUrls[i]}`;
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
 shadow.onclick = handleClickBlur;

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
    console.log(i);
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
