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
// Resume Modal Logic
// =========================
const resumeModal = document.getElementById("resumeModal");
const resumeBtn = document.getElementById("resumeBtn");
const closeResume = document.getElementById("closeResume");

if (resumeBtn && resumeModal) {
  resumeBtn.addEventListener("click", () => {
    resumeModal.classList.add("active");
  });
}

if (closeResume) {
  closeResume.addEventListener("click", () => {
    resumeModal.classList.remove("active");
  });
}

// =========================
// Certificate / Credential Modal Logic
// =========================
const modal = document.getElementById("certModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalPlaceholder = document.getElementById("modalPlaceholder");

// ✅ FIXED: target ONLY the close button inside #certModal
const closeModal = document.querySelector("#certModal .close-modal");

// 📁 Add your certificate image paths here (files inside your VS Code project)
const certificateImages = {
  // Certification cards
  cert1: "media/KSDA-PMI-CERT.jpg",
  cert2: "media/DEVNET.jpg",
  cert3: "media/LINUX.jpg",
  cert4: "media/CCNA-ENTERPRISE.jpg",
  cert5: "media/CCNA-SRWE.jpg",
  cert6: "media/CCSTN.jpg",
  cert7: "media/PYTHON.jpg",
  cert8: "media/CCNA-INTRO.jpg",

  // Seminar certificates
  seminar1: "media/DATA-ANALYTICS.jpg",
  seminar2: "media/SQL-DATA-MANAGEMENT.png"
};

/**
 * Reset the modal media area.
 */
function resetModalMedia() {
  modalImage.style.display = "none";
  modalImage.src = "";
  modalPlaceholder.style.display = "none";
  modalPlaceholder.textContent = "";
}

/**
 * Open the modal with an image.
 */
function openModal(title, src) {
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

// ---- Certification Cards (data-cert) ----
document.querySelectorAll(".cert-card").forEach((card) => {
  card.addEventListener("click", () => {
    const certId = card.dataset.cert;
    const certTitle = card.querySelector("h3").textContent;
    openModal(certTitle, certificateImages[certId]);
  });
});

// ---- Seminar Credential Links (data-cert) ----
document.querySelectorAll(".credential-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const certId = link.dataset.cert;
    const certTitle = link
      .closest(".seminar-content")
      .querySelector("h4").textContent;
    openModal(certTitle, certificateImages[certId]);
  });
});

// ---- Close Certificate Modal ----
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    resetModalMedia();
  });
}

// =========================
// Unified Global Handlers
// =========================

// Click outside to close
window.addEventListener("click", (e) => {
  if (resumeModal && e.target === resumeModal) {
    resumeModal.classList.remove("active");
  }
  if (modal && e.target === modal) {
    modal.classList.remove("active");
    resetModalMedia();
  }
});

// Escape key to close
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