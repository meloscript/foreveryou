const price = 10000;
const qtyInput = document.getElementById("qty");
const totalSpan = document.getElementById("total");

qtyInput.addEventListener("input", () => {
  totalSpan.textContent = price * qtyInput.value;
});

function order() {
  const qty = qtyInput.value;
  const total = price * qty;
  const msg = `Bonjour, je souhaite commander ${qty} coffret(s) Forever You 💝.\nTotal : ${total} FCFA`;
  const phone = "22500000000"; // ton numéro WhatsApp
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}

/* ❤️ animation des cœurs */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 10 + 5,
    speed: Math.random() * 1 + 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < -20) hearts.splice(i, 1);
  });
}

setInterval(createHeart, 300);
function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();
