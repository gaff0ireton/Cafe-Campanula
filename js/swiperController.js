const swiper = new Swiper(".swiper", {
    // スライダーのオプションを設定
    loop: false, // スライダーをループさせる
    speed: 1500, // スライドの切り替え速度（デフォルトは300）
    autoplay: false, // 最初は自動再生を無効
    pagination: {
    el: '.swiper-pagination',
  },
});

const swiperFood = new Swiper(".swiperFood", {
    // スライダーのオプションを設定
    loop: false, // スライダーをループさせる
    speed: 1500, // スライドの切り替え速度（デフォルトは300）
    autoplay: false, // 最初は自動再生を無効
    pagination: {
    el: '.swiper-pagination',
  },
});

const swiperDrink = new Swiper(".swiperDrink", {
    // スライダーのオプションを設定
    loop: false, // スライダーをループさせる
    speed: 1500, // スライドの切り替え速度（デフォルトは300）
    autoplay: false, // 最初は自動再生を無効
    pagination: {
    el: '.swiper-pagination',
  },
});

$('.background').ripples({
    // resolution: 1000, //波紋が広がる速さ
    // dropRadius: 1, //波紋の大きさ
    // perturbance: 0.1 //波紋の揺れの量
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});


// // スクロールイベントを検知
// window.addEventListener("scroll", function () {
//     // スライダーのコンテナ要素を取得
//     const sliderContainer = document.querySelector(".swiper");
//     // スライダーのコンテナの位置情報を取得
//     const rect = sliderContainer.getBoundingClientRect();
//     // ウィンドウの高さを取得（クロスブラウザ対応）
//     const windowHeight =
//         window.innerHeight || document.documentElement.clientHeight;
//     if (rect.top < windowHeight && rect.bottom >= 0) {
//         // スライダーが画面内に入った場合、自動再生を有効にして開始
//         swiper.params.autoplay.delay = 1000; // 自動再生の遅延設定
//         swiper.autoplay.start();
//     } else {
//         // 画面外に出た場合、自動再生を停止
//         swiper.autoplay.stop();
//     }
// });