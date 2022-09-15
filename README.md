<h1 align="center">Gerenciador virtual de loja</h1>
<p align="center">Aplicação que permite um gerente cadastrar sua loja e fazer o gerenciamento dos produtos e vendas de forma virtual</p>
<p align="center">Em construção... 🚧🛠 

---

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
- [ ] Criar função de login (ao acionar o botao "entrar")
  - [x] verificar se o cnpj e a senha estão corretos (se estão registradas no banco de dados)
    - [x] Caso não: exibir mensagem de erro
    - [ ] Caso sim:
      - [ ] entre na página home com o login da loja
- [ ] Criar página home, com o gerenciador CRUD de produtos (home.html)
  - [ ] estilizar base da página (home.css)
- [ ] Criar sistema CRUD dos produtos
  - [ ] funcão adicionar produto
  - [ ] função editar produto
  - [ ] função excluir produto
  - [ ] armazenar produtos no localStorage
- [ ] Ao fazer cadastro de nova loja, verificar se o cnpj já está cadastrado
- [ ] Terminar estilização das páginas
- [ ] Deixar as páginas responsivas

---

Futuras melhorias
- [ ] Limitar no input de cnpj máximo de 14 dígitos
- [ ] Estilizar mensagens de erro

