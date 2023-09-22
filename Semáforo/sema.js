// Seleciona todos os elementos com a classe 'luces-circulo' e armazena-os em uma NodeList
const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');

// Inicializa um contador para controlar qual luz está atualmente visível
let contadorDeLuz = 0;

// Esta função será chamada a cada 2 segundos para alternar as luzes
const mostrarLuz = () => {
    // Remove a classe atual para ocultar a luz atual
    $lucesDelCirculo[contadorDeLuz].className = 'luces-circulo';

    // Incrementa o contador e reinicia para 0 se ele passar de 2
    contadorDeLuz++;
    if (contadorDeLuz > 2) contadorDeLuz = 0;

    // Obtém a luz atual com base no contador e adiciona uma classe correspondente à sua cor
    const luzActual = $lucesDelCirculo[contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute('color'));
}

// Chama a função 'mostrarLuz' a cada 2000 milissegundos (2 segundos)
setInterval(mostrarLuz, 2000);
