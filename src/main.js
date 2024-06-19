// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImg } from './js/pixabay-api';
import { markUp } from './js/render-functions';

import errorSvg from './img/errorSvg.svg';
import cautionSvg from './img/cautionSvg.svg';
import informSvg from './img/informSvg.svg';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const formElem = document.querySelector('.form');
const loaderElem = document.querySelector('.loader');
const galleryElem = document.querySelector('.gallery');
const btnLoadElem = document.querySelector('.btn-load');

let page = 1;
const perPage = 15;
let totalPages = 0;
let requestValue = '';

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

formElem.addEventListener('submit', async e => {
  e.preventDefault();
  if (!formElem.input.value.trim()) {
    formElem.reset();
    return;
  }
  try {
    page = 1;
    requestValue = '';
    btnLoadElem.classList.add('visually-hidden');
    galleryElem.innerHTML = '';
    loaderElem.classList.remove('visually-hidden');
    const fetchImgData = await fetchImg(
      formElem.input.value.trim(),
      page,
      perPage
    );
    if (!fetchImgData.total) {
      iziToast.error({
        iconUrl: errorSvg,
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    loaderElem.classList.add('visually-hidden');
    galleryElem.insertAdjacentHTML('beforeend', markUp(fetchImgData));
    gallery.refresh();
    totalPages = Math.ceil(fetchImgData.totalHits / perPage);
    requestValue = formElem.input.value.trim();
    if (page < totalPages) {
      btnLoadElem.classList.remove('visually-hidden');
    }
  } catch (error) {
    loaderElem.classList.add('visually-hidden');
    iziToast.warning({
      iconUrl: cautionSvg,
      position: 'topRight',
      message: 'Whoops, something went wrong! We gonna fix it soon.',
    });
  }
  formElem.reset();
});

btnLoadElem.addEventListener('click', async e => {
  page += 1;
  if (page === totalPages) {
    iziToast.info({
      iconUrl: informSvg,
      position: 'topRight',
      backgroundColor: '#09f',
      message: "We're sorry, but you've reached the end of search results.",
    });
    btnLoadElem.classList.add('visually-hidden');
    loaderElem.classList.add('visually-hidden');
  }
  try {
    loaderElem.classList.remove('visually-hidden');
    const fetchImgData = await fetchImg(requestValue, page, perPage);
    loaderElem.classList.add('visually-hidden');
    galleryElem.insertAdjacentHTML('beforeend', markUp(fetchImgData));
    gallery.refresh();
    window.scrollBy({
      top: galleryElem.firstChild.getBoundingClientRect().height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    loaderElem.classList.add('visually-hidden');
    iziToast.warning({
      iconUrl: warningSvg,
      position: 'topRight',
      message: 'Whoops, something went wrong! We gonna fix it soon.',
    });
  }
});
