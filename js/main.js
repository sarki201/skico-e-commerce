const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const loginRegisterBtn = document.querySelectorAll(".login-register-btn");
const loginRegisterView = document.querySelectorAll(".login-signup");

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

const openModal = (modal) => {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};
const closeModal = (modal) => {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};


loginRegisterBtn.forEach(btn => {
  btn.addEventListener('click', ()=>{
    loginRegisterView.forEach(view => {
      view.classList.toggle("active");
    })
  })
})