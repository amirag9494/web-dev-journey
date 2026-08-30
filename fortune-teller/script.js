const fortunes = [
    "Your cat will look very cuddly today.",
    "The weather will be nice tomorrow.",
    "Be cautious of your new neighbors.",
    "You will find a new hobby soon.",
    "It would be wise to avoid the color red today.",
    "A big surprise is waiting for you around the corner.",
    "Your hard work in coding will pay off sooner than you think.",
    "An unexpected message will brighten your day.",
    "Take a deep breath and trust your own path.",
    "A short journey will bring you fresh inspiration."
];

const fortuneBtn = document.getElementById("fortuneBtn");
const fortuneDisplay = document.getElementById("fortuneDisplay");

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    const selectedFortune = fortunes[randomIndex];
    
    fortuneDisplay.textContent = selectedFortune;
}

fortuneBtn.addEventListener("click", getRandomFortune);