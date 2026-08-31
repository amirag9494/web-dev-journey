const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

const incomeInput = document.getElementById("incomeInput");
const scoreInput = document.getElementById("scoreInput");
const checkBtn = document.getElementById("checkBtn");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

function getLoanMessage(annualIncome, creditScore) {
  if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } else {
    return "You don't qualify for any loans.";
  }
}

checkBtn.addEventListener("click", () => {
  const income = Number(incomeInput.value);
  const score = Number(scoreInput.value);

  if (!incomeInput.value || !scoreInput.value) {
    resultText.textContent = "Please fill in all fields.";
    resultBox.classList.remove("hidden");
    return;
  }

  const message = getLoanMessage(income, score);
  resultText.textContent = message;
  resultBox.classList.remove("hidden");
});