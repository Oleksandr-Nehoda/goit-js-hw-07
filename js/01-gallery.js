import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery');
const galleryMarkup = createGalleryCards(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryMarkup);

console.log(galleryMarkup);


function createGalleryCards (galleryItems) {
    return galleryItems.map( ({preview, original, description}) => {
    return `
        <div class="gallery__item">
           <a class="gallery__link" href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          />
          </a>
       </div>`
    }).join("");

}
