
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    setTimeout(() => {
      container.classList.add("loaded");
    }, 100);
  });

