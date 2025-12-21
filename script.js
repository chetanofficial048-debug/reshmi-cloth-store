function openWhatsApp() {
  const msg = "Hello, I want to know about  clothing at Reshmi Cloth Store.";
  window.open(
    "https://wa.me/919901095751?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

