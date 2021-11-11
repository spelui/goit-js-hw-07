import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createGalleryItems = galleryItems
  .map(
    ({ preview, original, description }) => `
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
  )
  .join("");

galleryRef.innerHTML = createGalleryItems;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
