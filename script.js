const jaButton = document.getElementById('ja');
const nejButton = document.getElementById('nej');

let nejClicks = 0;

nejButton.addEventListener('click', () => {
    nejClicks++;

    // Hämta aktuell font-size i px
    const jaSize = parseInt(window.getComputedStyle(jaButton).fontSize);
    const nejSize = parseInt(window.getComputedStyle(nejButton).fontSize);

    // Öka Ja med 25px
    jaButton.style.fontSize = (jaSize + 25) + "px";

    // Minska Nej med 25%
    nejButton.style.fontSize = (nejSize * 0.75) + "px";

    // Redirect efter 5 nej
    if (nejClicks > 3) {
        window.location.href = "ledsen.html";
    }
});

jaButton.addEventListener('click', () => {
    window.location.href = "jippie.html";
});
