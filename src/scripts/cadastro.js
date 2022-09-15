const cadNome = document.getElementById('cadNome');
const cadLoja = document.getElementById('cadLoja');
const cadcnpj = document.getElementById('cadcnpj');
const cadSenha = document.getElementById('cadSenha');

const botao = document.querySelector('button');
botao.addEventListener('click', cadastrar);

listaLojas = [];

class lojas{
    constructor(nome, loja, cnpj, senha){
        this.nome = nome;
        this.loja = loja;
        this.cnpj = cnpj;
        this.senha = senha;
    }
}

function validacao(){
    // validar cnpj
    if(cadcnpj.value.length == 14){
        console.log('valido')
    } 

    //validar senha
    if(cadSenha.value.length > 4){
        console.log('senha valida')
    }
}


function cadastrar(){
    validacao();
}