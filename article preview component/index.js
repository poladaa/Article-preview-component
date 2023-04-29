const shareBtn = document.querySelector(".share-img");
const socials = document.querySelector(".socials");

shareBtn.addEventListener("click", () => {
  socials.classList.toggle("hide");
});
