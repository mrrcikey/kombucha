const texto = "Descubra os segredos da kombucha: uma bebida natural, saborosa e cheia de benefícios!";
const elemento = document.querySelector(".boas-vindas p");

let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 50); // velocidade da digitação (menor = mais rápido)
  }
}

elemento.textContent = ""; // limpa o texto original
digitar();
