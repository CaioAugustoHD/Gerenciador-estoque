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
let btnAbrirModalEdit = document.querySelectorAll('.btnAbrirModalEdit');

const modalEdit = document.getElementById('modal-edit');
const btnSalvar = document.getElementById('btnSalvar');
btnSalvar.addEventListener('click', validarDados);

    // INPUT'S
const editProduto = document.getElementById('editProduto');
const editQuantidade = document.getElementById('editQuantidade');
const editPreco = document.getElementById('editPreco');


function abrirModal(modal){
    modal.style.display = 'block';
}

function fecharModal(){
    modalCreate.style.display = 'none';
    modalEdit.style.display = 'none';

    addPreco.value = "";
    addProduto.value = "";
    addQuantidade.value = "";

    editPreco.value = "";
    editProduto.value = "";
    editQuantidade.value = "";

    indexProduto = "";
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
    } else if (editProduto.value.length >= 3){
        salvarProduto();
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

let indexProduto;
function capturarProduto(){
    
    lerLojaLogada();
    
    const produtoSelecionado = event.target.parentElement.parentElement.firstElementChild.textContent;
    
    lojaLogada.produtosLog.forEach((produto, index) => {
        if(produtoSelecionado == produto.produto){
            indexProduto = index;

            editProduto.value = produto.produto;
            editQuantidade.value = produto.quantidade;
            editPreco.value = produto.preco;
        }
    });
}

function salvarProduto(){
    
    let produtoEditado = {
        produto : editProduto.value,
        quantidade : editQuantidade.value,
        preco : editPreco.value
    }
    
    lojaLogada.produtosLog[indexProduto] = produtoEditado;
    localStorage.setItem('lojaLogada', JSON.stringify(lojaLogada));

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
    btnEditar.addEventListener('click', () => {
        capturarProduto();
        abrirModal(modalEdit);
    })

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

// ADICIONAR NA TABELA OS PRODUTOS JÁ REGISTRADOS AO RECARREGAR A PÁGINA
function lerProdutosRegistrados(){

    lerLojaLogada();
    lojaLogada.produtosLog.forEach(produto => {
        adicionarNaTabela(produto.produto, produto.quantidade, produto.preco);        
    });
}

lerProdutosRegistrados();