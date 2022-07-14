const switchBox = document.querySelector('.switch');
const btn = document.querySelector('.btn');
const icon = document.querySelector('i');
const container = document.querySelector('.main-container');
const title = document.querySelector('h1');


switchBox.addEventListener('click', () => {

  btn.classList.toggle('btn-change');

  icon.classList.toggle('icon-change');
  icon.classList.toggle('fa-sun');
  switchBox.classList.toggle('switch-change'); 
  container.classList.toggle('main-container-change'); 

  if (title.innerText === 'Dark Now') {
    title.innerText = 'Light Now';
  } else {
    title.innerText = 'Dark Now';
  };

});