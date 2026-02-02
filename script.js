let price = 10000;
let qty = 1;

function changeQty(value) {
  qty += value;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  document.getElementById("total").innerText = price * qty;
}

function orderWhatsApp() {
  let total = price * qty;

  let message = `Bonjour 👋
Je souhaite commander :

🎁 Coffret Romance Exclusive
📦 Quantité : ${qty}
💰 Total : ${total} FCFA

Merci 🙏`;

  let phone = "225XXXXXXXX"; // MET TON NUMÉRO
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ❤️ Animation de cœurs */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
