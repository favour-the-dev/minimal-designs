const menu = document.getElementById('menu');
menuopen = false;
const nav = document.querySelector('.nav');
menu.addEventListener('click', ()=>{
    if (!menuopen) {
        menuopen = true;
        nav.style.display = 'flex'
    }
    else {
        menuopen = false;
        nav.style.display = 'none'
    }
})