const sticker = document.getElementById("sticker");

// hope I'm growing on you
sticker.style.transform = "scale(10)";

// :D
sticker.addEventListener("click", (e) => {
  sticker.style.transition = "all 0.2s";
  sticker.style.transform = "scale(1)";
  setTimeout(() => {
    sticker.style.transition = "all 300s";
    sticker.style.transform = "scale(10)";
  }, 200);
});
