const btn = document.getElementById('js-btn');

btn.addEventListener('click', function () {
    // CSS
    document.body.classList.toggle('bar');

    // ripples.js初期化
    $('.background').ripples('destroy'); // 一度破棄
    $('.background').css('background-image', 'none'); // CSS更新
    $('.background').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    }); // 再初期化

    const video = document.querySelector('video');
    const imgs = document.querySelectorAll('img');
    // console.log(imgs);
    let currentSrc = video.getAttribute("src");
    let newSrc;

    if (currentSrc.includes("_bar")) {
        // 含まれていれば削除
        newSrc = currentSrc.replace(/_bar/g, "");
    } else {
        // 含まれていなければ挿入
        newSrc = currentSrc.replace(/(\.mp4)$/, "_bar$1");
    }

    video.setAttribute("src", newSrc);


    imgs.forEach(img => {
        let currentSrc = img.getAttribute("src");
        let currentAlt = img.getAttribute("alt");

        // _bar が含まれているかチェック
        if (currentSrc.includes("_bar")) {
            // 含まれていれば削除
            currentSrc = currentSrc.replace(/_bar/g, "");
            currentAlt = currentAlt.replace(/_bar/g, "");
        } else {
            // 含まれていなければ挿入
            // 末尾番号の前に _bar を挿入する例: img_xxx_01.jpg → img_xxx_bar_01.jpg
            currentSrc = currentSrc.replace(/(_\d+)(\.\w+)$/, "_bar$1$2");
            currentAlt = currentAlt.replace(/(_\d+)/, "_bar$1");
        }

        // 書き換え
        img.setAttribute("src", currentSrc);
        img.setAttribute("alt", currentAlt);
    });


});

function toggleFollowButton() {
    const start = document.querySelector('.jsFollowStart');
    const end = document.querySelector('.jsFollowEnd');
    const objectArray = document.querySelectorAll('.js-follow');

    if (!btn) return;

    const startRect = start.getBoundingClientRect();
    const endRect = end.getBoundingClientRect();

    const isObjectInViewport = startRect.bottom < window.innerHeight;
    const isObjectOutViewport = endRect.top < window.innerHeight;

    objectArray.forEach(object => {
        if (isObjectInViewport && !isObjectOutViewport) {
            object.classList.add('is-active');
        } else {
            object.classList.remove('is-active');
        }
    });
}

window.addEventListener("scroll", toggleFollowButton);
window.addEventListener("resize", toggleFollowButton);
toggleFollowButton();