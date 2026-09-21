// =========================
// Navigation Logic
// =========================
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

// =========================
// Certificate Modal Logic
// =========================
const modal = document.getElementById("certModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalPlaceholder = document.getElementById("modalPlaceholder");
const closeModal = document.querySelector(".close-modal");
const certCards = document.querySelectorAll(".cert-card");

// Add your certificate image paths here
const certificateImages = {
  cert1: "media/KSDA-PMI-CERT.jpg",
  cert2: "media/DEVNET.jpg",
  cert3: "media/LINUX.jpg",
  cert4: "media/CCNA-ENTERPRISE.jpg",
  cert5: "media/CCNA-SRWE.jpg",
  cert6: "media/CCSTN.jpg",
  cert7: "media/PYTHON.jpg",
  cert8: "media/CCNA-INTRO.jpg"
};

certCards.forEach((card) => {
  card.addEventListener("click", () => {
    const certId = card.dataset.cert;
    const certTitle = card.querySelector("h3").textContent;
    const certImgSrc = certificateImages[certId];

    modalTitle.textContent = certTitle;

    if (certImgSrc && certImgSrc !== "") {
      modalImage.src = certImgSrc;
      modalImage.style.display = "block";
      modalPlaceholder.style.display = "none";
      
      modalImage.onerror = () => {
        modalImage.style.display = "none";
        modalPlaceholder.style.display = "block";
        modalPlaceholder.textContent = "Certificate image not found. Please upload it.";
      };
    } else {
      modalImage.style.display = "none";
      modalPlaceholder.style.display = "block";
      modalPlaceholder.textContent = "Certificate image will appear here";
    }

    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
  }
});