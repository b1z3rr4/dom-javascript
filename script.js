const titulo = document.getElementById('titulo');

const input = document.getElementById('meu-input');

const botaoAlterarTexto = document.getElementById('alterarTexto');

const botaoAdicionarElemento = document.getElementById('adicionarElemento');

const botaoRemoverElemento = document.getElementById('removerElemento');

const botaoModificarEstilo = document.getElementById('modificarEstilo');

const removerEstilos = document.getElementById('removerEstilos');

const lista = document.getElementById('lista');

function alteraElementosNaPagina() {
    titulo.textContent = 'Hello'

    titulo.innerHTML = '<p>Meu Titulo</p>'

    const paragrafos = document.getElementsByClassName('paragrafo')

    const textoDoPrimeiroParagrafo = paragrafos[0].textContent

    input.setAttribute('value', textoDoPrimeiroParagrafo);

    input.removeAttribute('value');
}

function adicionaElementoNaLista() {
    const novoItem = document.createElement('li');

    const textoDoInput = input.value;

    novoItem.textContent = textoDoInput;

    lista.appendChild(novoItem);
}

function removeElementoNaLista() {
    if (lista.lastElementChild) {
        lista.removeChild(lista.lastElementChild);
    }
}

function modificaEstiloDoTexto() {
    const botoes = document.querySelectorAll('button');

    for (let i = 0; i < botoes.length; i++) {
        // botoes[i].style.backgroundColor = 'blue';
        // botoes[i].style.color = 'white';

        // botoes[i].style.cssText = 'background-color: blue; color: white;';

        // botoes[i].className = 'botoes-azul';

        botoes[i].classList.add('botoes-azul');
    }
}


function removerEstilosDosBotoes() {
    const botoes = document.querySelectorAll('button');

    for (let i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('botoes-azul');
    }
}

// Callback
botaoAlterarTexto.addEventListener('click', alteraElementosNaPagina);

botaoAdicionarElemento.addEventListener('click', adicionaElementoNaLista);

botaoRemoverElemento.addEventListener('click', removeElementoNaLista);

botaoModificarEstilo.addEventListener('click', modificaEstiloDoTexto);

removerEstilos.addEventListener('click', removerEstilosDosBotoes)

// mouseover
// mouseout

// keydown
// keyup

// submit

// change

// input

// focus
// blur

const primeiroItemDaLista = lista.querySelector('li');

primeiroItemDaLista.addEventListener('mouseover', () => {
    console.debug('passou o mouse na li com texto: ', primeiroItemDaLista.textContent);
})

primeiroItemDaLista.addEventListener('mouseout', () => {
    console.debug('saiu com o mouse da li com texto: ', primeiroItemDaLista.textContent);
})

input.addEventListener('keydown', (event) => {
    console.debug(event.currentTarget.value);
})

input.addEventListener('keyup', (event) => {
    console.debug(event.currentTarget.value);
})

const select = document.getElementById('meu-seletor');

select.addEventListener('change', (event) => {
    console.debug('Mudou o valor: ', event.currentTarget.value);
})

input.addEventListener('focus', () => {
    console.debug('Selecionei o input');
})

input.addEventListener('blur', () => {
    console.debug('Tirei a seleção do input');
})