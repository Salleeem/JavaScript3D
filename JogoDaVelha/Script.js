// Selecionando o elemento HTML com a classe "QuemJoga"
const QuemJoga = document.querySelector(".QuemJoga");

// Declarando variáveis globais
let Escolha; // Armazena os movimentos dos jogadores
let Jogador = "X"; // Controla de quem é a vez

// Definindo as posições de vitória no jogo da velha
let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Função de inicialização do jogo
function init() {
  Escolha = []; // Inicializa o array de movimentos

  // Define a mensagem indicando de quem é a vez
  QuemJoga.innerHTML = `Jogada de: ${Jogador}`;

  // Limpa o conteúdo dos botões do jogo e adiciona eventos de clique
  document.querySelectorAll(".main button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", Movimento); // Quando clicados, chama a função Movimento
  });
}

// Inicializa o jogo quando a página carrega
init();

// Função que lida com os movimentos dos jogadores
function Movimento(e) {
  const index = e.target.getAttribute("data-i"); // Pega o índice do botão clicado
  e.target.innerHTML = Jogador; // Exibe o símbolo do jogador atual no botão
  e.target.removeEventListener("click", Movimento); // Remove o evento de clique para impedir novas jogadas no botão clicado
  Escolha[index] = Jogador; // Armazena a jogada no array de movimentos

  setTimeout(() => {
    check(); // Após um breve intervalo, verifica se alguém venceu ou houve empate
  }, [100]);

  Jogador = Jogador === "X" ? "O" : "X"; // Alterna o jogador atual
  QuemJoga.innerHTML = `Jogada de: ${Jogador}`; // Atualiza a mensagem de vez do jogador
}

// Função que verifica se alguém ganhou ou houve empate
function check() {
  let UltimaJogada = Jogador === "X" ? "O" : "X"; // Obtém o símbolo do jogador anterior

  // Filtra os movimentos do jogador anterior
  const items = Escolha
    .map((item, i) => [item, i])
    .filter((item) => item[0] === UltimaJogada)
    .map((item) => item[1]);

  // Verifica se o jogador anterior ganhou com base nas posições de vitória
  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O jogador '" + UltimaJogada + "' ganhou a partida!"); // Exibe um alerta com o vencedor
      init(); // Reinicia o jogo
      return;
    }
  }

  // Verifica se houve empate (todos os espaços estão preenchidos)
  if (Escolha.filter((item) => item).length === 9) {
    alert("Empate!"); // Exibe um alerta de empate
    init(); // Reinicia o jogo
    return;
  }
}
