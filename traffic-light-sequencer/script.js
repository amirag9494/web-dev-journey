const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

const configs = { config1, config2, config3, config4 };

const startBtn = document.getElementById('startBtn');
const configSelect = document.getElementById('configSelect');
const cyclesInput = document.getElementById('cyclesInput');
const terminalLogs = document.getElementById('terminalLogs');
const statusText = document.getElementById('statusText');

const lightRed = document.getElementById('lightRed');
const lightYellow = document.getElementById('lightYellow');
const lightGreen = document.getElementById('lightGreen');

function clearLights() {
  lightRed.classList.remove('active');
  lightYellow.classList.remove('active');
  lightGreen.classList.remove('active');
}

function setActiveLight(color) {
  clearLights();
  if (color === 'red') lightRed.classList.add('active');
  if (color === 'yellow') lightYellow.classList.add('active');
  if (color === 'green') lightGreen.classList.add('active');
}

function addLog(text, isError = false) {
  const p = document.createElement('p');
  p.className = `log-line ${isError ? 'log-error' : ''}`;
  p.textContent = `> ${text}`;
  terminalLogs.appendChild(p);
  terminalLogs.scrollTop = terminalLogs.scrollHeight;
}

async function runSequenceVisual(config, cycles) {
  terminalLogs.innerHTML = '';
  clearLights();
  statusText.textContent = "Running simulation...";

  if (!config.phases || config.phases.length === 0) {
    addLog("No phases found", true);
    statusText.textContent = "Stopped: No phases";
    return;
  }

  if (config.fault === true) {
    addLog("Faulted phase!", true);
    statusText.textContent = "System Faulted!";
    return;
  }

  for (let i = 0; i < cycles; i++) {
    for (const phase of config.phases) {
      if (phase.duration <= 0) {
        addLog("Invalid phase detected", true);
        statusText.textContent = "Invalid phase!";
      } else {
        addLog(`Switching to ${phase.color} for ${phase.duration} s`);
        setActiveLight(phase.color);
        statusText.textContent = `Light: ${phase.color.toUpperCase()} (${phase.duration}s)`;
      }

await new Promise(resolve => setTimeout(resolve, phase.duration * 1000));
    }
  }

  statusText.textContent = "Simulation completed.";
  addLog("Sequence finished successfully.");
}

startBtn.addEventListener('click', () => {
  const selectedConfigKey = configSelect.value;
  const cycles = parseInt(cyclesInput.value) || 1;
  const activeConfig = configs[selectedConfigKey];

  runSequenceVisual(activeConfig, cycles);
});