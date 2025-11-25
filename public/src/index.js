document.getElementById("apgarForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  let puntaje = 0;
  for (let campo of form.elements) {
    if (campo.tagName === "SELECT") {
      puntaje += parseInt(campo.value);
    }
  }
  document.getElementById("apgarResultado").textContent =
    "Puntaje Apgar: " + puntaje + " puntos";
});


