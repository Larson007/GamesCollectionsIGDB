// Import Slick
import '../../../slick/slick.scss';
import '../../../slick/slick-theme.scss';
import '../../../slick/slick.min.js';

export function gameMedias() {

    console.log('gameMedias');

    //* SLICK SLIDER
    $('.media_screenshots').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });


    // ajouter un event listener sur les boutons et gerer la class active
    const medias = document.querySelector('.game_medias');
    let navButtonVideo = document.querySelector('#media_button-video');
    let navButtonScreenshot = document.querySelector('#media_button-screenshot');
    const gameMediasVideo = document.querySelector('.media_videos');
    const gameMediasThumbnail = document.querySelector('.media_thumbnails');
    const gameMediasVideoButtons = document.querySelector('.videos_buttons');
    const gameMediasScreenshot = document.querySelector('.media_screenshots');

    let buttonNavMedias = [];

    if (navButtonVideo) {
        buttonNavMedias.push(navButtonVideo);
    }

    if (navButtonScreenshot) {
        buttonNavMedias.push(navButtonScreenshot);
    }

    // Si navButtonVideo est null, afficher par défaut les screenshots
    if (!navButtonVideo && gameMediasScreenshot) {
        gameMediasScreenshot.style.display = 'block';
    }

    if (buttonNavMedias.length > 0) {
        buttonNavMedias.forEach(btn => {
            btn.addEventListener('click', function () {
                buttonNavMedias.forEach(btn => {
                    btn.classList.remove('media_nav-link-active');
                });
                this.classList.add('media_nav-link-active');

                switch (this.id) {
                    case 'media_button-video':
                        // medias.style.height = '690px';
                        gameMediasVideo.style.display = 'flex';
                        gameMediasThumbnail.style.display = 'flex';
                        gameMediasThumbnail.style.flexDirection = 'column';
                        if (window.matchMedia('(max-width: 768px)').matches) {
                            gameMediasThumbnail.style.flexDirection = 'row';
                        }
                        gameMediasScreenshot.style.display = 'none';
                        gameMediasVideoButtons.style.display = 'flex';
                        break;
                    case 'media_button-screenshot':
                        gameMediasScreenshot.style.display = 'block';
                        gameMediasVideo.style.display = 'none';
                        gameMediasThumbnail.style.display = 'none';
                        gameMediasVideoButtons.style.display = 'none';
                        break;
                }
            });
        });
    } else {
        return;
    }

    const thumbnails = document.querySelectorAll('.thumbnail');
    const videoIframe = document.querySelector('.media_videos iframe');
    const prevButton = document.querySelector('#video-previous');
    const nextButton = document.querySelector('#video-next');

    let activeIndex = 0;


    function updateVideo() {
        const videoId = thumbnails[activeIndex].getAttribute('data-video-id');
        videoIframe.src = 'https://www.youtube.com/embed/' + videoId;

        // Supprime la classe 'video_active' de toutes les vignettes
        thumbnails.forEach(thumb => {
            thumb.classList.remove('video_active');
        });

        // Ajoute la classe 'video_active' à la vignette active
        thumbnails[activeIndex].classList.add('video_active');

        // Fait défiler la vignette active dans la vue
        thumbnails[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }


    prevButton.addEventListener('click', () => {
        activeIndex = (activeIndex - 1 + thumbnails.length) % thumbnails.length;
        updateVideo();
    });

    nextButton.addEventListener('click', () => {
        activeIndex = (activeIndex + 1) % thumbnails.length;
        updateVideo();
    });

    // Ajoute un gestionnaire d'événement 'click' à chaque vignette
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            activeIndex = index;
            updateVideo();
        });
    });

    // Initialise la première vidéo
    if (thumbnails.length > 0) {
        updateVideo();
    }

}