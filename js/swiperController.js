const swiper = new Swiper(".swiper", {
    // スライダーのオプションを設定
    loop: true, // スライダーをループさせる
    speed: 1500, // スライドの切り替え速度（デフォルトは300）
    autoplay: false, // 最初は自動再生を無効
});
// スクロールイベントを検知
window.addEventListener("scroll", function () {
    // スライダーのコンテナ要素を取得
    const sliderContainer = document.querySelector(".swiper");
    // スライダーのコンテナの位置情報を取得
    const rect = sliderContainer.getBoundingClientRect();
    // ウィンドウの高さを取得（クロスブラウザ対応）
    const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom >= 0) {
        // スライダーが画面内に入った場合、自動再生を有効にして開始
        swiper.params.autoplay.delay = 1000; // 自動再生の遅延設定
        swiper.autoplay.start();
    } else {
        // 画面外に出た場合、自動再生を停止
        swiper.autoplay.stop();
    }
});