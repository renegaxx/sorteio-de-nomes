const btnSortear = document.querySelector('.sortear');
// btnSortear = ativa o javaScript
const textarea = document.querySelector('textarea');
// textarea
const tagResultado = document.querySelector('.resultado p');
const popUpResultado = document.querySelector('.resultado');

function pegarDadosFormulario() {
    const valorCampo = textarea.value
    //pega o texto digitado pelo usuario
    const listaNomes = valorCampo.split(",");
    //separa os nomes pelas virgula
    const tamanhoArray = listaNomes.length
    /*conta quantos nomes, a biblioteca length conta o tamanho da string */
    const posicaoNome = gerarNumeroAleatoria (tamanhoArray);
    /* gerar um numero aleatorio correspondente a posição de um nome */
    const nome = listaNomes[posicaoNome]  
    //recebe o nome sorteado

    mostraResultado(nome);
    textarea.value =""
}

btnSortear.addEventListener("click",
pegarDadosFormulario);

function gerarNumeroAleatoria(tamanhoArray) {
    return Math.floor(Math.random()*(tamanhoArray-0)+0);
}
    
function mostraResultado(nome) {
    tagResultado.innerHTML = `Resultado ${nome}`
    popUpResultado.classList.add("Resultado");
}