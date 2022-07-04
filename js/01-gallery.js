import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxForGalleryCards = document.querySelector('.gallery');


// Создаём разметку с импорта
function addGalleryCards (galleryItems) {
  const GalleryCards = galleryItems.map(({preview, original,description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  }).join('');

  return GalleryCards;
};
// Добавляем разметку на страницу
boxForGalleryCards.insertAdjacentHTML('beforeend', addGalleryCards(galleryItems));

// Добавляем библиотеку
const galleryHandleClick = (event) => {
event.preventDefault();

const originalImgRef = event.target.dataset.source;
const imgAltRef = event.target.alt;

if (event.target.nodeName !== 'IMG') {
  return;
}

const instance = basicLightbox.create(`
<img src='${originalImgRef}' alt ='${imgAltRef}' >
`,).show();
};

boxForGalleryCards.addEventListener('click', galleryHandleClick);

