const anotherVideoPaths = [
    'video/sharkAnother01.mp4',
    'video/sharkAnother02.mp4',
    'video/sharkAnother03.mp4',
];

const videoPaths = [
    'video/shark02.mp4',
    'video/shark01.mp4',
    'video/shark03.mp4',
];

const videoClases = document.querySelectorAll('.video');

const anotherVideoButton = document.querySelector('.footerButton');
anotherVideoButton.addEventListener('click', function () {
    let isVideoAnotherApplied;

    videoClases.forEach((videoClasesItem) => {
        isVideoAnotherApplied = videoClasesItem.classList.contains('videoAnother');
    });
    if (!isVideoAnotherApplied) {
        for (let i = 0; i < videoPaths.length && i < videoClases.length; i++) {
            videoClases[i].src = videoPaths[i];
            console.log('!for');
        }
    } else {
        for (let i = 0; i < anotherVideoPaths.length && i < videoClases.length; i++) {
            videoClases[i].src = anotherVideoPaths[i];
        }
    }

});