window.addEventListener('load', function () {

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
        let currentSrc = video.getAttribute("src");
        let newSrc;

        if (currentSrc.includes("_bar")) {
            newSrc = currentSrc.replace(/_bar/g, "");
        } else {
            newSrc = currentSrc.replace(/(\.mp4)$/, "_bar$1");
        }

        video.setAttribute("src", newSrc);

        imgs.forEach(img => {
            let currentSrc = img.getAttribute("src");
            let currentAlt = img.getAttribute("alt");

            if (currentSrc.includes("_bar")) {
                currentSrc = currentSrc.replace(/_bar/g, "");
                currentAlt = currentAlt.replace(/_bar/g, "");
            } else {
                currentSrc = currentSrc.replace(/(_\d+)(\.\w+)$/, "_bar$1$2");
                currentAlt = currentAlt.replace(/(_\d+)/, "_bar$1");
            }

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

    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month, 0)
    const endDayCount = endDate.getDate()
    const lastMonthEndDate = new Date(year, month - 1, 0)
    const lastMonthendDayCount = lastMonthEndDate.getDate()
    const startDay = startDate.getDay()
    let dayCount = 1
    let calendarHtml = ''

    calendarHtml += '<table>'
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) { // 6週にしておくと安全
        calendarHtml += '<tr>'
        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            } else if (dayCount > endDayCount) {
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
            } else {
                // 🦈 イベントデー
                let specialClass = ''
                if ((month === 11 && dayCount === 27) || (month === 6 && dayCount === 26) || (month === 10 && dayCount === 30) || (month === 8 && dayCount === 30) || (month === 7 && dayCount === 14)) {
                    specialClass = 'shark-day'
                }
                calendarHtml += `<td class="${specialClass}">${dayCount}</td>`
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    document.querySelector('.newsSection__calendar').innerHTML = calendarHtml
});

document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('.header');

    for (let i = 0; i < smoothScrollTrigger.length; i++) {
        smoothScrollTrigger[i].addEventListener('click', (e) => {
            e.preventDefault();

            let href = smoothScrollTrigger[i].getAttribute('href');
            let targetElement = document.getElementById(href.replace('#', ''));

            if (targetElement) {
                const rect = targetElement.getBoundingClientRect().top;
                const offset = window.scrollY;

                // 767px以下の場合のみヘッダーの高さを考慮
                const gap = window.innerWidth <= 767 && header ? header.offsetHeight : 0;

                const target = rect + offset - gap;

                window.scrollTo({
                    top: target,
                    behavior: 'smooth',
                });
            }
        });
    }
});