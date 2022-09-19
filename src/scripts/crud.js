const corpoTabela = document.querySelector('tbody');

// MODAL CREATE
const btnAbrirModalCreate = document.getElementById('btnAbrirModalCreate');
btnAbrirModalCreate.addEventListener('click', () => abrirModal(modalCreate));

const modalCreate = document.getElementById('modal-create'); 
const btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', validarDados);

    // INPUT'S
const addProduto = document.getElementById('addProduto');
const addQuantidade = document.getElementById('addQuantidade');
const addPreco = document.getElementById('addPreco');

// TODOS BOTOES DE CANCELAR
const btnCancelar = document.querySelectorAll('.btn-cancelar');
btnCancelar.forEach((botao) => {
    botao.addEventListener('click', fecharModal);
})

//MODAL EDIT
function lerBotoesEditar(){
    let btnAbrirModalEdit = document.querySelectorAll('.btnAbrirModalEdit');
    btnAbrirModalEdit.forEach((botao) => {
    botao.addEventListener('click', () => abrirModal(modalEdit));
    });
}

const modalEdit = document.getElementById('modal-edit');
const btnSalvar = document.getElementById('btnSalvar');

function abrirModal(modal){
    modal.style.display = 'block';
}

function fecharModal(){
    modalCreate.style.display = 'none';
    modalEdit.style.display = 'none';
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
    const quantidadeTabela = document.createElement('td');
    const precoTabela = document.createElement('td');
    const opcoes = document.createElement('td');

    const btnEditar = document.createElement('button');
    btnEditar.innerHTML = "Edit";
    btnEditar.className = "btn-crud btnAbrirModalEdit";

    const btnExcluir = document.createElement('button');
    btnExcluir.innerHTML = "Del";
    btnExcluir.className = "btn-crud btnExcluirProduto";


    linha.appendChild(produtoTabela);
    linha.appendChild(quantidadeTabela);
    linha.appendChild(precoTabela);
    
    opcoes.appendChild(btnEditar);
    opcoes.appendChild(btnExcluir);
    linha.appendChild(opcoes);

    corpoTabela.appendChild(linha);

    produtoTabela.innerHTML = produto;
    quantidadeTabela.innerHTML = quantidade;
    precoTabela.innerHTML = preco;
}

function lerProdutosRegistrados(){

    lerLojaLogada();
    lojaLogada.produtosLog.forEach(produto => {
        adicionarNaTabela(produto.produto, produto.quantidade, produto.preco);        
    });
}

lerProdutosRegistrados();

lerBotoesEditar()