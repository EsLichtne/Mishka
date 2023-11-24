const template = document.querySelector('#popup-message');
const message = template.content.querySelector('.popup-message');

const renderMessage = () => {
  document.body.appendChild(message)
  setTimeout(() => {
    message.remove();
  }, 1500)
};

export {renderMessage};
