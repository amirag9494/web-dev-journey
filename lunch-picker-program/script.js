let lunches = [];

const lunchInput = document.getElementById("lunchInput");
const addStartBtn = document.getElementById("addStartBtn");
const addEndBtn = document.getElementById("addEndBtn");
const removeFirstBtn = document.getElementById("removeFirstBtn");
const removeLastBtn = document.getElementById("removeLastBtn");
const randomBtn = document.getElementById("randomBtn");
const menuList = document.getElementById("menuList");
const messageBox = document.getElementById("messageBox");

function updateUI(message) {
  if (lunches.length === 0) {
    menuList.innerHTML = '<li class="empty-msg">The menu is empty.</li>';
  } else {
    menuList.innerHTML = "";
    lunches.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      menuList.appendChild(li);
    });
  }
  messageBox.querySelector("p").textContent = message;
}

addEndBtn.addEventListener("click", () => {
  const item = lunchInput.value.trim();
  if (!item) return;
  lunches.push(item);
  lunchInput.value = "";
  updateUI(`${item} added to the end of the lunch menu.`);
});

addStartBtn.addEventListener("click", () => {
  const item = lunchInput.value.trim();
  if (!item) return;
  lunches.unshift(item);
  lunchInput.value = "";
  updateUI(`${item} added to the start of the lunch menu.`);
});

removeLastBtn.addEventListener("click", () => {
  if (lunches.length === 0) {
    updateUI("No lunches to remove.");
  } else {
    const removedItem = lunches.pop();
    updateUI(`${removedItem} removed from the end of the lunch menu.`);
  }
});

removeFirstBtn.addEventListener("click", () => {
  if (lunches.length === 0) {
    updateUI("No lunches to remove.");
  } else {
    const removedItem = lunches.shift();
    updateUI(`${removedItem} removed from the start of the lunch menu.`);
  }
});

randomBtn.addEventListener("click", () => {
  if (lunches.length === 0) {
    updateUI("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    const selected = lunches[randomIndex];
    updateUI(`Randomly selected lunch: ${selected}`);
  }
});