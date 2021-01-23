const ranger    = document.querySelector('[type=range]');
const pageviews = document.querySelector ("#pageviews");
const price     = document.querySelector ("#price");
const toggle    = document.querySelector (".slider");
const type      = document.querySelector ("#type");

let isYearly     = false,
    monthlyPrice = 8,
    yearlyPrice  = () => (monthlyPrice * 25) / 100;
// document.ranger.classList.add('js');

ranger.addEventListener('input', e => {
  monthlyPrice = Number (ranger.value);
  ranger.style.setProperty('--val', +ranger.value);
  
  pageviews.innerText = monthlyPrice === 8 ? "10K"
                      : monthlyPrice === 12 ? "50K"
                      : monthlyPrice === 16 ? "100K"
                      : monthlyPrice === 20 ? "150K"
                      : monthlyPrice === 24 ? "500K"
                      : monthlyPrice === 28 ? "666k"
                      : monthlyPrice === 32 ? "832K"
                      : "1M";
    price.innerText = isYearly 
                    ? `$${yearlyPrice (monthlyPrice)}.00`
                    : `$${monthlyPrice}.00`;
}, false);

toggle.addEventListener ("click", (_) => {
  isYearly = !isYearly
  type.innerText = isYearly ? "/ year" : "/ month";
  price.innerText = isYearly 
                  ? `$${yearlyPrice (monthlyPrice)}.00`
                  : `$${monthlyPrice}.00`;

  
});