const buttonOpen = document.querySelector(".share-inactive");
const buttonClose = document.querySelector(".share-active");
const popup = document.querySelector(".pop");

buttonOpen.addEventListener("click", () => {
  popup.classList.toggle("show");
});

buttonClose.addEventListener("click", () => {
  popup.classList.toggle("show");
});
