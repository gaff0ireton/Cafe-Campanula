const anotherImagePaths = [
    '../img/viewAnother.jpg',
    '../img/menuAnother01.jpg',
    '../img/menuAnother02.jpg',
    '../img/menuAnother03.jpg',
    '../img/menuAnother04.jpg',
    '../img/menuAnother05.jpg',
    '../img/drinkMenuAnother.jpg',
    '../img/goodsAnother01.jpg',
    '../img/goodsAnother02.jpg',
    '../img/goodsAnother03.jpg'
];

const ImagePaths = [
    '../img/view.jpg',
    '../img/menu_1.jpg',
    '../img/menu_2.jpg',
    '../img/menu_3.jpg',
    '../img/menu_4.png',
    '../img/menu_5.png',
    '../img/drinkmenu.jpg',
    '../img/goods_1.jpg',
    '../img/goods_2.jpg',
    '../img/goods_3.jpg'
];

const photoClases = document.querySelectorAll('.photo');


// let isPhotoAnotherApplied;
// photoClases.forEach((photoClasesItem) => {
//     isPhotoAnotherApplied = photoClasesItem.classList.contains('photoAnother');
// });
// let isPhotoAnotherApplied = false;

// photoClases.forEach((photoClasesItem) => {
//     if (photoClasesItem.classList.contains('photoAnother')) {
//         isPhotoAnotherApplied = true;
//         console.log(isPhotoAnotherApplied);
//     }
// });

// console.log(isPhotoAnotherApplied);

// let isPhotoAnotherApplied = false;

// photoClases.forEach((photoClasesItem) => {
//     if (photoClasesItem.classList.contains('photoAnother')) {
//         isPhotoAnotherApplied = true;
//     }
// });

// console.log(isPhotoAnotherApplied);

const anotherPhotoButton = document.querySelector('.footerButton');
anotherPhotoButton.addEventListener('click', function () {
    let isPhotoAnotherApplied;

    photoClases.forEach((photoClasesItem) => {
        isPhotoAnotherApplied = photoClasesItem.classList.contains('photoAnother');
        console.log('for')
    });
    if (!isPhotoAnotherApplied) {
        for (let i = 0; i < ImagePaths.length && i < photoClases.length; i++) {
            photoClases[i].src = ImagePaths[i];
            console.log('!for');
        }
    } else {
        for (let i = 0; i < anotherImagePaths.length && i < photoClases.length; i++) {
            photoClases[i].src = anotherImagePaths[i];
        }
    }

});

// const anotherImages = [];