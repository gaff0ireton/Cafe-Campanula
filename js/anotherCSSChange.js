const btn = document.getElementById('js-btn');
const imgArrayBar = [
    'img/viewAnother.jpg',
    'img/menuAnother01.jpg',
    'img/menuAnother02.jpg',
    'img/menuAnother03.jpg',
    'img/menuAnother04.jpg',
    'img/menuAnother05.jpg',
    'img/drinkMenuAnother.jpg',
    'img/goodsAnother01.jpg',
    'img/goodsAnother02.jpg',
    'img/goodsAnother03.jpg'
];
const imgArrayCafe = [
    'img/img_news_01.jpg',
    'img/img_news_02.jpg',
    'img/img_news_03.jpg',
    'img/img_concept.jpg',
    'img/img_food_01.jpg',
    'img/img_food_02.jpg',
    'img/img_food_03.jpg',
    'img/img_food_04.jpg',
    'img/img_food_05.jpg',
    'img/img_food_06.jpg',
    'img/img_drink_01.jpg',
    'img/img_drink_02.jpg',
    'img/img_drink_03.jpg',
    'img/img_drink_04.jpg',
    'img/img_drink_05.jpg',
    'img/img_drink_06.jpg',
    'img/img_takeout_01.jpg',
    'img/img_takeout_02.jpg',
    'img/img_takeout_03.jpg',
    'img/img_takeout_04.jpg',
    'img/img_takeout_05.jpg',
    'img/img_takeout_06.jpg',
];

btn.addEventListener('click', function () {
    document.body.classList.toggle('bar');
    $('.background').ripples('destroy'); // 一度破棄
    $('.background').css('background-image', 'none'); // CSS更新
    $('.background').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    }); // 再初期化
});