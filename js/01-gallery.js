import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onOpenBigImg);

function onOpenBigImg(event) {
  event.preventDefault();

  const galleryList = event.target;

  if (!galleryList.classList.contains("gallery__image")) {
    return;
  }

  const currentImg = galleryItems.find(
    ({ original }) =>
      original === galleryList.closest(".gallery__image").dataset.source
  );

  const instance = basicLightbox.create(`
      <img src="${currentImg.original}" alt="${currentImg.description}">
  `);
  instance.show();

  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
