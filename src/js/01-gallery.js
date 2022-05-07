// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery")

const galleryItemsMarkup = galleryItems.map(image =>
    `
    <a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
    </a>
    
    `
).join("");

galleryEl.innerHTML = galleryItemsMarkup;

let lightbox = new SimpleLightbox('.gallery a',
    {captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,}
);

