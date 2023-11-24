const template = document.querySelector('#popup-message');
const message = template.content.querySelector('.popup-message').cloneNode(true);

const renderMessage = () => {
  document.body.appendChild(message)
  setTimeout(() => {
    message.remove();
  }, 1500)
};

export {renderMessage};
