const button1 = document.getElementById("rolar1");
const button2 = document.getElementById("rolar2");
const reset = document.getElementById("reset");
const face1 = document.getElementById("face1");
const face2 = document.getElementById("face2");
const pontos1 = document.getElementById("pontos1");
const pontos2 = document.getElementById("pontos2");
const pontosE = document.getElementById("pontosE");

let sorteador1;
let sorteador2;
let jogador1 = 0,
  jogador2 = 0,
  empate = 0,
  rodada = 0;

pontos1.innerText = jogador1;
pontos2.innerText = jogador2;
pontosE.innerText = empate;

const clickBtn1 = () => {
  button1.disabled = true;
  sorteador1 = Math.floor(Math.random() * 6 + 1);
  
  rolar(sorteador1,face1);

  button2.disabled = false;
};

const clickBtn2 = () => {
  button2.disabled = true;
  sorteador2 = Math.floor(Math.random() * 6 + 1);
  
  rolar(sorteador2,face2);

  setTimeout(function () {
    if (sorteador1 > sorteador2) {
      jogador1++;
      pontos1.innerText = jogador1;
      setTimeout(function () {
        alert("Vitoria do Jogador 1!");
      }, 100);

      rodada++;
    } else if (sorteador1 < sorteador2) {
      jogador2++;
      pontos2.innerText = jogador2;
      setTimeout(function () {
        alert("Vitoria do Jogador 2!");
      }, 100);

      rodada++;
    } else {
      empate++;
      pontosE.innerText = empate;

      setTimeout(function () {
        alert("Dessa vez foi empate!");
      }, 100);
      rodada++;
    }

    if (rodada == 10) {
      if (jogador1 > jogador2) {
        setTimeout(function (){ 
          alert(
          "Final do jogo! O vencedor foi o Jogador 1 com " +
            jogador1 +
            " vitorias."
        );
        document.location.reload(true);},150);
      } else if (jogador1 < jogador2) {
        setTimeout(function (){
          alert(
          "Final do jogo! O vencedor foi o Jogador 2 com " +
            jogador2 +
            " vitorias."
        );
        document.location.reload(true);},150);
      } else {
        setTimeout(function (){
          alert("Final do jogo! O jogo emocionante terminou em empatado!");
        document.location.reload(true);},150);
      }
    }
    setTimeout(function () {
      face1.src = "Image/dados-funcao-0.png";
      face2.src = "Image/dados-funcao-0.png";
    }, 200);
  }, 100);

  button1.disabled = false;
};

const clickReset = () => {
  document.location.reload(true);
};

button1.onclick = clickBtn1;
button2.onclick = clickBtn2;
reset.onclick = clickReset;

function rolar(sorteador,face) {
  switch (sorteador) {
    case 1:
      face.src = "Image/dados-funcao-1.png";
      break;
    case 2:
      face.src = "Image/dados-funcao-2.png";
      break;
    case 3:
      face.src = "Image/dados-funcao-3.png";
      break;
    case 4:
      face.src = "Image/dados-funcao-4.png";
      break;
    case 5:
      face.src = "Image/dados-funcao-5.png";
      break;
    case 6:
      face.src = "Image/dados-funcao-6.png";
      break;
    default:
      //caso contrário
      break;
  }
};

