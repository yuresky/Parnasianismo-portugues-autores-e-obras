let stars = document.getElementById('stars'); // os pontinhos pretos
let stars2 = document.getElementById('stars2'); // os pontinhos pretos
let autoresp1 = document.getElementById('autoresp1');
let autoresp2 = document.getElementById('autoresp2');
let teofilobraga = document.getElementById('teofilobraga'); // o autor do meio

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.bottom = value *0.05 +'%';
    stars2.style.bottom = value *0.025 +'%';
    autoresp1.style.left = value * 0.05 + '%';
    autoresp2.style.left = value * -0.05 + '%';
})

const toggleMenu = document.querySelector('.toggle'); // fazer o botão sanduiche / menu responsivo
const navigation = document.querySelector('.navigation');
    toggleMenu.onclick = function(){
        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');
}