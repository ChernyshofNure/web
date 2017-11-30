function tableHandleMouseOutOdd(e) {
  e.currentTarget.style.background = 'none';
}

function tableHandleMouseOutEven(e) {
  e.currentTarget.style.background = '#212121';
}

function tableHandleMouseOver(e) {
  // console.log(e.currentTarget.style.background);
  e.currentTarget.style.background = '#9a9aba';
}

let table_rows = document.getElementsByTagName('tr');
for (let i=0; i < table_rows.length; i++) {
  table_rows[i].addEventListener('mouseover', tableHandleMouseOver, false);
  if (i % 2 == 0) {
    table_rows[i].addEventListener('mouseout', tableHandleMouseOutOdd, false);
  } else {
    table_rows[i].addEventListener('mouseout', tableHandleMouseOutEven, false);
  }
}
