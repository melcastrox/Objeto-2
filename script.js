// Exercício 1 – Array e Objetos
const sacolao = [];

const fruta1 = { nome: 'Banana', preco: 4.5, disponibilidade: true };
const fruta2 = { nome: 'Maçã', preco: 5.0, disponibilidade: true };
const fruta3 = { nome: 'Abacaxi', preco: 6.2, disponibilidade: false };

sacolao.push(fruta1, fruta2, fruta3);

console.log("Exercício 1 - sacolão:", sacolao);

// Exercício 2 – Acessando propriedades de objetos
const filme = {
  nome: "Auto da Compadecida",
  ano: 2000,
  elenco: [
    "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
    "Virginia Cavendish"
  ],
  transmissoesHoje: [
    { canal: "Telecine", horario: "21h" },
    { canal: "Canal Brasil", horario: "19h" },
    { canal: "Globo", horario: "14h" }
  ]
};

console.log("Exercício 2 - a) Primeiro ator:", filme.elenco[0]);
console.log("Exercício 2 - b) Último ator:", filme.elenco[filme.elenco.length - 1]);
console.log("Exercício 2 - c) Transmissões de hoje:", filme.transmissoesHoje);
console.log("Exercício 2 - d) Horário Canal Brasil:", filme.transmissoesHoje[1].horario);

// Exercício 3 – Spread e manipulação de objetos
const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5
};

// a) Cópia com modificações
const pokemon2 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água"
};

// b) Adiciona ataques ao original
pokemon1.ataques = [];

// c) Primeiro ataque
const ataque1 = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100
};
pokemon1.ataques.push(ataque1);

// d) Cópia com ataques via spread
pokemon2.ataques = [...pokemon1.ataques];

// e) Segundo ataque para o Bulbasaur
pokemon1.ataques.push({
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Grama",
  precisao: 100
});

// f) Segundo ataque para o Squirtle
pokemon2.ataques.push({
  nome: "Jato de Água",
  dano: 40,
  tipo: "Água",
  precisao: 100
});

// g) Impressão final
console.log("Exercício 3 - pokemon1:", pokemon1);
console.log("Exercício 3 - pokemon2:", pokemon2);
