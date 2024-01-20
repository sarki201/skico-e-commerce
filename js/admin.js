const asideColl = document.getElementById('aside-coll');
const aside = document.getElementById('aside');
const cont = document.getElementsByClassName('container')

if (asideColl) {
    asideColl.addEventListener('click', () =>{
        aside.classList.toggle('aside-display');
        for(el in cont) {
            cont[el].classList.toggle('coll');
        }

    })
}