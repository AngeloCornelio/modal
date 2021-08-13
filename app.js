const openBtn = document.querySelector('.open');
const modal = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
});
