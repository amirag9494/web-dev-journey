// Color palette for disks (up to 8 disks)
const DISK_COLORS = [
  '#f85149', // 1: Red
  '#ea6962', // 2: Coral
  '#d29922', // 3: Amber
  '#2ea043', // 4: Forest Green
  '#3fb950', // 5: Light Green
  '#58a6ff', // 6: Light Blue
  '#bc8cff', // 7: Purple
  '#f0883e'  // 8: Orange
];

let statesHistory = [];
let moveDescriptions = [];
let currentStepIndex = 0;
let playInterval = null;
let currentDiskCount = 3;

// Pure recursive Tower of Hanoi simulation
function solveHanoi(n) {
  const rods = [
    Array.from({ length: n }, (_, i) => n - i), // [n, n-1, ..., 1]
    [],
    []
  ];

  const states = [rods.map(r => [...r])];
  const moves = ['Initial configuration'];

  function move(k, source, target, aux) {
    if (k === 0) return;
    move(k - 1, source, aux, target);

    const disk = rods[source].pop();
    rods[target].push(disk);
    states.push(rods.map(r => [...r]));
    moves.push(`Move disk ${disk} from Rod ${source + 1} to Rod ${target + 1}`);

    move(k - 1, aux, target, source);
  }

  move(n, 0, 2, 1);
  return { states, moves };
}

// Initialization and reset
function initGame() {
  stopPlay();

  const inputEl = document.getElementById('diskCount');
  let n = parseInt(inputEl.value, 10);

  // Clamp input between 1 and 7 to prevent DOM freeze
  if (isNaN(n) || n < 1) n = 1;
  if (n > 7) n = 7;
  inputEl.value = n;
  currentDiskCount = n;

  const result = solveHanoi(currentDiskCount);
  statesHistory = result.states;
  moveDescriptions = result.moves;
  currentStepIndex = 0;

  document.getElementById('totalSteps').textContent = statesHistory.length - 1;
  renderLogContainer();
  updateUI();
}

// Render disks DOM elements
function renderRods(state) {
  for (let r = 0; r < 3; r++) {
    const stackEl = document.querySelector(`#rod${r} .disks-stack`);
    if (!stackEl) continue;

    stackEl.innerHTML = '';
    const currentRod = state[r] || [];

    currentRod.forEach(diskSize => {
      const disk = document.createElement('div');
      disk.className = 'disk';
      
      // Compute width dynamically based on active disk count
      const widthPct = 25 + (diskSize / currentDiskCount) * 70;
      disk.style.width = `${widthPct}%`;
      disk.style.backgroundColor = DISK_COLORS[(diskSize - 1) % DISK_COLORS.length];
      disk.textContent = diskSize;
      
      stackEl.appendChild(disk);
    });
  }
}

// Generate interactive state logs with click-to-jump support
function renderLogContainer() {
  const logEl = document.getElementById('stateLog');
  logEl.innerHTML = '';

  statesHistory.forEach((st, idx) => {
    const line = document.createElement('div');
    line.className = 'log-line';
    line.id = `log-line-${idx}`;
    line.textContent = `${idx}: [${st[0].join(', ')}] [${st[1].join(', ')}] [${st[2].join(', ')}]`;
    
    // Jump directly to state upon click
    line.addEventListener('click', () => {
      stopPlay();
      currentStepIndex = idx;
      updateUI();
    });

    logEl.appendChild(line);
  });
}

// Synchronize UI metrics, active logs, and button states
function updateUI() {
  renderRods(statesHistory[currentStepIndex]);
  document.getElementById('stepCounter').textContent = currentStepIndex;
  document.getElementById('moveDescription').textContent = moveDescriptions[currentStepIndex];

  document.getElementById('prevBtn').disabled = currentStepIndex === 0;
  document.getElementById('nextBtn').disabled = currentStepIndex === statesHistory.length - 1;

  // Highlight active log entry and scroll into viewport
  document.querySelectorAll('.log-line').forEach(el => el.classList.remove('active'));
  const activeLine = document.getElementById(`log-line-${currentStepIndex}`);
  if (activeLine) {
    activeLine.classList.add('active');
    activeLine.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

function nextStep() {
  if (currentStepIndex < statesHistory.length - 1) {
    currentStepIndex++;
    updateUI();
  } else {
    stopPlay();
  }
}

function prevStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    updateUI();
  }
}

// Manage playback loop safely
function togglePlay() {
  if (playInterval !== null) {
    stopPlay();
  } else {
    if (currentStepIndex >= statesHistory.length - 1) {
      currentStepIndex = 0;
      updateUI();
    }
    const speed = 1100 - parseInt(document.getElementById('speedSlider').value, 10);
    const playBtn = document.getElementById('playBtn');
    playBtn.textContent = '⏸ Pause';
    playBtn.className = 'btn btn-danger';
    
    playInterval = setInterval(nextStep, Math.max(100, speed));
  }
}

function stopPlay() {
  if (playInterval !== null) {
    clearInterval(playInterval);
    playInterval = null;
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
      playBtn.textContent = '▶ Play';
      playBtn.className = 'btn btn-success';
    }
  }
}

// User action bindings
document.getElementById('generateBtn').addEventListener('click', initGame);

document.getElementById('nextBtn').addEventListener('click', () => {
  stopPlay();
  nextStep();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  stopPlay();
  prevStep();
});

document.getElementById('playBtn').addEventListener('click', togglePlay);

document.getElementById('resetBtn').addEventListener('click', () => {
  stopPlay();
  currentStepIndex = 0;
  updateUI();
});

document.getElementById('speedSlider').addEventListener('change', () => {
  if (playInterval !== null) {
    stopPlay();
    togglePlay();
  }
});

// Keyboard navigation: Space (Play/Pause), Left/Right Arrows (Step by step)
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.code === 'Space') {
    e.preventDefault();
    togglePlay();
  } else if (e.code === 'ArrowRight') {
    stopPlay();
    nextStep();
  } else if (e.code === 'ArrowLeft') {
    stopPlay();
    prevStep();
  }
});

// Boot visualizer once DOM is ready
document.addEventListener('DOMContentLoaded', initGame);