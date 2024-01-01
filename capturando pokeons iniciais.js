/** Descrição
No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe um dos quatro pokemons. Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido.

Entrada
Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 4 Pikachu e 5 para Mewtwo.

Saída
A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido. */

// Entrada de dados
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido;

// Implemente as condições necessárias para a escolha do treinador
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
}

// Imprime a mensagem de boas-vindas com o Pokémon escolhido
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}
