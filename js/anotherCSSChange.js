/* スクロールでin-viewクラス付与
----------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // 1. 通常の要素用（50%で発火）
  const standardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-view');
        standardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  // 2. 背景などの大きい要素用（0% = 1pxでも入ったら発火）
  const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-view');
        bgObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  // 3. 振り分け処理
  const targets = document.querySelectorAll('.is-inview');
  targets.forEach(target => {
    if (target.classList.contains('menuSection')) {
      // 背景クラスを持っていれば 0% 用で監視
      bgObserver.observe(target);
    } else {
      // それ以外は 50% 用で監視
      standardObserver.observe(target);
    }
  });

  // const rect = document.querySelector('.menuSection_bg').getBoundingClientRect();
  // console.log(rect);

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

window.addEventListener('load', function () {

  const btn = document.getElementById('js-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const menu_btn = document.querySelector('.header__btn');
  const btnArray = document.querySelectorAll('.header__btn span');

  let currentTheme = "normal";
  let currentSlideIndex = 0;

  const themes = {
    normal: {
      title: "Coffee Shop",
      cap: "ちょっと怖くて、すごくかわいい。",
      cap_txt: "ちょっぴりユニークで、とびきりかわいい。\nサメが顔をのぞかせるメニューや、海を感じるインテリアで、日常を忘れて楽しめる時間をお届けします。",
      button: "More",
      sliderFood: [
        {
          ttl: "サメちゃんサンデー"
        },
        {
          ttl: "サメちゃんショートケーキ"
        },
        {
          ttl: "サメちゃんワッフル"
        },
        {
          ttl: "サメちゃんパンケーキ"
        }
      ],
      sliderDrink: [
        {
          ttl: "サメちゃんメロンフロート"
        },
        {
          ttl: "サメちゃんディープブルー"
        },
        {
          ttl: "サメちゃんベリーフラッペ"
        },
        {
          ttl: "サメちゃんロストバケーション"
        },
        {
          ttl: "サメちゃんアイスフロート"
        },
        {
          ttl: "サメちゃんネード"
        }
      ],
      swiperTakeOut: [
        {
          ttl: "サメちゃんドーナツ"
        },
        {
          ttl: "サメちゃんマカロン"
        },
        {
          ttl: "サメちゃんマフィン"
        },
        {
          ttl: "サメちゃんクッキー"
        },
        {
          ttl: "サメちゃんアイス"
        },
        {
          ttl: "サメちゃんチョコレート"
        }
      ]
    },
    bar: {
      title: "Bar",
      cap: "静かな海ほど、深く酔える。",
      cap_txt: "海の底を思わせる薄暗い空間。\nゆっくりと泳ぐサメを眺めながら、\n日常を忘れる一杯を。",
      button: "Drink",
      food: [
        {
          ttl: "サメちゃんサンデー"
        },
        {
          ttl: "サメちゃんショートケーキ"
        },
        {
          ttl: "サメちゃんワッフル"
        },
        {
          ttl: "サメちゃんパンケーキ"
        }
      ],
      drink: [
        {
          ttl: "ブラッティーマリー"
        },
        {
          ttl: "ロングアイランドアイスティー"
        },
        {
          ttl: "サメちゃんベリーフラッペ"
        },
        {
          ttl: "サメちゃんロストバケーション"
        },
        {
          ttl: "サメちゃんアイスフロート"
        },
        {
          ttl: "サメちゃんネード"
        }
      ],
      takeOut: [
        {
          ttl: "サメちゃんドーナツ"
        },
        {
          ttl: "サメちゃんマカロン"
        },
        {
          ttl: "サメちゃんマフィン"
        },
        {
          ttl: "サメちゃんクッキー"
        },
        {
          ttl: "サメちゃんアイス"
        },
        {
          ttl: "サメちゃんチョコレート"
        }
      ]
    }
  };

  function applyTheme() {
    const theme = themes[currentTheme];
    console.log(theme);

    document.querySelectorAll("[data-text]").forEach(el => {
      const key = el.dataset.text;
      el.textContent = theme[key];
    });

  }

  btn.addEventListener('click', function () {

    //txt
    currentTheme = currentTheme === "normal" ? "bar" : "normal";
    currentSlideIndex = 0;
    applyTheme();

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

  menu_btn.addEventListener('click', function () {
    document.body.classList.toggle('no-scroll');
    btnArray.forEach(btn => {
      if (btn.classList.contains('js-over')) {
        btn.classList.toggle('js-click');
      }
    });
  });

  document.querySelectorAll('.header__nav a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
      document.body.classList.toggle('no-scroll');
      btnArray.forEach(btn => {
        if (btn.classList.contains('js-over')) {
          btn.classList.toggle('js-click');
        }
      });
    });
  });

  function followObject() {
    const start = document.querySelector('.jsFollowStart');
    const end = document.querySelector('.jsFollowEnd');
    const objectArray = document.querySelectorAll('.js-follow');
    const header = document.getElementById('header');
    const targets = document.querySelectorAll('.header__logo a svg g g path, .header__btn span');

    if (!start || !end) return;

    const startRect = start.getBoundingClientRect();
    const endRect = end.getBoundingClientRect();

    const isStartOut = startRect.bottom < 0 || startRect.top > window.innerHeight;
    const isStartPassed = startRect.bottom <= 0;
    const isEndReached = endRect.bottom <= window.innerHeight;

    objectArray.forEach(object => {
      if (isStartPassed && !isEndReached) {
        object.classList.add('is-active');
      } else {
        object.classList.remove('is-active');
      }
    });

    targets.forEach(target => {
      target.classList.toggle('js-over', isStartOut);
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
  const observer = new ResizeObserver(() => {
    followObject();
  });

  observer.observe(document.body);

});


document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo({
    top: target,
    behavior: 'smooth',
  });
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
        const gap = window.innerWidth <= 750 && header ? header.offsetHeight : 0;


        console.log(gap);


        const target = rect + offset - gap;
      }
    });
  };

  const btn = document.querySelector('.js-pagetop');

  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-show', window.scrollY > 300);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* 外部リンクは別タブ
----------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="http"]');

  links.forEach(link => {
    if (!link.href.includes(location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

/* Lazy-load fallback
----------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('loading' in HTMLImageElement.prototype) return;

  images.forEach(img => {
    const src = img.getAttribute('data-src');
    if (src) img.src = src;
  });
});

/* アコーディオン
----------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.js-acc');

  items.forEach(item => {
    const btn = item.querySelector('.js-acc-btn');
    const content = item.querySelector('.js-acc-content');

    btn.addEventListener('click', () => {
      const expanded = item.classList.toggle('is-open');
      content.style.height = expanded ? content.scrollHeight + "px" : "0px";
    });
  });
});
