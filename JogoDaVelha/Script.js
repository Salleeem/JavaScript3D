const QuemJoga = document.querySelector(".QuemJoga");

let Escolha;
let Jogador = "X";

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

function init() {
  Escolha = [];

  QuemJoga.innerHTML = `Jogada de: ${Jogador}`;

  document.querySelectorAll(".main button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", Movimento);
  });
}

init();

function Movimento(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = Jogador;
  e.target.removeEventListener("click", Movimento);
  Escolha[index] = Jogador;

  setTimeout(() => {
    check();
  }, [100]);

  Jogador = Jogador === "X" ? "O" : "X";
  QuemJoga.innerHTML = `Jogada de: ${Jogador}`;
}

function check() {
  let UltimaJogada= Jogador === "X" ? "O" : "X";

  const items = Escolha
    .map((item, i) => [item, i])
    .filter((item) => item[0] === UltimaJogada)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("O jogador '" + UltimaJogada + "' ganhou a partida!");
      init();
      return;
    }
  }

  if (Escolha.filter((item) => item).length === 9) {
    alert("Empate!");
    init();
    return;
  }
}
