import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryConteinerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryCards(galleryItems);


galleryConteinerRef.insertAdjacentHTML('beforeend', galleryMarkup);

// console.log(galleryMarkup);


galleryConteinerRef.addEventListener('click', onOpenLightbox);

function onOpenLightbox(event) {

    event.preventDefault();

    if (event.target.nodeName !== 'IMG'){
        return
    }

    const clickEvent = event.target;
    const urlOriginalImg = clickEvent.dataset.source;

     const instance = basicLightbox.create(`
    <img  src="${urlOriginalImg}" width="800" height="600">
`)
instance.show()

window.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(event){
    // console.log(event.code)
    const ESC_KEY_CODE  = 'Escape';
    if(event.code === ESC_KEY_CODE ) {
        instance.close(()=> window.removeEventListener('keydown', onEscKeyPress))
        
    }
}
     
}

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

    