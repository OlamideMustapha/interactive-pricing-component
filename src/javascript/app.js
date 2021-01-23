const ranger = document.querySelector('[type=range]');
const pageviews = document.querySelector ("#pageviews");
const price = document.querySelector ("#price");


// document.documentElement.classList.add('js');

ranger.addEventListener('input', e => {
  const value = ranger.value;
  ranger.style.setProperty('--val', +value);

   
  pageviews.innerText = value > 0 ? value + "K" : value
  console.log (value);
}, false);