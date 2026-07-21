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

  // ============================================================
  // カレンダー生成スクリプト（データ構築とレンダリングを分離）
  // ============================================================

  const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // ------------------------------------------------------------
  // イベント日（{ month, day }）
  // ------------------------------------------------------------
  const EVENTS = [
    { month: 11, day: 27 },
    { month: 6, day: 26 },
    { month: 10, day: 30 },
    { month: 8, day: 30 },
    { month: 7, day: 14 },
  ]

  // ------------------------------------------------------------
  // 小さなヘルパー
  // ------------------------------------------------------------
  const pad = (n) => String(n).padStart(2, '0')

  // イベント日かどうか
  function isEventDay(month, day) {
    return EVENTS.some((e) => e.month === month && e.day === day)
  }

  // 本来の定休日か（火曜 / 第3水曜）
  function isRegularHoliday(year, month, day) {
    const date = new Date(year, month - 1, day)
    const weekday = date.getDay()

    if (weekday === 2) return true                          // 火曜日
    if (weekday === 3 && Math.ceil(day / 7) === 3) return true // 第3水曜日

    return false
  }

  // ------------------------------------------------------------
  // 休日集合を作る（イベントと重なった定休日は翌営業日へ振替）
  // 戻り値: Set<number>（その月の「休みになる日」）
  // ------------------------------------------------------------
  function buildHolidays(year, month, lastDay) {
    const holidays = new Set()

    for (let d = 1; d <= lastDay; d++) {
      if (!isRegularHoliday(year, month, d)) continue

      // イベントと重ならない定休日は、そのまま休み
      if (!isEventDay(month, d)) {
        holidays.add(d)
        continue
      }

      // イベントと重なったら、次の営業日を探して振替
      let substitute = d + 1
      while (
        substitute <= lastDay &&
        (isRegularHoliday(year, month, substitute) || isEventDay(month, substitute))
      ) {
        substitute++
      }

      // 月内に振替先が見つかった場合のみ登録
      // （月末を超える場合は今月は振替なし。翌月へ持ち越したい場合は要拡張）
      if (substitute <= lastDay) {
        holidays.add(substitute)
      }
    }

    return holidays
  }

  // ------------------------------------------------------------
  // カレンダーの「データ」を組み立てる
  // レンダリングには一切依存しない純粋なデータ構造を返す
  // ------------------------------------------------------------
  function buildCalendar(baseDate = new Date()) {
    const year = baseDate.getFullYear()
    const month = baseDate.getMonth() + 1
    const today = baseDate.getDate()

    // 表示中の月が「今月」かどうか（today ハイライト用）
    const now = new Date()
    const isCurrentMonth =
      now.getFullYear() === year && now.getMonth() + 1 === month

    const firstDay = new Date(year, month - 1, 1).getDay() // 月初の曜日
    const lastDay = new Date(year, month, 0).getDate()      // 今月の日数
    const prevLastDay = new Date(year, month - 1, 0).getDate() // 前月の日数

    const holidays = buildHolidays(year, month, lastDay)

    // 必要な週数だけ確保（6固定にしない）
    const weekCount = Math.ceil((firstDay + lastDay) / 7)

    const weeks = []
    let dayCount = 1

    for (let w = 0; w < weekCount; w++) {
      const week = []

      for (let d = 0; d < 7; d++) {
        const cellIndex = w * 7 + d

        if (cellIndex < firstDay) {
          // 前月の日（グレー表示）
          const num = prevLastDay - firstDay + cellIndex + 1
          week.push({ day: num, inMonth: false })
        } else if (dayCount > lastDay) {
          // 翌月の日（グレー表示）
          const num = dayCount - lastDay
          week.push({ day: num, inMonth: false })
          dayCount++
        } else {
          // 今月の日
          week.push({
            day: dayCount,
            inMonth: true,
            isHoliday: holidays.has(dayCount),
            isEvent: isEventDay(month, dayCount),
            isToday: isCurrentMonth && dayCount === today,
          })
          dayCount++
        }
      }

      weeks.push(week)
    }

    return { year, month, today, weeks }
  }

  // ------------------------------------------------------------
  // データから HTML 文字列を生成する（描画専任）
  // ------------------------------------------------------------
  function renderCalendar({ weeks }) {
    const rows = []

    // ヘッダー行
    rows.push(
      '<tr>' +
      WEEKDAYS.map((w) => `<th scope="col">${w}</th>`).join('') +
      '</tr>'
    )

    // 各週
    for (const week of weeks) {
      const cells = week.map((cell) => {
        if (!cell.inMonth) {
          return `<td class="is-disabled">${cell.day}</td>`
        }

        const classList = []
        if (cell.isHoliday) classList.push('holiday')
        if (cell.isEvent) classList.push('shark-day')
        if (cell.isToday) classList.push('today')

        const classAttr = classList.length ? ` class="${classList.join(' ')}"` : ''
        return `<td${classAttr}>${cell.day}</td>`
      })

      rows.push('<tr>' + cells.join('') + '</tr>')
    }

    return `<table><caption class="visually-hidden">Calendar</caption>${rows.join('')}</table>`
  }

  // ------------------------------------------------------------
  // 実行（DOM への反映）
  // ------------------------------------------------------------
  function initCalendar() {
    const data = buildCalendar()

    const output = `${data.year}-${pad(data.month)}-${pad(data.today)}`

    const dateEl = document.getElementById('date')
    const calendarEl = document.querySelector('.newsSection__calendar')

    if (dateEl) dateEl.textContent = output
    if (calendarEl) calendarEl.innerHTML = renderCalendar(data)
  }

  // DOM 構築後に実行（読み込みタイミングで落ちないように）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendar)
  } else {
    initCalendar()
  }
});

const swiper = new Swiper(".swiper", {
  // スライダーのオプションを設定
  loop: true, // スライダーをループさせる
  speed: 1500, // スライドの切り替え速度（デフォルトは300）
  autoplay: false, // 最初は自動再生を無効
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperFood = new Swiper(".swiperFood", {
  // スライダーのオプションを設定
  loop: true, // スライダーをループさせる
  speed: 1500, // スライドの切り替え速度（デフォルトは300）
  autoplay: false, // 最初は自動再生を無効
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperDrink = new Swiper(".swiperDrink", {
  // スライダーのオプションを設定
  loop: true, // スライダーをループさせる
  speed: 1500, // スライドの切り替え速度（デフォルトは300）
  autoplay: false, // 最初は自動再生を無効
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperTakeOut = new Swiper(".swiperTakeOut", {
  // スライダーのオプションを設定
  loop: true, // スライダーをループさせる
  speed: 1500, // スライドの切り替え速度（デフォルトは300）
  autoplay: false, // 最初は自動再生を無効
  pagination: {
    el: '.swiper-pagination',
  },
});

const swipers = [
  swiper,
  swiperFood,
  swiperDrink,
  swiperTakeOut
];

window.addEventListener('load', function () {

  const btn = document.getElementById('is-btn');
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
      open_hours: "10:00 - 18:00 (L.O. 17:30)",
      button: "Switch to BAR",
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
      takeout: [
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
      open_hours: "19:00 - 25:00 (L.O. 24:30)",
      button: "Switch to CAFE",
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
          ttl: "アブサン"
        },
        {
          ttl: "オールドファッションド"
        },
        {
          ttl: "アビエーション"
        },
        {
          ttl: "ジョーズ"
        }
      ],
      takeout: [
        {
          ttl: "ボトルカクテル"
        },
        {
          ttl: "ウイスキーボンボンチョコレート"
        },
        {
          ttl: "洋酒入りパウンドケーキ"
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

    // 1. 単一テキストの書き換え（既存のコード）
    document.querySelectorAll("[data-text]").forEach(el => {
      const key = el.dataset.text;
      el.textContent = theme[key];
    });

    // 2. メニュー（figcaption）の書き換え（今回追加するコード）
    document.querySelectorAll("[data-category]").forEach(section => {
      // HTMLから "food" などのカテゴリ名を取得
      const category = section.dataset.category;
      const menuData = theme[category];

      // データ名が統一されたので、そのまま配列を取得できる！
      const figcaptions = section.querySelectorAll("figcaption");
      const images = section.querySelectorAll("img"); // ← 【追加】imgも取得

      // 万が一データが存在しない場合のエラーを防ぐためのif文
      figcaptions.forEach((caption, index) => {
        if (menuData[index]) {
          // figcaptionのテキストを書き換え
          caption.textContent = menuData[index].ttl;

          // imgのalt属性も書き換え
          if (images[index]) {
            images[index].alt = menuData[index].ttl; // ← 【追加】altを書き換え
          }
        }
      });
    });
  }

  btn.addEventListener('click', function () {

    //txt
    currentTheme = currentTheme === "normal" ? "bar" : "normal";
    applyTheme();

    // CSS
    document.body.classList.toggle('bar');
    console.log(currentTheme);
    console.log(document.body.classList.contains("bar"));


    // ripples.js初期化
    $('.background').ripples('destroy'); // 一度破棄
    $('.background').css('background-image', 'none'); // CSS更新
    $('.background').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    }); // 再初期化

    //swiper初期化
    swipers.forEach(swiper => swiper.slideTo(0));

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

      if (img.classList.contains("no-change")) {
        return;
      }

      if (currentSrc.includes("_bar")) {
        currentSrc = currentSrc.replace(/_bar/g, "");
      } else {
        if (/_\d+(\.\w+)$/.test(currentSrc)) {
          currentSrc = currentSrc.replace(
            /(_\d+)(\.\w+)$/,
            "_bar$1$2"
          );
        } else {
          currentSrc = currentSrc.replace(
            /(\.\w+)$/,
            "_bar$1"
          );
        }
      }

      img.setAttribute("src", currentSrc);
      img.setAttribute("alt", currentAlt);
    });
  });

  menu_btn.addEventListener('click', function () {
    document.body.classList.toggle('no-scroll');
    btnArray.forEach(btn => {
      if (btn.classList.contains('is-over')) {
        btn.classList.toggle('is-click');
      }
    });
  });

  document.querySelectorAll('.header__nav a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
      document.body.classList.toggle('no-scroll');
      btnArray.forEach(btn => {
        if (btn.classList.contains('is-over')) {
          btn.classList.toggle('is-click');
        }
      });
    });
  });

  function followObject() {
    const start = document.querySelector('.jsFollowStart');
    const end = document.querySelector('.jsFollowEnd');
    const objectArray = document.querySelectorAll('.is-follow');
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
      target.classList.toggle('is-over', isStartOut);
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

        const target = rect + offset - gap;

        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      }
    });
  };

  const btn = document.querySelector('.is-pagetop');

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
  const items = document.querySelectorAll('.is-acc');

  items.forEach(item => {
    const btn = item.querySelector('.is-acc-btn');
    const content = item.querySelector('.is-acc-content');

    btn.addEventListener('click', () => {
      const expanded = item.classList.toggle('is-open');
      content.style.height = expanded ? content.scrollHeight + "px" : "0px";
    });
  });
});
