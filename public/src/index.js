import { mostrarSomatometria } from "./modules/somatometria.js";
import { mostrarSignos } from "./modules/signos.js";
import { mostrarApgar } from "./modules/apgar.js";
import { mostrarSilverman } from "./modules/silverman.js";

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  // Crear selector de módulos
  const selector = document.createElement("select");
  selector.id = "modulo";
  selector.innerHTML = `
    <option value="">Selecciona módulo</option>
    <option value="somatometria">Somatometría</option>
    <option value="signos">Signos Vitales</option>
    <option value="apgar">Escala Apgar</option>
    <option value="silverman">Escala Silverman</option>
  `;
  root.appendChild(selector);

  // Crear contenedor para mostrar el contenido del módulo
  const contenido = document.createElement("div");
  contenido.id = "contenido";
  root.appendChild(contenido);

  // Mostrar módulo según selección
  selector.addEventListener("change", () => {
    const modulo = selector.value;
    switch (modulo) {
      case "somatometria":
        contenido.innerHTML = mostrarSomatometria();
        break;
      case "signos":
        contenido.innerHTML = mostrarSignos();
        break;
      case "apgar":
        contenido.innerHTML = mostrarApgar();
        break;
      case "silverman":
        contenido.innerHTML = mostrarSilverman();
        break;
      default:
        contenido.innerHTML = "";
    }
  });

  // Validación básica para formularios
  contenido.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Datos guardados correctamente ✅");
  });
});

