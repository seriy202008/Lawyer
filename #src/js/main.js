import Swiper from 'swiper';

const servicesSwiper = new Swiper('.services--swiper', {
    enabled: false,
    breakpoints: {
        343: {
            slidesPerView: 1,
            spaceBetween: 24,
            enabled: true,
        },
        697: {
            slidesPerView: 2,
            spaceBetween: 0,
            enabled: false,
        },
        1321: {
            slidesPerView: 3,
            spaceBetween: 0,
            enabled: false,
        }
    }
});
const workersSwiper = new Swiper('.workers--swiper', {
    enabled: false,
    breakpoints: {
        343: {
            slidesPerView: 1,
            spaceBetween: 24,
            enabled: true,
        },
        697: {
            slidesPerView: 2,
            spaceBetween: 24,
            enabled: true,
        },
        1321: {
            slidesPerView: 4,
            spaceBetween: 24,
            enabled: false,
        }
    }
});
const viewsSwiper = new Swiper('.views--swiper', {
    enabled: false,
    breakpoints: {
        343: {
            slidesPerView: 1,
            spaceBetween: 24,
            enabled: true,
        },
        697: {
            slidesPerView: 1,
            spaceBetween: 24,
            enabled: true,
        },
        1321: {
            slidesPerView: 2,
            spaceBetween: 24,
            enabled: false,
        }
    }
});
const newsSwiper = new Swiper('.news--swiper', {
    enabled: false,
    breakpoints: {
        343: {
            slidesPerView: 1,
            spaceBetween: 24,
            enabled: true,
        },
        697: {
            slidesPerView: 2,
            spaceBetween: 24,
            enabled: true,
        },
        1321: {
            slidesPerView: 3,
            spaceBetween: 24,
            enabled: false,
        }
    }
});

import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.es5.js'
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.es5.js'

lightGallery(document.querySelector('.news--wrapper'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});

let burgerBody = document.querySelector('.burger--body');

document.addEventListener('click', function (e) {
    if (e.target.closest('.burger--btn')) {
        burgerBody.classList.add('_active');
    }
    if (e.target.closest('.burger--close') || e.target.closest('.burger--link')) {
        burgerBody.classList.remove('_active');
    }
    if (!e.target.closest('.burger')) {
        burgerBody.classList.remove('_active');
    }
});
window.addEventListener('scroll', function (e) {
    burgerBody.classList.remove('_active');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.getAttribute('href').length > 1) {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }

    });
});

import { textOvf } from './textOverflow.js';
let servicesItems = document.querySelectorAll('.services--text');
for (let i = 0; i < servicesItems.length; i++) {
    const element = servicesItems[i];
    textOvf(element, 188)
}
let cardItems = document.querySelectorAll('.card--text');
for (let i = 0; i < cardItems.length; i++) {
    const element = cardItems[i];
    textOvf(element, 326)
}
let viewItems = document.querySelectorAll('.view--text');
for (let i = 0; i < viewItems.length; i++) {
    const element = viewItems[i];
    textOvf(element, 486)
}
let articleItems = document.querySelectorAll('.article--text');
for (let i = 0; i < articleItems.length; i++) {
    const element = articleItems[i];
    console.log(element.textContent.length);
    textOvf(element, 300)
}


