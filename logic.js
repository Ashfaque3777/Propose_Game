const target = document.querySelector(".target");
let yes = document.querySelector(".yes");

yes.addEventListener("click", () => {
  alert("I Love you too 😘");
});

function moveTarget() {
  const maxWidth = 400;
  const maxHeight = 400;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

target.addEventListener("mouseenter", function () {
  moveTarget();
});
