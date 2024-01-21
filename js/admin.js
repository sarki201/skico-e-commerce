const asideColl = document.getElementById('aside-coll');
const catalogBtn = document.getElementById('catalog-btn');
const catalogDropdown = document.getElementById('catalog-dropdown');
const aside = document.getElementById('aside');
const cont = document.getElementsByClassName('container')
const asideDropdown = document.getElementsByClassName('aside-dropdown')
const asideDropdownBtn = document.getElementsByClassName('aside-dropdown-btn')

if (asideColl) {
    asideColl.addEventListener('click', () =>{
        aside.classList.toggle('aside-display');
        for(el in cont) {
            cont[el].classList.toggle('coll');
        }

    })
}
if (catalogBtn) {
    catalogBtn.addEventListener('click', () =>{
        catalogDropdown.classList.toggle('aside-display');
    })
}

for (let i = 0; i <asideDropdownBtn.length; i++) {
    if(asideDropdownBtn[i]) {
        asideDropdownBtn[i].addEventListener('click', () =>{
            asideDropdown[i].classList.toggle('aside-display');
        })
    }
} 
// asideDropdownBtn[0].getElementsByClassName('icon-more')[0].setAttribute("data-lucide", "chevron-down")
console.log();