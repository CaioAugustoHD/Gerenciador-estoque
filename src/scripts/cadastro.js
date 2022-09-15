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
    }
}


let validacao;
function validarDados(){
    validacao = false;
    let cnpj = false;
    let senha = false;

    // validar cnpj
    if(cadcnpj.value.length == 14){
        cnpj = true;
    } else{
        alert('CNPJ inválido!');
    }

    //validar senha
    if(cadSenha.value.length > 4){
        senha = true;
    } else{
        alert('Sua senha deve ter no mínimo 5 caracteres!');
    }

    validacao = (cnpj == true) && (senha == true) ? true : false;
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


function login(){

    let verificacaoLogin = false;

    listaLojas = JSON.parse(localStorage.getItem('listaLojas') || '[]');

    listaLojas.forEach((loja) => {
        if((cnpj.value == loja.cnpj) && (senha.value == loja.senha)){
            console.log('cnpj e senha corretos');
            window.location.replace('http://127.0.0.1:5500/src/home.html');
            verificacaoLogin = true;
        }
    });

    
    // mensagem erro de login
    if(verificacaoLogin == false){
        alert('CNPJ ou senha incorreto!');
    }
}