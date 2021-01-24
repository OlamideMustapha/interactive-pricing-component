const ranger    = document.querySelector('[type=range]');
const pageviews = document.querySelector ("#pageviews");
const price     = document.querySelector ("#price");
const toggle    = document.querySelector (".slider");
const type      = document.querySelector ("#type");


const lightGrayishBlue = "hsl(224, 65%, 95%)";
const softCyan = "hsl(174, 77%, 80%)";


let isYearly     = false,
    monthlyPrice = 8,
    yearlyPrice  = () => (monthlyPrice * 25) / 100;


ranger.addEventListener('input', function () {
  monthlyPrice = Number (ranger.value);

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
