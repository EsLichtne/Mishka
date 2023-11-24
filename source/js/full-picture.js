const imageLinks = document.querySelectorAll('.card__image-link');
const template = document.querySelector('#full-picture');
const fullPicture = template.content.querySelector('.full-picture').cloneNode(true);
const fullPictureImage = fullPicture.querySelector('.full-picture__image');
const closeButton = fullPicture.querySelector('.full-picture__button');

const onFullPictureClick = (event) => {
  if (event.target === closeButton || event.target === fullPicture) {
    fullPicture.remove();
  }
};

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    fullPicture.remove();
  }
};

imageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    link.dataset.link = link.querySelector('.card__image').currentSrc;
    fullPictureImage.src = link.dataset.link;
    document.body.appendChild(fullPicture);
  });
});

fullPicture.addEventListener('click', onFullPictureClick);
document.addEventListener('keydown', onDocumentKeydown);
