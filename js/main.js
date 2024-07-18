const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const openSectionButtons = document.querySelectorAll("[data-section-target]");
const overlay = document.getElementById("overlay");
const loginRegisterBtn = document.querySelectorAll(".login-register-btn");
const loginRegisterView = document.querySelectorAll(".login-signup");
const faqQuestions = document.querySelectorAll('.faq__question');
const faqAnswers = document.querySelectorAll('.faq__answer');

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
  btn.addEventListener('click', () => {
    loginRegisterView.forEach(view => {
      view.classList.toggle("active");
    })
  })
})

if (openSectionButtons) {
  openSectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = document.querySelector(button.dataset.sectionTarget);
      if (section) {
        const sections = document.querySelectorAll(".profile-section.active");
        sections.forEach(sec => {
          sec.classList.remove('active')
        })
        section.classList.add('active')
      }
    })
  });
}

if (faqQuestions) {
  for (let i = 0; i < faqQuestions.length; i++) {
    if (faqQuestions[i]) {
      faqQuestions[i].addEventListener('click', () => {
        faqAnswers[i].classList.toggle('active');
      })
    }
  }
}


// const openSection = (section) => {
//   if (section == null) return;
//   section.classList.add("active");
//   const sections = document.querySelectorAll(".profile-section.active");
//   sections.forEach(section =>{
//     if(section) {}
//   })
// };

// const closeSections = (modal) => {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// };

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// const picsClickPrev = document.querySelector(".product__pics .controls .left")
// const picsClickNext = document.querySelector(".product__pics .controls .right")
// const picsToClick = document.querySelectorAll(".product__pics .pics>img")
// picsClickNext.addEventListener('click', ()=>{
//   picsToClick.pop()
// })
// picsClickPrev.addEventListener('click', ()=>{
//   console.log(picsToClick[1].setAttribute("src", "pictures/products/f1.jpg"));
//   picsToClick.forEach((i ,img) =>{
//     picsToClick[i - 1].setAttribute('src',img.getAttribute("src"));
//     console.log(img.getAttribute('src'))
//     console.log(i)
//   })
//   for(let i=0; i<picsToClick.length; i++) {
//     let att= picsToClick[i - 1].getAttribute("src")
//     picsToClick[i].setAttribute("src", att);
//   }
// })
