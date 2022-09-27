if(localStorage.getItem('lojaLogada') == null){
    alert('Você precisa estar logado!');
    window.location.replace('./login.html');
}

const corpoTabela = document.querySelector('tbody');
const titulo = document.querySelector('h1');

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

// BOTÃO LOGOUT
const btnLogout = document.getElementById('logout');
btnLogout.addEventListener('click', logout);


function abrirModal(modal){
    modal.style.display = 'block';
}

function fecharModal(){
    modalCreate.style.display = 'none';
    modalEdit.style.display = 'none';

    addPreco.value = 0;
    addProduto.value = "";
    addQuantidade.value = 1;

    editPreco.value = "";
    editProduto.value = "";
    editQuantidade.value = "";

    indexProduto = "";
}

let lojaLogada = {
    nomeLog : "",
    lojaLog : "",
    cnpjLog : "",
    senhaLog : "",
    indexLog : "",
    produtosLog : ""
}
const lerLojaLogada = () => lojaLogada = JSON.parse(localStorage.getItem('lojaLogada'));

lerLojaLogada();
titulo.innerHTML = lojaLogada.lojaLog;

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

        if((addQuantidade.value == "")||(addPreco.value == "")){
            alert('Prencha todos os campos!');
        } else {
            adicionarProduto();
        }

    } else if (editProduto.value.length >= 3){

        if((editQuantidade.value == "")||(editPreco.value == "")){
            alert('Prencha todos os campos!');
        } else {
            salvarProduto();
        }

    } else {
        alert('O nome do produto deve conter no mínimo 3 caracteres!');
    }
}

function adicionarProduto(){

    // VALIDAR SE JÁ EXISTE UM PRODUTO COM ESSE NOME
    let nomeInvalido = false;
    lerLojaLogada();
    lojaLogada.produtosLog.forEach((produto) => {
        if(addProduto.value == produto.produto){
            nomeInvalido = true;
            alert('Já existe um produto com esse nome!')
        }
    })
    
    if(nomeInvalido == false){
        let produto = new produtos(addProduto.value, addQuantidade.value, addPreco.value);
        lojaLogada.produtosLog.push(produto);

        localStorage.setItem('lojaLogada', JSON.stringify(lojaLogada));

            // LER E ADICIONAR
        adicionarNaTabela(addProduto.value, addQuantidade.value, addPreco.value);
        fecharModal();
    }
}

let indexProduto;
let produtoSelecionado;
function capturarProduto(){
    
    lerLojaLogada();
    
    produtoSelecionado = event.target.parentElement.parentElement;
    let nomeProdutoSelecionado = produtoSelecionado.firstElementChild.textContent;
    
    lojaLogada.produtosLog.forEach((produto, index) => {
        if(nomeProdutoSelecionado == produto.produto){
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

    // ATUALIZAR IMEDIATAMENTE NA TABELA
    produtoSelecionado.firstElementChild.innerHTML = produtoEditado.produto;
    produtoSelecionado.children[1].innerHTML = produtoEditado.quantidade;
    produtoSelecionado.children[2].innerHTML = "R$ " +produtoEditado.preco;

    fecharModal();
}

function excluirProduto(){

    const apagar = confirm(`Deseja mesmo excluir ${lojaLogada.produtosLog[indexProduto].produto}?`);
    if(apagar){
        lojaLogada.produtosLog.splice(indexProduto, 1);
        localStorage.setItem('lojaLogada', JSON.stringify(lojaLogada));

        // REMOVER IMEDIATAMENTE DA TABELA
        produtoSelecionado.remove();
    }

}

function adicionarNaTabela(produto, quantidade, preco){

    const linha = document.createElement('tr');
    const produtoTabela = document.createElement('td');
    const quantidadeTabela = document.createElement('td');
    const precoTabela = document.createElement('td');
    const opcoes = document.createElement('td');

    const btnEditar = document.createElement('button');
    btnEditar.className = "btn-crud btnAbrirModalEdit";
    btnEditar.addEventListener('click', () => {
        capturarProduto();
        abrirModal(modalEdit);
    })

    const btnExcluir = document.createElement('button');
    btnExcluir.className = "btn-crud btnExcluirProduto";
    btnExcluir.addEventListener('click', () => {
        capturarProduto();
        excluirProduto();
    })


    linha.appendChild(produtoTabela);
    linha.appendChild(quantidadeTabela);
    linha.appendChild(precoTabela);
    
    opcoes.appendChild(btnEditar);
    opcoes.appendChild(btnExcluir);
    linha.appendChild(opcoes);

    corpoTabela.appendChild(linha);

    produtoTabela.innerHTML = produto;
    quantidadeTabela.innerHTML = quantidade;
    precoTabela.innerHTML = 'R$ '+ preco;
}

// ADICIONAR NA TABELA OS PRODUTOS JÁ REGISTRADOS AO RECARREGAR A PÁGINA
function lerProdutosRegistrados(){

    lerLojaLogada();
    lojaLogada.produtosLog.forEach(produto => {
        adicionarNaTabela(produto.produto, produto.quantidade, produto.preco);        
    });
}

function logout(){

    let listaLojas = JSON.parse(localStorage.getItem('listaLojas'));
    lerLojaLogada();
    let indexLoja = lojaLogada.indexLog;
   
    let lojaLogout = {
        nome : lojaLogada.nomeLog,
        loja : lojaLogada.lojaLog,
        cnpj : lojaLogada.cnpjLog,
        senha : lojaLogada.senhaLog,
        produtos : lojaLogada.produtosLog
    }
    console.log(lojaLogout);
    listaLojas[indexLoja] = lojaLogout;

    localStorage.setItem('listaLojas', JSON.stringify(listaLojas));
    localStorage.removeItem('lojaLogada');

    window.location.replace('./login.html');

}

lerProdutosRegistrados();