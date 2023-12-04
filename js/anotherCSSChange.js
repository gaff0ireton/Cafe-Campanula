const anotherButton = document.querySelector('.footerButton');
anotherButton.addEventListener('click', function () {
    const wrap = document.querySelector('.wrap');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const mainwrap = document.querySelector('.mainwrap');
    const background = document.querySelector('.background');
    const menuBackNone = document.querySelector('.menuBackNone');
    const drinkExp = document.querySelector('.drinkExp');
    const drawer = document.getElementById('drawerMenu');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');
    const h4 = document.querySelectorAll('h4');
    const p = document.querySelectorAll('p');
    const sameD = document.querySelectorAll('.sameD');
    const h3Drink = document.querySelectorAll('.drinkBox h3');
    const pDrink = document.querySelector('.drinkItem p');
    const photoClass = document.querySelectorAll('.photo');
    const videoClass = document.querySelectorAll('.video');
    const toggleButton = document.querySelector('.toggleButton');
    const press = document.querySelector('.press');
    const insta01 = document.querySelector('.insta01');
    const insta02 = document.querySelector('.insta02');
    drawer.classList.toggle('anotherDrawer');
    anotherButton.classList.toggle('backButton');
    insta01.classList.toggle('anotherInsta');
    insta02.classList.toggle('anotherInsta');
    toggleButton.classList.toggle('anotherToggle');
    pDrink.classList.toggle('pAnotherDrinkText');
    drinkExp.classList.toggle('anotherDrink');
    menuBackNone.classList.toggle('none');
    wrap.classList.toggle('another');
    header.classList.toggle('another');
    mainwrap.classList.toggle('mainAnother');
    footer.classList.toggle('footerAnother');
    background.classList.toggle('backgroundAnother');

    if(press){
        anotherButton.classList.remove('press');
    }else{
        anotherButton.classList.add('press');
    }

    // h2.forEach((h2Item) =>{

    //     if(!h2.classList.contains('h2Another')){
    //         for(let i = 0; i < h2.length; i++){
    //             h2[i].classList.add('h2Another');
    //         }    
    //     } else{
    //         for(let i = 0; i < h2.length; i++){
    //             h2[i].classList.remove('h2Another');
    //         }   
    //     }
    // });
    photoClass.forEach((photoClassItem) => {
        if (!photoClassItem.classList.contains('photoAnother')) {
            photoClassItem.classList.add('photoAnother');
        } else {
            photoClassItem.classList.remove('photoAnother');
        }
    });

    videoClass.forEach((videoClassItem) => {
        if (!videoClassItem.classList.contains('videoAnother')) {
            videoClassItem.classList.add('videoAnother');
        } else {
            videoClassItem.classList.remove('videoAnother');
        }
    });

    h2.forEach((h2Item) => {
        if (!h2Item.classList.contains('h2Another')) {
            h2Item.classList.add('h2Another');
        } else {
            h2Item.classList.remove('h2Another');
        }
    });

    h3.forEach((h3Item) => {
        if (!h3Item.classList.contains('h3Another')) {
            h3Item.classList.add('h3Another');
        } else {
            h3Item.classList.remove('h3Another');
        }
    });

    h4.forEach((h4Item) => {
        if (!h4Item.classList.contains('h4Another')) {
            h4Item.classList.add('h4Another');
        } else {
            h4Item.classList.remove('h4Another');
        }
    });

    p.forEach((pItem) => {
        if (!pItem.classList.contains('pAnother')) {
            pItem.classList.add('pAnother');
        } else {
            pItem.classList.remove('pAnother');
        }
    });

    sameD.forEach((sameDItem) => {
        if (!sameDItem.classList.contains('anotherSame')) {
            sameDItem.classList.add('anotherSame');
        } else {
            sameDItem.classList.remove('anotherSame');
        }
    });

    h3Drink.forEach((h3DrinkItem) => {
        if (!h3DrinkItem.classList.contains('anotherh3Drink')) {
            h3DrinkItem.classList.add('anotherh3Drink');
        } else {
            h3DrinkItem.classList.remove('anotherh3Drink');
        }
    });


    // h2.forEach((h2Item) => {
    //     if (!h2Item.classList.contains('h2Another')) {
    //         h2Item.classList.add('h2Another');
    //     } else {
    //         h2Item.classList.remove('h2Another');
    //     }
    // });

    // for (let i = 0; i < h3.length; i++) {
    //     h3[i].classList.toggle('h3Another');
    // }

    // for (let i = 0; i < h4.length; i++) {
    //     h4[i].classList.toggle('h4Another');
    // }

    // for (let i = 0; i < p.length; i++) {
    //     p[i].classList.toggle('pAnother');
    // }

    // for (let i = 0; i < sameD.length; i++) {
    //     sameD[i].classList.toggle('anotherSame');
    // }


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