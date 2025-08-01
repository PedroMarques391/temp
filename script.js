\let contador = 0;

const botao = document.getElementById("botao");
const botaoDec = document.getElementById("botao-dec");
const paragrafo = document.getElementById("contador");

botao.addEventListener("click", () => {
    contador++;
    paragrafo.textContent = contador;
});

botaoDec.addEventListener("click", () => {
    if (contador === 0) return paragrafo.textContent = 'numero negativo nao.'
    contador--;
    paragrafo.textContent = contador;

});
