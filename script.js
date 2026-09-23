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
// Element References
// =========================
const resumeModal = document.getElementById("resumeModal");
const resumeBtn = document.getElementById("resumeBtn");
const closeResume = document.getElementById("closeResume");

const modal = document.getElementById("certModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalPlaceholder = document.getElementById("modalPlaceholder");
const closeCert = document.getElementById("closeCert");

// =========================
// Certificate Image Map
// =========================
const certificateImages = {
  cert1: "media/KSDA-PMI-CERT.jpg",
  cert2: "media/DEVNET.jpg",
  cert3: "media/LINUX.jpg",
  cert4: "media/CCNA-ENTERPRISE.jpg",
  cert5: "media/CCNA-SRWE.jpg",
  cert6: "media/CCSTN.jpg",
  cert7: "media/PYTHON.jpg",
  cert8: "media/CCNA-INTRO.jpg",
  seminar1: "media/DATA-ANALYTICS.jpg",
  seminar2: "media/SQL-DATA-MANAGEMENT.png"
};

// =========================
// Resume Modal Open
// =========================
if (resumeBtn && resumeModal) {
  resumeBtn.addEventListener("click", () => {
    resumeModal.classList.add("active");
  });
}

// =========================
// Certificate Modal Helpers
// =========================
function resetModalMedia() {
  modalImage.style.display = "none";
  modalImage.src = "";
  modalPlaceholder.style.display = "none";
  modalPlaceholder.textContent = "";
}

function openCertModal(title, src) {
  resetModalMedia();
  modalTitle.textContent = title;

  if (src) {
    modalImage.src = src;
    modalImage.style.display = "block";
    modalImage.onerror = () => {
      modalImage.style.display = "none";
      modalPlaceholder.style.display = "block";
      modalPlaceholder.textContent =
        "Certificate image not found. Please check the file path.";
    };
  } else {
    modalPlaceholder.style.display = "block";
    modalPlaceholder.textContent = "Certificate image will appear here";
  }

  modal.classList.add("active");
}

// =========================
// Certification Cards
// =========================
document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => {
    const certId = card.dataset.cert;
    const certTitle = card.querySelector("h3").textContent;
    openCertModal(certTitle, certificateImages[certId]);
  });
});

// =========================
// Seminar Credential Links
// =========================
document.querySelectorAll(".credential-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const certId = link.dataset.cert;
    const certTitle = link
      .closest(".seminar-content")
      .querySelector("h4").textContent;
    openCertModal(certTitle, certificateImages[certId]);
  });
});

// =========================
// Close Buttons (with stopPropagation)
// =========================
if (closeResume && resumeModal) {
  closeResume.addEventListener("click", (e) => {
    e.stopPropagation();
    resumeModal.classList.remove("active");
  });
}

if (closeCert && modal) {
  closeCert.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.remove("active");
    resetModalMedia();
  });
}

// =========================
// Click Outside to Close
// =========================
window.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.classList.remove("active");
  }
  if (e.target === modal) {
    modal.classList.remove("active");
    resetModalMedia();
  }
});

// =========================
// Escape Key to Close
// =========================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (resumeModal && resumeModal.classList.contains("active")) {
      resumeModal.classList.remove("active");
    }
    if (modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
      resetModalMedia();
    }
  }
});