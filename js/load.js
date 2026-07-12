window.addEventListener('load', loading);
const loadBG = document.querySelector('.load');
function loading() {
    document.body.classList.add('no-scroll');
    // setTimeout(function(){
    // document.body.style.overflow = 'hidden';2
    setTimeout(function () {
        loadBG.classList.add('no-active');
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');

        // document.body.style.overflow = '';
    }, 7000);
}

const reload = document.querySelector('.footer__btn');
reload.addEventListener('click', function loading () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    loadBG.classList.remove('no-active');
    document.body.classList.add('no-scroll');
    setTimeout(function () {
        loadBG.classList.add('no-active');
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
        // document.body.style.overflow = '';
    }, 7000);
});

$('.load').ripples({
    // resolution: 1000, //波紋が広がる速さ
    // dropRadius: 1, //波紋の大きさ
    // perturbance: 0.1 //波紋の揺れの量
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});

$('.background').ripples({
    // resolution: 1000, //波紋が広がる速さ
    // dropRadius: 1, //波紋の大きさ
    // perturbance: 0.1 //波紋の揺れの量
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});

// $('.insta01').ripples({
//     // resolution: 1000, //波紋が広がる速さ
//     // dropRadius: 1, //波紋の大きさ
//     // perturbance: 0.1 //波紋の揺れの量
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
// });

// $('.insta02').ripples({
//     // resolution: 1000, //波紋が広がる速さ
//     // dropRadius: 1, //波紋の大きさ
//     // perturbance: 0.1 //波紋の揺れの量
//     resolution: 512,
//     dropRadius: 20,
//     perturbance: 0.04,
// });