/**Descrição
Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes
 regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima.

Tarefa: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica 
de programação para representar cada golpe na rocha e determinar qual minério foi obtido.

Entrada
O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de 
golpes que você deseja dar com a picareta.

Saída
Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. 
Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 
3: Diamante e 4: Pedra. */

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada (string) para um valor numérico (int).
const quantidadeGolpes = parseInt(gets());

// Tipos de minerais: Carvão, Ferro, Diamante e Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
  let minaIndex = (i - 1) % minerais.length;
  
  // Exibe o número do golpe, o caractere ":" e o tipo de minério obtido
  print(i + ": " + minerais[minaIndex]);
}
