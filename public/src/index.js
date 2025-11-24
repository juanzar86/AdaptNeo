document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  root.innerHTML = `
    <section>
      <h2>Evaluación Neonatal</h2>
      <form>
        <label>Frecuencia cardíaca:</label>
        <input type="number" placeholder="latidos/min" />
        <br />
        <label>Frecuencia respiratoria:</label>
        <input type="number" placeholder="respiraciones/min" />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </section>
  `;
});
