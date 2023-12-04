const anotherText = document.querySelector('.footerButton');
anotherText.addEventListener('click', function () {
    let iscapAnotherApplied;
    const capText = document.querySelector('.capText');

    iscapAnotherApplied = capText.classList.contains('pAnother');

    const capAnotherText = "The arrival of a great era, the vanguard shaping our future, is embodied in the shark. The ruler of the deep sea, a symbol of intelligence and strength. We must surrender ourselves to its mighty shadow and feel the breath of evolution. The shark is the pioneer of our evolution, and its tremendous strength indicates the direction we should follow in our evolution.Throughout history, humans have faced numerous challenges. However, the shark, through its evolution in the harsh laws of nature, has gained true strength and wisdom. We should learn from the shark and share its intelligence. Following the laws of nature, the shark has survived with strength and remarkable resilience. We too should learn from its survival instinct and move forward into an unknown future.The shark is the symbol of a new era and the guide to our evolution. To carve out our future, we must emulate the strength and wisdom of the shark, riding the waves of evolution. Let us praise the shark and make its great strength the cornerstone of our future.";
    const capTextchart = '神戸北野に店舗を構えるカフェ「Campanula (カムパネルラ)」。 ここでは、サメとの魔法のひとときが待っています。 私たちのカフェは、海の奇妙な美しさをイメージした空間と、可愛らしいサメたちが舞台です。ここでは、サメとの不思議なひとときを楽しむことができます。 サメとの触れ合い、美味しくユニークなお料理、そして新しい友達との出会いが、あなたを夢中にさせるでしょう。私たちの目標は、サメについて学び、彼らの保護に貢献すること。サメとのふれあいが魔法のような思い出に変わる瞬間です。サメたちとともに、新たな冒険が始まります。';

    if (!iscapAnotherApplied) {
        capText.textContent = capTextchart;
    } else {
        capText.textContent = capAnotherText;
    }

    const h3Text = document.querySelectorAll('h3');

    const h3AnotherArray = ['Groly to Shark.',
        'Notice of Business Hours',
        'Chad Hammerheadington',
        'Brandon Chompersmith',
        'Tiffany Sharkbaiter',
        'Derek Finnemore',
        'Crystal Jawsly',
        'DRINK MENU',
        'We have various types of',
        'absinthe',
        'available.',
        '$9.95',
        'bottle',
        'voodoo doll',
        'Ouija board'
    ];

    const h3Array = ['サメとの魔法のひととき',
        '営業時間のお知らせ',
        'サメちゃんタルト',
        'サメちゃんパンケーキ',
        'サメちゃんマカロン',
        'サメちゃんサンデー',
        'サメちゃんアイス',
        'DRINK MENU',
        'FREE',
        'SHARK',
        'DRINK',
        '¥500',
        'がちゃぽん',
        'ぬいぐるみ',
        'アクリルスタンド'
    ];

    let ish3AnotherApplied;

    h3Text.forEach((h3TextItem) => {
        ish3AnotherApplied = h3TextItem.classList.contains('h3Another');
    });

    if (!ish3AnotherApplied) {
        for (let i = 0; i < h3Array.length && i < h3Text.length; i++) {
            h3Text[i].textContent = h3Array[i];
        }
    } else {
        for (let i = 0; i < h3AnotherArray.length && i < h3Text.length; i++) {
            h3Text[i].textContent = h3AnotherArray[i];
        }
    }

    const h4Text = document.querySelectorAll('h4');

    const h4AnotherArray = ['$30.00.',
        '$60.00',
        '$50.00/100g',
        '$10.00',
        '$30.00',
        '$120.00',
        '$50.00',
        '$100.00'
    ];

    const h4Array = ['¥1800',
        '¥1800',
        '¥1800',
        '¥1800',
        '¥1800',
        '¥1800',
        '¥1800',
        '¥1800'
    ];

    let ish4AnotherApplied;

    h4Text.forEach((h4TextItem) => {
        ish4AnotherApplied = h4TextItem.classList.contains('h4Another');
    });

    if (!ish4AnotherApplied) {
        for (let i = 0; i < h4Array.length && i < h4Text.length; i++) {
            h4Text[i].textContent = h4Array[i];
        }
    } else {
        for (let i = 0; i < h4AnotherArray.length && i < h4Text.length; i++) {
            h4Text[i].textContent = h4AnotherArray[i];
        }
    }


    const menuAnoterTextArray = ["A careless remark robbed my friend of their life. Confronted with the harsh reality that my momentary prioritization of self-preservation drove my friend to suicide, I discover their lifeless body, realizing the irreversible nature of it all.The tragedy, sparked by my own thoughtless words, unfolds before me, tearing at my conscience. My friend's life is extinguished, plunging me into an abyss of irreparable darkness. The dark light of the realization that it's too late pierces through my entire future in an instant. The connection with my friend severed, leaving an indelible wound on my heart, despair lies here.",
        "Deep despair enveloped my heart. The days when I walked alongside my twin, so abruptly came to an end. His death crushed me with a sense of helplessness and profound sorrow.The fact that he was no longer in this world felt like a cold knife piercing through my heart. We were born together, grew up together, and were each other's halves. Yet, torn apart by the cold hands of fate, I faced a lonely and despairing future.His death made me feel that there was no longer any meaning in my life. The days when I dreamed of a future with him turned out to be nothing but illusions. The separation through death left a deep scar on my heart, turning everything into shades of gray.Standing on the brink of despair, I felt that I would never be able to regain a smile again. This Merry Bad End conclusion has permanently cast a shadow on my heart, and loneliness and a sense of emptiness will continue to reign within me.",
        "My nails are subjected to a cold torture, peeling off one by one. The pain is incessant, corroding both my mind and body. Every moment, a nail is torn off, continuing into an inevitable agony. In this torture, my mind is deteriorating, sinking into the depths of despair.Consciousness wavers in the midst of pain, and a sense of restlessness overwhelms me. I don't even know how much time has passed. Only as long as the torture continues, my spirit is gradually breaking. In the midst of agony, the feeling of a worn-out soul slowly fading away. Any further continuation of this torture is no longer a desired abyss for me.",
        "Suddenly, the end of friendship arrived, and before my eyes, my friend threw themselves in front of a train. In that shocking moment, understanding failed to catch up, and confusion enveloped my heart.The sight of my friend being crushed by the steel giant seemed unreal, as if something so unimaginable could not happen in reality. Conflicting emotions assaulted my heart, and words failed to explain anything. The smiles and shared moments from the past now seemed like distant memories fading away.Amidst the echoes of the train, the surroundings distorted, and the world felt like an alternate dimension. The reality of my friend's death led to a profound confusion beyond reason, and disarray spread to the depths of my heart. Following the end with my friend, a dark light looms ahead.",
        "The friend and I committed murder together. In order to protect the secret of our crime, we decided to wrap it up as a dark secret shared only between us. However, that choice became a lingering shadow in our hearts for a lifetime, and as time passed, we couldn't come to terms with it.Every day, the guilt of our crime chased us, and even in moments of happiness, that dark shadow would emerge. The bond with our friend became tainted by the crime, and the stain proved irreversible. What awaited in the future was a lonely path, marked by an inescapable sense of guilt, and the impact ran deep, leaving a dark imprint on our lives.",
        "On a dark night filled with the aroma of absinthe, Vincent van Gogh painted alone in his studio. Pouring the mysterious liquid onto the canvas, the room transformed into a surreal dimension. Guided by absinthe, Van Gogh painted through the night, and with each stroke, eerie scenes emerged. However, the shadows that appeared in the room seemed like apparitions, enticed by the eerie power of absinthe. Eventually, Van Gogh met his demise in a village near Paris. Yet, even after his death, the scent of absinthe lingered, and his paintings were said to attract someone as if under a curse. The mysterious influence of absinthe on Van Gogh remains buried in the shadows."
    ];

    const menuTextArray = ['海の仲間たちが楽しいパーティーを開催中！サメの形をした可愛らしいマカロンが、フルーツタルトの上にキュートに乗っています。サメの背中には、いちごやブルーベリー、キウイなど、新鮮で甘いフルーツがたっぷりと盛り付けられ、まるで海の中でフルーツパラダイスを見つけたような楽しいタルトです。サメのヒレは、やわらかいクリームで表現され、見た目も美味しさも楽しめる一品。海の冒険気分を味わいながら、ハッピーなひとときをお楽しみください！なおスターゲイジーパイと発言した人間は、バックヤードへ来てもらいます。覚悟の準備をしておいてください。',
        '大海原からやってきた愛らしいサメちゃんのパンケーキが、あなたを幸せな時間に招待します！サメちゃんの形をしたもちもち生地に、ふんわり焼き上げられ、その上には楽しさいっぱいのトッピングが広がっています。いちごやバナナ、チョコペンでサメちゃんの愛らしい表情をイメージ。メイプルシロップが、まるで波立つ海のような甘さを添えます。このサメちゃんパンケーキで、可愛さと美味しさをたっぷりと味わって、素敵な1日を！',
        '海のかわいい住人の形をしたマカロン！そのまるで本物のサメのような形状で、甘くてやわらかなマカロンに仕上げられています。稀に現れるメガロドンちゃんマカロンは、割ると中から子サメちゃんマカロンがたくさん出てくるギミック付き！口に入れると、ほんのりとした甘さとサクサクとした食感が楽しめる、まさに海からやってきたかわいいスイーツです！',
        '愛らしいサメちゃんが泳ぐサンデー！サメちゃんマカロンが泳ぐアイスクリームに、甘酸っぱいフルーツシロップがふんだんにかかっています。このサメサンデーはまるで海の中に飛び込んだような楽しい味わい。涼しさと可愛らしさを一緒に楽しんでみてください！余談ですが、パフェではなく、サンデーにした理由はサメちゃんサンデーのほうが可愛いからデス！',
        '海辺からやってきた可愛いサメちゃんクッキーのトッピングしたアイス！その愛らしい見た目に魅了されること間違いなしデス！ビタミンたっぷりのフルーツ風味や、バニラのやさしい風味、チョコレートの楽しい風味など、さまざまな味わいが揃っています。サメちゃん好きなあなたにぴったりの涼やかで可愛いアイス、ぜひお楽しみください！',
        'ホットコーヒー / アイスコーヒー / ホットミルク / ホットココア / カフェラテ / アイスカフェラテ / カフェモカ / アイスカフェモカ / ソフトドリンク各種'
    ];

    const menuText = document.querySelectorAll('.menuText');

    menuText.forEach((menuTextItem) => {
        iscapAnotherApplied = menuTextItem.classList.contains('pAnother');
    });

    if (!iscapAnotherApplied) {
        for (let i = 0; i < menuTextArray.length && i < menuText.length; i++) {
            menuText[i].textContent = menuTextArray[i];
        }
    } else {
        for (let i = 0; i < menuAnoterTextArray.length && i < menuText.length; i++) {
            menuText[i].textContent = menuAnoterTextArray[i];
        }
    }

    const goodsTextAnotherArray = ["On a night filled with sorrow over the loss of a loved one, the interior bottle displayed in the room began to emit a soft, radiant glow. It seemed as if the soul of my beloved had returned, and my heart swelled with joy. The light from the bottle filled the dark room, giving the illusion of sensing the presence of my loved one. However, it was all an event within a dream.In the dream, I reunited with him, sharing moments of happiness. Yet, upon waking and checking the bottle, the light had vanished, and the harsh reality loomed. The beautiful fantasy of the dream crumbled, leaving behind a cruel reality.Despair struck me, and as I realized that the dream had been just that—a dream, my heart sank even heavier. The brief illusion of reuniting with my loved one turned out to be nothing more than a fleeting mirage.",
        "During my childhood, my parents bought me a doll. At first, I cherished the doll, playing with it and keeping it by my side even when I slept. However, as time passed, my treatment of the doll became increasingly harsh. Using it as an emotional outlet, I subjected the doll to rough handling on a daily basis.Eventually, I lost the doll during an outing. At that time, I didn't pay much attention to it, and as I grew into adulthood, I almost forgot about the incident. However, one day, memories of the doll resurfaced, and with them came a sense of guilt and anxiety for losing it. I couldn't understand why I had treated the doll that way when I was young, and heavy emotions weighed on my chest.",
        "Enveloped in profound grief, I grasped the Ouija board in a desperate attempt to reunite with my departed loved one. Calling out his name in the darkness, mysterious characters gradually appeared on the board. However, an unexpected disturbance began.The intended person did not manifest; instead, another spirit, shrouded in a cold, eerie light, responded on the Ouija board. His spirit cursed me with a malevolent voice, and the darkness seeped into my heart. The dream of reuniting with the supposed deceased turned into a nightmare.Powered by the cursed Ouija board, shadows crept around me, and an unsettling aura enveloped the surroundings. Immersed in the pain of loss and consumed by the darkness of the curse, I realized that my wish had backfired, and there was no returning to the peaceful days that once were."
    ];

    const goodsTextArray = ["大海原からやってきた、かわいいサメちゃんたちがガチャガチャの中に！手のひらサイズのサメちゃんのミニチュアフィギュアが登場！カラフルで楽しいサメちゃんたちが、あなたの元へやってきます。一度のガチャでどのサメちゃんが出るかはお楽しみ♪",
        "大海原のかわいい住人のぬいぐるみです！やわらかな素材で作られたこのぬいぐるみは、愛らしい笑顔ともふもふ触り心地が特徴。サメちゃんのデザインはリアルでありながらも、優しい表情がほっこりします。抱きしめるとほっとする安心感。ベッドやソファに飾るもよし、抱き枕としても最適。サメちゃんがあなたをずっと見守ってくれます！",
        "可愛いサメちゃんたちが、推し活必需品になって登場！コンパクトで立体感のあるスタンドは、いつもあなたのそばで精神安定をサポートします！小さなサイズなので、デスクやお気に入りのスペースに飾れば、海の中の楽しい気分がぐっと身近に感じられるカモ！"
    ];

    const goodsText = document.querySelectorAll('.goodsP');

    goodsText.forEach((goodsTextItem) => {
        iscapAnotherApplied = goodsTextItem.classList.contains('pAnother');
    });

    if (!iscapAnotherApplied) {
        for (let i = 0; i < goodsTextArray.length && i < goodsText.length; i++) {
            goodsText[i].textContent = goodsTextArray[i];
        }
    } else {
        for (let i = 0; i < goodsTextAnotherArray.length && i < menuText.length; i++) {
            goodsText[i].textContent = goodsTextAnotherArray[i];
        }
    }

    const accText = document.querySelector('.accText');

    const accAnotherText = '〒650-0002<br>1-3 Kitanocho, Chuo Ward, Kobe, Hyogo 650-0002, Japan<br>Reservations & Inquiries: **-****-****<br>Access: **** ****, a **-minute walk<br>Business Hours';
    const accTextchart = 'ADDRESS : 650-0002 兵庫県神戸市中央区北野町1-1-3<br>TELL : **-****-****<br>MAIL : ****@live.jp<br>ACCESS : **** **** 徒歩**分<br>OPEN : 11:00 - 20:00<br>CLOSE : 不定休';


    if (!iscapAnotherApplied) {
        accText.innerHTML = accTextchart;
    } else {
        accText.innerHTML = accAnotherText;
    }

    const footerAccText = document.querySelector('.footerAccText');

    const footerAccAnotherText = '〒650-0002<br>1-3 Kitanocho, Chuo Ward, Kobe, Hyogo 650-0002, Japan<br>Reservations & Inquiries: **-****-****<br>Access: **** ****, a **-minute walk<br>Business Hours';
    const footerAccTextchart = 'ADDRESS : 650-0002 兵庫県神戸市中央区北野町1-1-3<br>TELL : **-****-****<br>MAIL : ****@live.jp<br>ACCESS : **** **** 徒歩**分<br>OPEN : 11:00 - 20:00<br>CLOSE : 不定休';

    if (!iscapAnotherApplied) {
        footerAccText.innerHTML = footerAccTextchart;
    } else {
        footerAccText.innerHTML = footerAccAnotherText;
    }

    const insta01 = document.querySelector('.insta01 p');

    const insta01AnotherText = 'Instagram随時更新中<br>@Campanula.insta';
    const insta01Textchart = 'Instagram随時更新中!<br>@Campanula.insta';

    if (!iscapAnotherApplied) {
        insta01.innerHTML = insta01Textchart;
    } else {
        insta01.innerHTML = insta01AnotherText;
    }

    const insta02arrow = document.querySelector('.arrow');
    insta02arrow.classList.toggle('arrowAnother');
    let isarrowAnotherApplied;
    isarrowAnotherApplied = insta02arrow.classList.contains('arrowAnother');


    const ArrowAnotherText = '▼';
    const ArrowTextchart = '▶︎';

    if (!isarrowAnotherApplied) {
        insta02arrow.textContent = ArrowTextchart;
    } else {
        insta02arrow.textContent = ArrowAnotherText;
    }


    const insta02 = document.querySelector('.insta02 p');

    const insta02AnotherText = 'Post with "#Campanula".';
    const insta02Textchart = '"#Campanula"で投稿しよう！';

    if (!iscapAnotherApplied) {
        insta02.textContent = insta02Textchart;
    } else {
        insta02.textContent = insta02AnotherText;
    }

    const back = 'Heading back?';
    const chartButton = '会員制バーについてはこちら<span> >> </span>'

    let isbackAnotherApplied;
    isbackAnotherApplied = anotherText.classList.contains('backButton');

    if (!isbackAnotherApplied) {
        anotherText.innerHTML = chartButton;
    } else {
        anotherText.textContent = back;
    }

    



});