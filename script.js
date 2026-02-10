const jaButton = document.getElementById('ja');
const nejButton = document.getElementById('nej');

nejButton.addEventListener('click', () => {
    // Hämta aktuell font-size i px
    const jaSize = parseInt(window.getComputedStyle(jaButton).fontSize);
    const nejSize = parseInt(window.getComputedStyle(nejButton).fontSize);

    // Öka Ja med 25px
    jaButton.style.fontSize = (jaSize + 25) + "px";

    // Minska Nej med 25%
    nejButton.style.fontSize = (nejSize * 0.75) + "px";
});

jaButton.addEventListener('click', () => {
    window.location.href = "jippie.html";
});
