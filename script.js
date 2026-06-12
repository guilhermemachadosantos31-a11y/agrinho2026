// Lista de dicas sustentáveis para o Agrinho
const dicasAgrinho = [
    "💧 Economia de Água: A irrigação por gotejamento evita o desperdício, levando água direto à raiz da planta.",
    "🐝 Proteja as Abelhas: Elas são responsáveis pela polinização de grande parte dos alimentos que consumimos!",
    "🍂 Compostagem: Restos de alimentos orgânicos podem virar adubo natural para fortalecer a terra sem produtos químicos.",
    "🚜 Tecnologia no Campo: O uso de drones ajuda a identificar pragas rapidamente, evitando o uso exagerado de defensivos.",
    "🌳 Plantar Árvores: Criar barreiras de árvores ao redor das plantações ajuda a proteger o solo contra a erosão do vento e da chuva."
];

// Selecionando os elementos da página HTML
const botaoDica = document.getElementById("btn-dica");
const textoDica = document.getElementById("texto-dica");

// Função que escolhe uma dica aleatória
function mostrarDicaAleatoria() {
    // Sorteia um número de 0 até o tamanho da nossa lista de dicas
    const numeroAleatorio = Math.floor(Math.random() * dicasAgrinho.length);
    
    // Pega a dica sorteada
    const dicaSorteada = dicasAgrinho[numeroAleatorio];
    
    // Altera o texto na tela para mostrar a dica
    textoDica.textContent = dicaSorteada;
}

// Diz ao botão para escutar o "clique" do usuário e chamar a função
botaoDica.addEventListener("click", mostrarDicaAleatoria);