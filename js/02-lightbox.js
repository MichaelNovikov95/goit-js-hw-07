import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const captionRef = 'CAPTION!!!'

function addGalleryMarkup (galleryItems) {
  const cardsMarkUp = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
  </a>`
  }).join('');

  return cardsMarkUp;
}

galleryRef.insertAdjacentHTML('beforeend', addGalleryMarkup (galleryItems));


let lightbox = new SimpleLightbox('.gallery a', {captions:true , captionsData: 'alt', captionDelay:250});