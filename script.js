const price = 25000;
const qtyInput = document.getElementById("qty");
const totalSpan = document.getElementById("total");

qtyInput.addEventListener("input", () => {
  const qty = Number(qtyInput.value);
  totalSpan.textContent = (price * qty).toLocaleString("fr-FR");
});

function orderWhatsApp() {
  const qty = Number(qtyInput.value);
  const total = price * qty;
  const phone = "2250700000000"; // ton numéro

  const message = `
Bonjour,

Je souhaite commander :

Produit : Forever You
Prix unitaire : 25 000 FCFA
Quantité : ${qty}
Total : ${total.toLocaleString("fr-FR")} FCFA

Merci de me confirmer la procédure de paiement.
  `;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
