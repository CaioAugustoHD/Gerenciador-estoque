const cadNome = document.getElementById('cadNome');
const cadLoja = document.getElementById('cadLoja');
const cadcnpj = document.getElementById('cadcnpj');
const cadSenh = document.getElementById('cadSenha');

const botao = document.querySelector('button');

listaLojas = [];

class lojas{
    constructor(nome, loja, cnpj, senha){
        this.nome = nome;
        this.loja = loja;
        this.cnpj = cnpj;
        this.senha = senha;
    }
}