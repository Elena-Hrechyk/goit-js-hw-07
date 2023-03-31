import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClick);

let lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});

function onClick(event) {
  event.preventDefault();

  const galleryList = event.target;

  if (!galleryList.classList.contains("gallery__image")) {
    return;
  }
}
