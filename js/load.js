window.addEventListener('load', loading);
const loadBG = document.querySelector('.loading_bg');

function loading() {
    // setTimeout(function(){
    // document.body.style.overflow = 'hidden';
    setTimeout(function () {
        loadBG.classList.add('active');
        // document.body.style.overflow = '';
    }, 6500);
}


$('.loading_bg').ripples({
    // resolution: 1000, //波紋が広がる速さ
    // dropRadius: 1, //波紋の大きさ
    // perturbance: 0.1 //波紋の揺れの量
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});
const reload = document.querySelector('.footerButton');
reload.addEventListener('click', function loading () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    loadBG.classList.remove('active');
    setTimeout(function () {
        loadBG.classList.add('active');
        // document.body.style.overflow = '';
    }, 6500);
});