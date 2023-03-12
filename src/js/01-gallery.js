// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const listEl = document.querySelector('.gallery')

const makeGalleryCard = ({
    preview,
    original,
    description,
  }) => `    <div class="gallery__item">
  <a class="gallery__link" href ='${original}'>
  <img class='gallery__image' src='${preview}' alt='${description}' data-source='${original}'>
  </a>
  </div>`;
  
  const markup = galleryItems.map((data) => makeGalleryCard(data)).join('');
  
  listEl.insertAdjacentHTML('afterbegin', markup);

  listEl.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    }

    let box = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 200,
    })
    
  });

  listEl.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });