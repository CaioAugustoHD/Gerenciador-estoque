const corpoTabela = document.querySelector('tbody');

// MODAL CREATE
const btnAbrirModalCreate = document.getElementById('btnAbrirModalCreate');
btnAbrirModalCreate.addEventListener('click', abrirModalCreate);

const modalCreate = document.getElementById('modal-create'); 
const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', validarDados);
const btnCancelar = document.querySelector('.btn-cancelar');
btnCancelar.addEventListener('click', fecharModal);

// INPUT'S
const addProduto = document.getElementById('addProduto');
const addQuantidade = document.getElementById('addQuantidade');
const addPreco = document.getElementById('addPreco');


function abrirModalCreate(){
    modalCreate.style.display = 'block';
}

function fecharModal(){
    modalCreate.style.display = 'none';
    addPreco.value = "";
    addProduto.value = "";
    addQuantidade.value = "";
}

let lojaLogada = {
    nomeLog : "",
    lojalog : "",
    cnpjlog : "",
    senhalog : "",
    indexLog : "",
    produtosLog : ""
}
const lerLojaLogada = () => lojaLogada = JSON.parse(localStorage.getItem('lojaLogada'));


// ADICIONAR PRODUTO
class produtos {
    constructor(produto, quantidade, preco){
        this.produto = produto;
        this.quantidade = quantidade;
        this.preco = preco;
    }
}


// VALIDAR DADOS DE ADC PRODUTO E ATIVAR A FUNÇÃO adicionarProduto
function validarDados(){

    if(addProduto.value.length >= 3){
        adicionarProduto();
    } else {
        alert('O nome do produto deve conter no mínimo 3 caracteres!');
    }
}

function adicionarProduto(){

    lerLojaLogada();
    
   let produto = new produtos(addProduto.value, addQuantidade.value, addPreco.value);
   lojaLogada.produtosLog.push(produto);

   localStorage.setItem('lojaLogada', JSON.stringify(lojaLogada));

    // LER E ADICIONAR
   adicionarNaTabela(addProduto.value, addQuantidade.value, addPreco.value);
   fecharModal();
}

function adicionarNaTabela(produto, quantidade, preco){

    const linha = document.createElement('tr');
    const produtoTabela = document.createElement('td');
    const produtoQuantidade = document.createElement('td');
    const produtoPreco = document.createElement('td');

    linha.appendChild(produtoTabela);
    linha.appendChild(produtoQuantidade);
    linha.appendChild(produtoPreco);
    corpoTabela.appendChild(linha);

    produtoTabela.innerHTML = produto;
    produtoQuantidade.innerHTML = quantidade;
    produtoPreco.innerHTML = preco;
}

function lerProdutosRegistrados(){

    lerLojaLogada();
    lojaLogada.produtosLog.forEach(produto => {
        adicionarNaTabela(produto.produto, produto.quantidade, produto.preco);        
    });
}

lerProdutosRegistrados();