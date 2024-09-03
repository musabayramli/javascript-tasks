const panel = document.querySelectorAll(".panel");

panel.forEach((p) => {
  p.addEventListener("click", () => {
    removeActiveClass();
    p.classList.add("active");
  });
});

const removeActiveClass = () => {
  panel.forEach((panel) => {
    panel.classList.remove("active");
  });
};
