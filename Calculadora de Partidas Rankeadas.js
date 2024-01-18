// Função que calcula o saldo de vitórias e o nível do jogador
function calculaSaldo(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldo = vitorias - derrotas;
    // Inicializa o nível como uma string vazia
    let nivel = "";
    // Verifica o nível de acordo com o número de vitórias
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
    // Retorna um objeto com o saldo e o nível
    return { saldo: saldo, nivel: nivel };
  }
  
  // Exemplo de uso da função
  // Digite o número de vitórias e derrotas do jogador
  let vitorias = 75;
  let derrotas = 25;
  // Chama a função e armazena o resultado em uma variável
  let resultado = calculaSaldo(vitorias, derrotas);
  // Exibe a mensagem com o saldo e o nível do jogador
  console.log(
    "O Herói tem de saldo de " +
      resultado.saldo +
      " está no nível de " +
      resultado.nivel
  );
  