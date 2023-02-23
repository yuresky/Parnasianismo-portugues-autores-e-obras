let goncalvescrespo = document.getElementById('goncalvescrespo')
let joaopenha = document.getElementById('joaopenha')
let antoniofeijo = document.getElementById('antoniofeijo')
let cesarioverde = document.getElementById('cesarioverde')
let titulo = document.getElementById('titulo')
let header = document.getElementById('header')
let stars = document.getElementById('stars')
let stars2 = document.getElementById('stars2')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    cesarioverde.style.marginLeft = value *0.50 +'px';
    cesarioverde.style.transform = `scale(${scale}) translateX(${translateX}px)`;
    joaopenha.style.marginLeft = value * 0.45 + 'px';
    antoniofeijo.style.marginLeft = value * 1.15 + 'px';
    goncalvescrespo.style.marginLeft = value * 0.45 + 'px';
    
})

//const toggleMenu = document.querySelector('.toggle');
//const navigation = document.querySelector('.navigation');
//toggleMenu.onclick = function(){
  //toggleMenu.classList.toggle('active');
  //navigation.classList.toggle('active');
//}