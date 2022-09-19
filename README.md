<h1 align="center">Gerenciador virtual de loja</h1>
<p align="center">Aplicação que permite um gerente cadastrar sua loja e fazer o gerenciamento dos produtos e vendas de forma virtual</p>
<p align="center">Em construção... 🚧🛠 

---

<h2>Sistema cadastro e login</h2>

- [x] Criar página de login da loja (login.html)
  - [x] estilizar base da página (login.css)
- [x] Criar página de cadastro para uma nova loja (cadastro.html)
  - [x] estilizar base da página (cadastro.html)
- [x] Criar função de cadastro (ao acionar o botao "cadastrar")
  - [x] validar se os valores estão corretos
    - [x] cnpj com 14 dígitos
    - [x] senha com mínimo de 5 caracteres
      - [x] Caso não: exibir mensagem de erro
      - [x] Caso sim:    
        - [x] pegar os valores de cada input
        - [x] criar um objeto da classe lojas com os dados na loja cadastrada
        - [x] adicionar objeto no array de lista com todas as lojas
        - [x] armazenar no localStorage a lista de lojas
        - [x] ir para a tela de login
- [x] Criar função de login (ao acionar o botao "entrar")
  - [x] verificar se o cnpj e a senha estão corretos (se estão registradas no banco de dados)
    - [x] Caso não: exibir mensagem de erro
    - [x] Caso sim:
      - [x] entre na página home com o login e os dados da loja

---

- [x] Criar página home, para o gerenciador CRUD de produtos (home.html)
  - [x] estilizar base da página (home.css)
  - [x] criar modal

---

<h2>Criar sistema CRUD dos produtos</h2>

- [x] Funcão adicionar produto
  - [x] validar dados do produto. Se SIM: 
    - [x] adicionar produto na lista e localStorage
    - [x] adicionar na tabela 
    - [x] ao recarregar a página, os produtos ja registrados são insseridos na tabela
- [ ] Função editar produto da lista e localStorage
  - [x] criar botão e modal para edicão
  - [x] criar funcao capturar os dados e o elemento que foi selecionado
  - [x] exibir no input os dados capturados
  - [ ] criar função botão salvar
    - [x] validar dados do produto. Se SIM:
      - [x] alterar/substituir na lista e localSorage
      - [ ] alterar na tabela 
- [ ] Função excluir produto
  - [ ] excluir da lista e localStorage
  - [ ] excluir da tabela
- [ ] Criar função de logout
  - [ ] excluir os itens necessarios no localStorage

---

- [ ] Terminar estilização das páginas
- [ ] Deixar as páginas responsivas
- [ ] Validar TODOS os campos de input do projeto
  - [ ] ao cadastrar nova loja, verificar se o cnpj já está cadastrado
  - [ ] ao adicionar/editar produto, verificar se o nome já existe
- [ ] Deixar todas as paginas com token 

---

<h2>Futuras melhorias</h2>

- [ ] Limitar no input de cnpj máximo de 14 dígitos
- [ ] Estilizar mensagens de erro
- [ ] Criar configurações da loja

