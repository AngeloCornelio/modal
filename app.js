const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.overlay');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});
