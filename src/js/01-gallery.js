// Descrito en la documentación
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const createListItem = image => {
  return `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>`;
};

for (const image of galleryItems) {
  const newImage = createListItem(image);
  gallery.innerHTML += newImage;
}

let lightbox = new SimpleLightbox('.gallery a', {});

console.log(galleryItems);