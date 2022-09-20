if(localStorage.getItem('lojaLogada')){
    window.location.replace('http://127.0.0.1:5500/src/home.html');
}
//>>>>>>>>>>PAGINA CADASTRO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const cadNome = document.getElementById('cadNome');
const cadLoja = document.getElementById('cadLoja');
const cadcnpj = document.getElementById('cadcnpj');
const cadSenha = document.getElementById('cadSenha');

//>>>>>>>>>>PAGINA LOGIN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const cnpj = document.getElementById('cnpj');
const senha = document.getElementById('senha');


class lojas {
    constructor(nome, loja, cnpj, senha){
        this.nome = nome;
        this.loja = loja;
        this.cnpj = cnpj;
        this.senha = senha;
        this.produtos = [];
    }
}


let validacao;
function validarDados(){
    validacao = false;
    let cnpjInvalido = false;
    let cnpjLength = false;
    let senha = false;

    listaLojas = JSON.parse(localStorage.getItem('listaLojas') || '[]');

    // validar se cnpj contém 14 dígitos
    if(cadcnpj.value.length == 14){
        cnpjLength = true;
    } else{
        alert('CNPJ inválido!\nUm CNPJ válido deve possuir 14 dígitos!');
    }

    // validar se cnpj ainda não foi cadastrado
    if(cnpjLength == true){
        listaLojas.forEach((loja) =>{
            if(cadcnpj.value == loja.cnpj){
                alert('CNPJ já cadastrado!');
                cnpjInvalido = true;
            }
        })
    
    }

    //validar senha
    if(cadSenha.value.length > 4){
        senha = true;
    } else{
        alert('Sua senha deve ter no mínimo 5 caracteres!');
    }

    validacao = (cnpjLength == true) && (senha == true) && (cnpjInvalido == false) ? true : false;
}


let listaLojas;
function cadastrar(){

    validarDados();
    if(validacao == true){

        listaLojas = JSON.parse(localStorage.getItem('listaLojas') || '[]');

        let novaLoja = new lojas(cadNome.value, cadLoja.value, cadcnpj.value, cadSenha.value);
        listaLojas.push(novaLoja);

        localStorage.setItem('listaLojas', JSON.stringify(listaLojas));
        
        window.location.replace("http://127.0.0.1:5500/src/login.html");
    }
}


let lojaLogada = {
    nomeLog : "",
    lojaLog : "",
    cnpjLog : "",
    senhaLog : "",
    indexLog : "",
    produtosLog : ""
}
function login(){

    let verificacaoLogin = false;

    listaLojas = JSON.parse(localStorage.getItem('listaLojas') || '[]');

    listaLojas.forEach((loja, index) => {
        if((cnpj.value == loja.cnpj) && (senha.value == loja.senha)){
            console.log('cnpj e senha corretos');
            verificacaoLogin = true;

            lojaLogada = {
                nomeLog : loja.nome,
                lojaLog : loja.loja,
                cnpjLog : loja.cnpj,
                senhaLog : loja.senha,
                indexLog : index,
                produtosLog : loja.produtos
            }

            localStorage.setItem('lojaLogada', JSON.stringify(lojaLogada));
            
            window.location.replace('http://127.0.0.1:5500/src/home.html');
        }
    });

    
    // mensagem erro de login
    if(verificacaoLogin == false){
        alert('CNPJ ou senha incorreto!');
    }
}