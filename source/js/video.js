const video = document.querySelector('.video');

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.classList.add('video__image');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/wWLO0HribHw');

  return iframe;
};

const setupVideo = () => {
  let link = video.querySelector('.video__link');
  let button = video.querySelector('.video__button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
};

setupVideo(video);
