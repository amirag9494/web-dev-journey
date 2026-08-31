const emailInput = document.getElementById("emailInput");
const maskCharSelect = document.getElementById("maskChar");
const maskBtn = document.getElementById("maskBtn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const copyBtn = document.getElementById("copyBtn");
const errorMsg = document.getElementById("errorMsg");
const historyList = document.getElementById("historyList");

let history = [];

function maskEmail(email, symbol = "*") {
  const atIndex = email.indexOf("@");
  if (atIndex === -1) return null;
  
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  
  if (username.length <= 2) {
    return username[0] + symbol.repeat(3) + domain;
  }
  
  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const asterisks = symbol.repeat(username.length - 2);
  
  return firstChar + asterisks + lastChar + domain;
}

function isValidEmail(email) {
  return email.includes("@") && email.indexOf("@") > 0 && email.indexOf("@") < email.length - 1;
}

maskBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();
  const selectedSymbol = maskCharSelect.value;
  
  if (!isValidEmail(emailValue)) {
    errorMsg.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    return;
  }
  
  errorMsg.classList.add("hidden");
  const masked = maskEmail(emailValue, selectedSymbol);
  
  resultText.textContent = masked;
  resultContainer.classList.remove("hidden");
  
  addToHistory(masked);
});

copyBtn.addEventListener("click", () => {
  const textToCopy = resultText.textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    copyBtn.textContent = "Copied! ✓";
    setTimeout(() => {
      copyBtn.textContent = "📋 Copy";
    }, 2000);
  });
});

function addToHistory(maskedEmail) {
  if (history.includes(maskedEmail)) return;
  
  if (history.length === 0) {
    historyList.innerHTML = "";
  }
  
  history.unshift(maskedEmail);
  if (history.length > 5) history.pop();
  
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}