let normalizeUnits = function(manifest) {
  let newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight = Number((newManifest.weight * 0.45).toFixed(2));
    newManifest.unit = "kg";
  }
  return newManifest;
};

let validateManifest = function(manifest) {
  let errors = {};
  
  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (
    typeof manifest.weight !== "number" ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = "Invalid";
  }

  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

// UI DOM Handling
const manifestForm = document.getElementById("manifestForm");
const containerIdInput = document.getElementById("containerId");
const destinationInput = document.getElementById("destination");
const weightInput = document.getElementById("weight");
const unitSelect = document.getElementById("unit");
const hazmatCheckbox = document.getElementById("hazmat");
const sampleValidBtn = document.getElementById("sampleValidBtn");
const sampleInvalidBtn = document.getElementById("sampleInvalidBtn");
const resultBox = document.getElementById("resultBox");
const resultContent = document.getElementById("resultContent");

sampleValidBtn.addEventListener("click", () => {
  containerIdInput.value = 55;
  destinationInput.value = "Carmel";
  weightInput.value = 400;
  unitSelect.value = "lb";
  hazmatCheckbox.checked = false;
});

sampleInvalidBtn.addEventListener("click", () => {
  containerIdInput.value = -88;
  destinationInput.value = "Soledad";
  weightInput.value = "";
  unitSelect.value = "kg";
  hazmatCheckbox.checked = false;
});

manifestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let rawContainerId = containerIdInput.value;
  let rawWeight = weightInput.value;

  let manifest = {};
  if (rawContainerId !== "") manifest.containerId = Number(rawContainerId);
  if (destinationInput.value !== "") manifest.destination = destinationInput.value;
  if (rawWeight !== "") manifest.weight = Number(rawWeight);
  if (unitSelect.value) manifest.unit = unitSelect.value;
  manifest.hazmat = hazmatCheckbox.checked;

  let validationResult = validateManifest(manifest);
  resultBox.classList.remove("hidden");
  resultContent.innerHTML = "";

  if (Object.keys(validationResult).length === 0) {
    let normalized = normalizeUnits(manifest);
    resultContent.innerHTML = `
      <span class="success-text">Validation success: ${normalized.containerId}</span><br>
      <span class="success-text">Total weight: ${normalized.weight} kg</span>
    `;
  } else {
    let idToDisplay = manifest.hasOwnProperty("containerId") ? manifest.containerId : "undefined";
    if (manifest.containerId <= 0 || (typeof manifest.containerId === "number" && !Number.isInteger(manifest.containerId))) {
      idToDisplay = manifest.containerId;
    }
    resultContent.innerHTML = `
      <span class="error-text">Validation error: ${idToDisplay}</span><br>
      <span class="error-text">${JSON.stringify(validationResult, null, 2)}</span>
    `;
  }
});