const asideColl = document.getElementById('aside-coll');
const aside = document.getElementById('aside');
const asideOverlay = document.getElementById('aside-overlay');
const asideDropdown = document.querySelectorAll('.aside-dropdown');
const asideDropdownBtn = document.querySelectorAll('.aside-dropdown-btn');
const cont = document.querySelectorAll('.container');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const dropArea = document.getElementById('product-image');
const inputFile = document.getElementById('product-img');
const imageView = document.getElementById('img-view');



// =====ASIDE

asideColl.addEventListener('click', () =>{          
    aside.classList.toggle('active');
    for(el in cont) {
        cont[el].classList.toggle('coll'); 
    }
})

asideOverlay.addEventListener('click', ()=>{
    aside.classList.remove('active');
    for(el in cont) {
        cont[el].classList.add('coll'); 
    }
})

// asideDropdownBtn.map((btn, i) =>{
//     btn.addEventListener('click', ()=>{
//         asideDropdown[i].classList.toggle('aside-display')
//     })
// })

for (let i = 0; i <asideDropdownBtn.length; i++) {
    if(asideDropdownBtn[i]) {
        asideDropdownBtn[i].addEventListener('click', () =>{
            asideDropdown[i].classList.toggle('aside-display');
        })
    }
}

// asideDropdownBtn[0].getElementsByClassName('icon-more')[0].setAttribute("data-lucide", "chevron-down")

// =======MODAL

openModalButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
        e.preventDefault();
        const modal = button.closest('.modal.active');
        closeModal(modal)
    })
})

overlay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    })
    overlay.classList.remove('active');
})

function openModal(modal) {
    if(modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// ======IMG DRAG & DROP

inputFile.addEventListener("change", uploadImage)
function uploadImage() {
    let btns = {};
    
    const selectedFiles = [...inputFile.files];
    selectedFiles.map((img, i) => {
        const imgLink = URL.createObjectURL(img);
        URL.revokeObjectURL(img);
        imageView.innerHTML += 
            `<div class="add-product-img__cont">
                <img src="${imgLink}" alt="" />
                <button id="img-close-btn${i +1}" class="img-close">&times;</button>
            </div>`;
            btns[`btn${i + 1}`] = document.getElementById(`img-close-btn${i + 1}`)
            btns[`btn${i +1}`].addEventListener('click', (e)=>{
            e.preventDefault();
        })
    })
    
}



function delImg(i) {
    inputFile.files.splice(i, 1)
}
dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
dropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})

// console.log(inputFile.files[0])