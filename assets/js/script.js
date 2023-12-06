document
  .getElementById("procesadorTexto")
  .addEventListener("input", actualizarContadorPalabras);

document.getElementById("botonDescarga").addEventListener("click", function () {
  downloadText();
});

function actualizarContadorPalabras() {
  const text = document.getElementById("procesadorTexto").value;
  const wordCount = text.split(/\s+/).filter(function (word) {
    return word.length > 0;
  }).length;

  document.getElementById(
    "contadorPalabrast"
  ).innerText = `Palabras: ${wordCount}`;
}

function downloadText() {
  const text = document.getElementById("procesadorTexto").value;

  if (text.length > 0) {
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "texto.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    alert("El texto está vacío. Escribe algo antes de descargar.");
  }
}
