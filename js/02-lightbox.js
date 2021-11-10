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

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(gallery);

gallery.on("show.simplelightbox", function () {
  galleryRef.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (galleryRef === evt.target) return;
  });
});
