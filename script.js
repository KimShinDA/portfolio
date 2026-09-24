const resumeModal = document.getElementById("resumeModal");
const certModal = document.getElementById("certModal");
const resumeBtn = document.getElementById("resumeBtn");
const closeResume = document.getElementById("closeResume");
const closeCert = document.getElementById("closeCert");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalPlaceholder = document.getElementById("modalPlaceholder");

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

function closeModal(modal) {
  modal.classList.remove("active");
}

function openCertificate(title, imagePath) {
  modalTitle.textContent = title;
  modalImage.style.display = "none";
  modalPlaceholder.style.display = "none";
  modalPlaceholder.textContent = "";

  modalImage.src = imagePath;

  modalImage.onload = () => {
    modalImage.style.display = "block";
  };

  modalImage.onerror = () => {
    modalPlaceholder.textContent =
      "Certificate image not found. Please check the file path.";
    modalPlaceholder.style.display = "block";
  };

  certModal.classList.add("active");
}

resumeBtn.addEventListener("click", () => {
  resumeModal.classList.add("active");
});

closeResume.addEventListener("click", () => {
  closeModal(resumeModal);
});

closeCert.addEventListener("click", () => {
  closeModal(certModal);
});

document.querySelectorAll(".cert").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    const imagePath = certificateImages[card.dataset.cert];

    openCertificate(title, imagePath);
  });
});

window.addEventListener("click", (event) => {
  if (event.target === resumeModal) {
    closeModal(resumeModal);
  }

  if (event.target === certModal) {
    closeModal(certModal);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(resumeModal);
    closeModal(certModal);
  }
});