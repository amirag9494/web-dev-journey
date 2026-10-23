let currentMode = 'rectangle';

function switchShape(mode) {
  currentMode = mode;
  document.getElementById('rectTab').classList.toggle('active', mode === 'rectangle');
  document.getElementById('sqTab').classList.toggle('active', mode === 'square');

  document.getElementById('widthGroup').style.display = mode === 'rectangle' ? 'block' : 'none';
  document.getElementById('heightGroup').style.display = mode === 'rectangle' ? 'block' : 'none';
  document.getElementById('sideGroup').style.display = mode === 'square' ? 'block' : 'none';

  calculate();
}

function calculate() {
  let w, h;

  if (currentMode === 'rectangle') {
    w = parseInt(document.getElementById('width').value, 10) || 0;
    h = parseInt(document.getElementById('height').value, 10) || 0;
    document.getElementById('strRep').textContent = `Rectangle(width=${w}, height=${h})`; } else { const s = parseInt(document.getElementById('side').value, 10) \vert{}\vert{} 0; w = s; h = s; document.getElementById('strRep').textContent = `Square(side=${s})`;
  }

  const area = w * h;
  const perimeter = 2 * (w + h);
  const diagonal = Math.sqrt(w ** 2 + h ** 2).toFixed(4);

  let picture = '';
  if (w > 50 || h > 50) {
    picture = 'Too big for picture.';
  } else if (w > 0 && h > 0) {
    picture = ('*'.repeat(w) + '\n').repeat(h);
  } else {
    picture = 'Invalid dimensions.';
  }

  document.getElementById('resArea').textContent = area;
  document.getElementById('resPerimeter').textContent = perimeter;
  document.getElementById('resDiagonal').textContent = diagonal;
  document.getElementById('shapePicture').textContent = picture;
}

// Initial calculation on load
calculate();