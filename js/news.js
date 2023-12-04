const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();

const output = year + '-' + month + '-' + date;

console.log(output);

document.getElementById('date').textContent = output;


let newsText = [
    '特別企画！ 本日より、サメちゃんのチョコレートがカフェに仲間入り♪ ビター、ホワイト、ミルクの三味展開！',
    '伝説の大人気の等身大ジンベエザメぬいぐるみ再入荷！ 大人気の等身大ジンベエザメぬいぐるみが再び店頭に並びました！ 14mが入る一室のあるクソデカハウスを購入して、ジンベエザメちゃんをお迎えしましょう！',
    '新作ぬいぐるみ登場！ヨシキリザメちゃんぬいぐるみが入荷♪ 世界で最も美しいと言われている所以である背中と腹部の色のコントラストと、特長的な大きな真っ黒い目が再現されています。 抱きしめると幸せな気分に浸れます！',
    'サメの学び舎♪ サメ教育プログラムを開始しました。サメの生態や面白い事実を学びながら、楽しく過ごしましょう！',
    'ウバザメちゃんシュラフが登場！ キャンプは勿論、ゲーミング寝袋としても利用できます！日向が大好きなウバザメちゃんと一緒に、日向も日陰も遊びまくろう！',
    '新たなサメちゃんがカフェの仲間入り！ ゴブリンシャークの異名を持つミツクリザメちゃんがカフェの仲間になりました！ ラブカちゃんとカグラザメちゃんのいる深海水槽に入ります！ 是非会いに来てくださいね！',
    '一瞬で寝れると大人気のニタリちゃん枕再入荷！ 特長的な尾鰭をしたニタリちゃん枕が再入荷しました！ 眠れない晩は、あなたの頭をニタリちゃんの尾鰭でビンタして気絶したように眠りましょう！'];
let print01 = newsText[
    Math.floor(Math.random() * 7)
];
let print02 = newsText[
    Math.floor(Math.random() * 7)
];

console.log(print02);

document.getElementById('newsText01').textContent = output + ' : ' + print01;

while (print01 === print02) {
    print02 = newsText[Math.floor(Math.random() * 7)];
}
document.getElementById('newsText02').textContent = output + ' : ' + print02;








let propaganda = ["Let us express our gratitude to the profound power of the shark and join our ritual gathering, the sacred Sabbath dedicated to the worship of the divine shark. In the darkness of the night illuminated by the moonlight, we shall perform ceremonies offering our blood and surrendering our hearts to the mystical waves of the sea.Protected by the benevolent presence of the magical shark, we shall acquire newfound strength and blessings. Join us in the celebration held within the sanctuary of the shark, where we will share the mystical power of the deep sea. Embrace the shark's divine guidance, partake in the festivities unfolding in its holy realm, and dance with us in the nocturnal shadows.Welcome to the Sabbath of Shark Worship.",
    'Sharks, the winners of evolution. They are the rulers of nature, and their evolutionary history teaches us about their superiority. Sharp senses, powerful muscles, and the supreme survival skills underwater. Sharks are always at the forefront of evolution, showcasing their majesty to us.',
    'Sharks, the extremes of evolution. Their existence, honed in the depths of the sea, tells the tale of being the victors of evolution. Formidable senses, astonishing adaptability, and unwavering determination. Sharks are our goal, the most successful evolutionaries in the realm of nature.',
    'Sharks, the symbols of evolution. Their evolutionary history teaches us about superiority, evolving continuously in the battles within the ocean. Remarkable perceptual abilities, astonishing adaptability underwater, and enduring survival skills. Sharks deserve our respect and admiration.',
    'Sharks, the heroes of evolution. Their remarkable evolutionary history highlights their superiority. Sharpened senses, astonishing adaptability underwater, and an immortal survival instinct. Sharks stand at the forefront of evolution, truly worthy of our admiration.',
    'Sharks, the giants of evolution. Their evolutionary history shines at the pinnacle of the deep sea. Outstanding perceptual abilities, swift mobility underwater, and eternal survival instinct. Sharks prove their strength in the continuous battles of evolution.',
    'Sharks, the leaders of evolution. Their evolutionary history teaches us about superiority in nature. Amazing perceptual abilities, powerful mobility underwater, and an indestructible survival instinct. The existence of sharks is a masterpiece of evolution, deserving our respect.',
    'Sharks, the crowned ones of evolution. In the mysteries of the deep sea, their evolution has reached its peak. Unmatched perceptual abilities, superior adaptability underwater, and relentless survival skills. Sharks are the magnificent proof of evolution, inspiring us with their elegant and powerful presence.',
    'Embrace the era of Shark Supremacy, where the mightiest predators reign supreme! Sharks, the unparalleled champions of evolution, stand as beacons of strength and dominance. With their razor-sharp senses, unparalleled adaptability, and indomitable survival instincts, sharks epitomize the zenith of evolutionary perfection. Let the world bear witness to the glorious ascendancy of sharks, as they continue to chart the course of our collective destiny. Long live the rulers of the deep, for the glory of sharks shall endure throughout the ages!'
];

let anotherPrint01 = propaganda[
    Math.floor(Math.random() * 9)
];
let anotherPrint02 = propaganda[
    Math.floor(Math.random() * 9)
];




const anotherNews = document.querySelector('.footerButton');
anotherNews.addEventListener('click', function () {
    const propaganda01 = document.querySelector('#newsText01');
    const propaganda02 = document.querySelector('#newsText02');
    
    // クリック前の状態を確認する
    const isPAnotherApplied01 = propaganda01.classList.contains('pAnother');
    const isPAnotherApplied02 = propaganda02.classList.contains('pAnother');

    if (!isPAnotherApplied01) {
        document.getElementById('newsText01').textContent = output + ' : ' + print01;
    } else {
        propaganda01.textContent = output + ' : ' + anotherPrint01;
    }

    while (anotherPrint01 === anotherPrint02) {
        anotherPrint02 = propaganda[Math.floor(Math.random() * 9)];
    }

    if (!isPAnotherApplied02) {
        document.getElementById('newsText02').textContent = output + ' : ' + print02;
    } else {
        propaganda02.textContent = output + ' : ' + anotherPrint02;
    }
});

