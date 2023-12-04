const anotherButton = document.querySelector('.footerButton');
anotherButton.addEventListener('click', function () {
    const wrap = document.querySelector('.wrap');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const mainwrap = document.querySelector('.mainwrap');
    const h2 = document.querySelectorAll('h2');
    wrap.classList.toggle('another');
    header.classList.toggle('another');
    mainwrap.classList.toggle('mainAnother');
    footer.classList.toggle('footerAnother');
    h2.classList.toggle('h2Another');


    // // トグルボタンをクリックした際の処理
    // toggleButton.addEventListener('click', function (event) {
    //     event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
    //     drawerMenu.classList.toggle('open');
    //     toggleButton.classList.toggle('close');
    // });

    // // ドキュメント内のアンカーリンクを取得します
    // const anchorLinks = document.querySelectorAll('a');
    // for (let i = 0; i < anchorLinks.length; i++) {
    //     // アンカーリンクがクリックされた際の処理
    //     anchorLinks[i].addEventListener('click', function () {
    //         drawerMenu.classList.remove('open');
    //         toggleButton.classList.remove('close');
    //     });
    // }

    // // ドキュメント内をクリックした際の処理
    // document.addEventListener('click', function (event) {
    //     const targetElement = event.target;

    //     // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
    //     if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
    //         drawerMenu.classList.remove('open');
    //         toggleButton.classList.remove('close');
    //     }
    // });
});