// script.js
const submitButton = document.getElementById('submit-btn');
const answerInput = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
const confettiCanvas = document.getElementById('confetti');

submitButton.addEventListener('click', () => {
  const answer = answerInput.value.trim().toLowerCase();
  if (answer === 'сумка' || answer === 'bagllet') {
    showSuccess();
    startConfetti();
  } else {
    showError();
  }
});

function showSuccess() {
  feedbackDiv.textContent = "Твій подарунок чекає тебе в «підсобці». Вдалого пошуку! Гав";
  feedbackDiv.className = 'success';
  feedbackDiv.style.display = 'block';
}

function showError() {
  feedbackDiv.textContent = "Давай ще раз!";
  feedbackDiv.className = 'error';
  feedbackDiv.style.display = 'block';
}

function startConfetti() {
  const confetti = confettiCanvas.getContext('2d');
  confettiCanvas.style.display = 'block';

  const particles = [];
  const colors = ['#ff7f50', '#ffdc73', '#63d0ff', '#a1ff70'];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      dx: Math.random() - 0.5,
      dy: Math.random() * 2 + 1
    });
  }

  function animate() {
    confetti.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.y > window.innerHeight) p.y = 0;
      confetti.beginPath();
      confetti.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      confetti.fillStyle = p.color;
      confetti.fill();
    });
    requestAnimationFrame(animate);
  }

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  animate();

  setTimeout(() => (confettiCanvas.style.display = 'none'), 5000);
}
