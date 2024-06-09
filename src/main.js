import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');


const lightbox = new SimpleLightbox('.gallery a', {
  captiom: true,
  captionData: 'alt',
  captionDelay: 250
});



