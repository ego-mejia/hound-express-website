function buscar() {
  let query = document.getElementById("search").value;
  if (query) {
    alert("Buscando: " + query);
    // Aquí puedes hacer una búsqueda en una base de datos o redirigir a otra página
    // Ejemplo: window.location.href = "/buscar?id=" + query;
  }
}

// Búsqueda en tiempo real
document.getElementById("search").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    buscar();
  }
});
