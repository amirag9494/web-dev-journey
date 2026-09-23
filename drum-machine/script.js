document.querySelectorAll(".drum-pad").forEach(pad => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector(".clip");
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerText = pad.id;
  });
});

document.addEventListener("keydown", event => {
  const audio = document.getElementById(event.key.toUpperCase());
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    document.getElementById("display").innerText = audio.parentElement.id;
    
    // افکت کلیک با کیبورد (برای ظاهر)
    audio.parentElement.classList.add("active");
    setTimeout(() => {
      audio.parentElement.classList.remove("active");
    }, 100);
  }
});