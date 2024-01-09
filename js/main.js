const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar'); 
const validatorclose = document.getElementById('validator-close');
const validator = document.getElementById('validator');
const popUp = document.getElementById('pop-up');
const popUpClose = document.getElementById('pop-up-close');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

if (validatorclose) {
    validatorclose.addEventListener('click', (e) => {
        e.preventDefault();
        validator.style.display = 'none';
    })
}

if (popUpClose) {
    popUpClose.addEventListener('click', (e) => {
        e.preventDefault();
        popUp.style.display = 'none';
    })    
}



var x = setInterval(function() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() +1);
    tomorrow.setHours(0,0,0,0);;

    const distance = tomorrow - today;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer-tomorrow").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";
      
  }, 1000);


  
  