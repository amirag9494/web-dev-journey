function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

// اتصال به رابط کاربری (UI)
document.getElementById("calculateBtn").addEventListener("click", () => {
  const scoresInput = document.getElementById("scoresInput").value;
  const studentScoreInput = document.getElementById("studentScoreInput").value;

  if (!scoresInput || studentScoreInput === "") {
    alert("Please enter both class scores and student score!");
    return;
  }

  // تبدیل رشته‌ی کاماسپریت به آرایه‌ای از اعداد
  const scoresArray = scoresInput.split(",").map(num => Number(num.trim()));
  const studentScore = Number(studentScoreInput);

  const message = studentMsg(scoresArray, studentScore);

  const resultContainer = document.getElementById("resultContainer");
  const resultMessage = document.getElementById("resultMessage");

  resultMessage.textContent = message;
  resultContainer.classList.remove("hidden");
});