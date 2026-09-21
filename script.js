const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll("section");
const pageButtons = document.querySelectorAll("[data-go]");

function showPage(pageId) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === pageId);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.page === pageId);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showPage(tab.dataset.page);
  });
});

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.go);
  });
});