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

function followObject() {
    const start = document.querySelector('.jsFollowStart');
    const end = document.querySelector('.jsFollowEnd');
    const objectArray = document.querySelectorAll('.js-follow');
    const header = document.getElementById('header');
    const LogoArray = document.querySelectorAll('.header__logo a svg g g path');

    if (!start || !end) return;

    const startRect = start.getBoundingClientRect();
    const endRect = end.getBoundingClientRect();

    // start が画面外かどうか
    const isStartOut = startRect.bottom < 0 || startRect.top > window.innerHeight;
    const isEndOut = endRect.bottom < 0 || endRect.top > window.innerHeight;

    objectArray.forEach(object => {
        if (isStartOut && isEndOut) {
            object.classList.add('is-active');
        } else {
            object.classList.remove('is-active');
        }
    });

    LogoArray.forEach(logo => {
        if (isStartOut) {
            logo.classList.add('js-over');
        } else {
            logo.classList.remove('js-over');
        }
    });
}

function header() {
    const header = document.getElementById('header');
    const headerLogo = document.querySelector('.header__logo a svg');
    const mainVisual = document.querySelector('.mainVisual');

    const headerRect = header.getBoundingClientRect();
    const headerLogoRect = headerLogo.getBoundingClientRect();
    const mainVisualRect = mainVisual.getBoundingClientRect();
}

window.addEventListener("scroll", followObject);
window.addEventListener("resize", followObject);
followObject();

const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month,  0) // 月の最後の日を取得
const endDayCount = endDate.getDate() // 月の末日
const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数

calendarHtml += '<h4>' + year  + '/' + month + '</h4>'
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>'
}

for (let w = 0; w < 5; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            let num = lastMonthendDayCount - startDay + d + 1
            calendarHtml += '<td class="is-disabled">' + num + '</td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            let num = dayCount - endDayCount
            calendarHtml += '<td class="is-disabled">' + num + '</td>'
            dayCount++
        } else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('.newsSection__calendar').innerHTML = calendarHtml