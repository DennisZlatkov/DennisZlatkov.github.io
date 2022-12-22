let songs = [
    {
        name: 'song 1',
        path: 'assets/musics/Song 1.mp3',
        artist: 'artist 1',
        cover: 'assets/images/cover 1.png'
    },
    {
        name: 'song 2',
        path: 'assets/musics/Song 2.mp3',
        artist: 'artist 2',
        cover: 'assets/images/cover 2.png'
    },

    {
        name: 'Perfect Srangers',
        path: 'assets/musics/Song 2.mp3',
        artist: 'artist 2',
        cover: 'assets/images/cover 2.png'
    },
    // +6 more
]


///// carousels/////////////////

const carousel = [...document.querySelectorAll('.carousel img')];

let carouselImageIndex = 0;

const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if(carouselImageIndex >= carousel.length - 1){
        carouselImageIndex = 0;
    } else{
        carouselImageIndex++;
    }

    carousel[carouselImageIndex].classList.toggle('active');
}

setInterval(() => {
    changeCarousel();
}, 3000);

