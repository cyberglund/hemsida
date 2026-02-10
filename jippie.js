/* === Confetti === */
const container = document.getElementById('confetti-container');
const colors = ['#ff0', '#f00', '#0f0', '#00f', '#ff1493', '#00ffff', '#ffa500'];

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const width = Math.random() * 15 + 10;
    const height = Math.random() * 30 + 15;
    confetti.style.width = width + 'px';
    confetti.style.height = height + 'px';

    const duration = Math.random() * 3 + 2;
    confetti.style.animationDuration = duration + 's';

    const rotation = Math.random() * 360;
    confetti.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(confetti);

    setTimeout(() => { confetti.remove(); }, duration * 1000);
}

setInterval(createConfetti, 50);

/* === Spåra Ja/Nej klick på första sidan === */
const jaButton = document.getElementById('ja');
const nejButton = document.getElementById('nej');

if (jaButton && nejButton) {
    let jaSize = parseInt(window.getComputedStyle(jaButton).fontSize);
    let nejSize = parseInt(window.getComputedStyle(nejButton).fontSize);

    jaButton.addEventListener('click', () => {
        console.log(`[${new Date().toLocaleString()}] Knapp klickad: Ja, User-Agent: ${navigator.userAgent}`);
        window.location.href = "jippie.html"; // Öppna samma sida eller annan sida
    });

    nejButton.addEventListener('click', () => {
        console.log(`[${new Date().toLocaleString()}] Knapp klickad: Nej, User-Agent: ${navigator.userAgent}`);
        jaSize += 25;
        nejSize *= 0.75;
        jaButton.style.fontSize = jaSize + "px";
        nejButton.style.fontSize = nejSize + "px";
    });
}

/* === Fråga: "Vill du veta vad vi ska göra?" === */
const revealBtn = document.getElementById('reveal-btn');
if (revealBtn) {
    revealBtn.addEventListener('click', () => {
        // Öppnar ny sida
        window.location.href = "surprise.html";
    });
}
