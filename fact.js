function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

const cajaResultado = document.getElementById("resultado");

let terminado = false;

while (terminado === false) {
 
  const respuesta = prompt("Por favor ingresa un número entero (0 o mayor):");

  if (respuesta === null) {
    cajaResultado.textContent = "Programa cancelado.";
    break;
  }

  const numero = Number(respuesta);

  if (respuesta.trim() === "" || isNaN(numero)) {
    alert("Error: No es un número. Sigue intentando.");
  }
  
  else if (numero < 0 || !Number.isInteger(numero)) {
    alert("Error: Por favor escribe un número entero mayor o igual a 0.");
  }
  
  else {
    cajaResultado.textContent = "Genial, el factorial de " + numero + " es: " + factorial(numero);
    terminado = true;
  }
}