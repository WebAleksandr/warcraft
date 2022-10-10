// Audio
const sound = document.querySelector('.quote__gif'),
   music = document.querySelector('.music'),
   quoteText = document.querySelector('.text'),
   authorText = document.querySelector('.author'),
   newquote = document.querySelector('.new__quote');

sound.addEventListener('click', (e) => {
   sound.classList.toggle('paused')
   music.paused ? music.play() : music.pause();
});

window.onfocus = function () {
   sound.classList.contains('paused') ? music.pause() : music.play();
}
window.onblur = function () {
   music.pause();
}


function newQuote() {
   const quote = WarcraftQuotes[Math.floor(Math.random() * WarcraftQuotes.length)]
   if (quote.text.length > 60) {
      quoteText.classList.add('long-quote');
      authorText.classList.add('small-size');
   } else {
      quoteText.classList.remove('long-quote');
      authorText.classList.remove('small-size');
   }
   quoteText.textContent = quote.text;
   authorText.textContent = quote.author;
   complete();
}
newquote.addEventListener('click', newQuote);
newQuote();