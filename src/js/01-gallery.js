// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

function createMarkup(elements) {
	return elements.map(({preview, original, description}) => `<li class="gallery__item">
	<a class="gallery__link" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>
	</li>`).join('');
}

gallery.innerHTML = createMarkup(galleryItems);

new SimpleLightbox('.gallery a', {captionData: 'alt', captionDelay: 250});

console.log(galleryItems);
