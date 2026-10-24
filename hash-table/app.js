class HashTableVisualizer {
  constructor() {
    this.collection = {};
  }

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum;
  }

  add(key, value) {
    const h = this.hash(key);
    if (!this.collection[h]) {
      this.collection[h] = {};
    }
    this.collection[h][key] = value;
    return h;
  }

  remove(key) {
    const h = this.hash(key);
    if (this.collection[h] && Object.prototype.hasOwnProperty.call(this.collection[h], key)) {
      delete this.collection[h][key];
      if (Object.keys(this.collection[h]).length === 0) {
        delete this.collection[h];
      }
      return true;
    }
    return false;
  }

  lookup(key) {
    const h = this.hash(key);
    if (this.collection[h] && Object.prototype.hasOwnProperty.call(this.collection[h], key)) {
      return { found: true, hash: h, value: this.collection[h][key] };
    }
    return { found: false, hash: h, value: null };
  }
}

const ht = new HashTableVisualizer();

const keyInput = document.getElementById('keyInput');
const valInput = document.getElementById('valInput');
const calcFormula = document.getElementById('calcFormula');
const statusMessage = document.getElementById('statusMessage');
const tableViewer = document.getElementById('tableViewer');
const bucketCount = document.getElementById('bucketCount');

function updateFormulaPreview() {
  const key = keyInput.value;
  if (!key) {
    calcFormula.textContent = 'Enter a key to see ASCII sum';
    return;
  }
  const breakdown = Array.from(key).map(c => `'${c}' (${c.charCodeAt(0)})`);
  const sum = ht.hash(key);
  calcFormula.textContent = `${breakdown.join(' + ')} =${sum}`;
}

keyInput.addEventListener('input', updateFormulaPreview);

function setStatus(msg, type = 'info') {
  statusMessage.textContent = msg;
  statusMessage.className = `status-box ${type}`; }  function render(highlightKey = null) { const keys = Object.keys(ht.collection).sort((a, b) => Number(a) - Number(b)); bucketCount.textContent = `${keys.length} Bucket(s)`;

  if (keys.length === 0) {
    tableViewer.innerHTML = `<div class="empty-state">Hash table is currently empty. Add a key-value pair!</div>`;
    return;
  }

  tableViewer.innerHTML = '';
  keys.forEach(h => {
    const row = document.createElement('div');
    row.className = 'bucket-row';

    const indexCol = document.createElement('div');
    indexCol.className = 'bucket-index';
    indexCol.innerHTML = `<span class="idx-num">${h}</span><span class="idx-lbl">HASH</span>`;

    const itemsCol = document.createElement('div');
    itemsCol.className = 'chain-items';

    const bucketDict = ht.collection[h];
    for (const [k, v] of Object.entries(bucketDict)) {
      const node = document.createElement('div');
      node.className = `chain-node ${k === highlightKey ? 'highlight' : ''}`;
      node.innerHTML = `<span class="node-key">"${k}"</span>: <span class="node-val">"${v}"</span>`;
      itemsCol.appendChild(node);
    }

    row.appendChild(indexCol);
    row.appendChild(itemsCol);
    tableViewer.appendChild(row);
  });
}

document.getElementById('addBtn').addEventListener('click', () => {
  const k = keyInput.value.trim();
  const v = valInput.value.trim();
  if (!k || !v) {
    setStatus('Please enter both Key and Value!', 'warning');
    return;
  }
  const h = ht.add(k, v);
  setStatus(`Added ("${k}": "${v}") at hash index ${h}`, 'success'); render(k); keyInput.value = ''; valInput.value = ''; updateFormulaPreview(); });  document.getElementById('lookupBtn').addEventListener('click', () => { const k = keyInput.value.trim(); if (!k) { setStatus('Please enter a Key to lookup!', 'warning'); return; } const res = ht.lookup(k); if (res.found) { setStatus(`Found! Key "${k}" has value "${res.value}" at hash index ${res.hash}`, 'success'); render(k); } else { setStatus(`Key "${k}" not found in collection (Computed hash: ${res.hash})`, 'warning');
    render();
  }
});

document.getElementById('removeBtn').addEventListener('click', () => {
  const k = keyInput.value.trim();
  if (!k) {
    setStatus('Please enter a Key to remove!', 'warning');
    return;
  }
  const removed = ht.remove(k);
  if (removed) {
    setStatus(`Removed key "${k}" successfully`, 'info');
  } else {
    setStatus(`Cannot remove: key "${k}" does not exist`, 'warning');
  }
  render();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  ht.collection = {};
  keyInput.value = '';
  valInput.value = '';
  updateFormulaPreview();
  setStatus('Hash table cleared', 'info');
  render();
});

render();