const ranger    = document.querySelector('[type=range]');
const pageviews = document.querySelector ("#pageviews");
const price     = document.querySelector ("#price");
const toggle    = document.querySelector (".switch input");
const type      = document.querySelector ("#type");


const lightGrayishBlue = "hsl(224, 65%, 95%)";
const softCyan = "hsl(174, 77%, 80%)";


let yearlyPrice  = monthlyPrice => (monthlyPrice * 25) / 100;
const togglePrice = (value) =>
  toggle.checked 
    ? `$${yearlyPrice (value)}.00`
    : `$${value}.00`;

ranger.addEventListener('input', function () {
  let monthlyPrice = Number (ranger.value);
  let perTotal = (100 * monthlyPrice) / Number (ranger.max);

  this.style.setProperty('background', `linear-gradient(to right, ${softCyan} 0%, ${softCyan} ${perTotal}%, ${lightGrayishBlue} ${perTotal}%, ${lightGrayishBlue} 100%)`);
  
  pageviews.innerText = monthlyPrice === 0  ? 0
                      : monthlyPrice === 8  ? "10K"
                      : monthlyPrice === 12 ? "50K"
                      : monthlyPrice === 16 ? "100K"
                      : monthlyPrice === 20 ? "150K"
                      : monthlyPrice === 24 ? "500K"
                      : monthlyPrice === 28 ? "666k"
                      : monthlyPrice === 32 ? "832K"
                      : "1M";
    price.innerText = togglePrice (monthlyPrice)
}, false);

toggle.addEventListener ("click", (event) => {
  isYearly = event.target.checked;
  type.innerText = isYearly ? "/ year" : "/ month";
  price.innerText = togglePrice (ranger.value)
});
