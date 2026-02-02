// 💰 Prix et quantité
let price = 10000; // prix unitaire en FCFA
let qty = 1;

// ⚖️ Met à jour la quantité et le total
function changeQty(value) {
  qty += value;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  document.getElementById("total").innerText = price * qty + " FCFA";
}

// 📲 Commander via WhatsApp avec facture automatique
function orderWhatsApp() {
  let total = price * qty;

  let message = `🛍️ Bonjour 👋
Je souhaite passer commande sur Forever You :

🎁 Produit : Coffret Romance Exclusive
💎 Prix unitaire : ${price} FCFA
📦 Quantité : ${qty}
💰 Prix total : ${total} FCFA

Merci de confirmer ma commande 🙏`;

  let phone = "237658715038"; // ton numéro WhatsApp
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ❤️ Animation de cœurs rouge et rose
const colors = ["#FF1744", "#FF80AB"]; // rouge et rose

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤"; // coeur Unicode
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 20) + "px"; // taille aléatoire
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 600);
