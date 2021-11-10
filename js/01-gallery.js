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

const instance = basicLightbox.create(
  `
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`,
  {
    closable: true,
  }
);

galleryRef.innerHTML = createGalleryItems;

galleryRef.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (galleryRef === evt.target) return;

  const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source}>
`);

  instance.show();

  const visible = basicLightbox.visible();

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") instance.close();
    console.log(e);
  });
});
