# Angular Order Manager

Esta é uma aplicação de gerenciamento de pedidos para restaurantes, permitindo uma experiência eficiente tanto para clientes quanto para administradores.
Construida inicialmente para ser uma aplicação web com foco mobile

### Teste a aplicação em: [Angular-Order-Manger](https://angular-order-mananger.vercel.app/)

## Funcionalidades Principais

- **Login Social**: Permite autenticação fácil e rápida.
- **Gerenciamento de Pedidos**: Organize e controle os pedidos realizados pelos clientes.
- **Integração com WhatsApp**: Comunicação ágil e eficiente para atender os clientes.
- **Integração com API de Produtos**: Conexão simples para buscar ou atualizar produtos.

## Tecnologias Utilizadas

- **Angular**: Versão 16.2.0
- **Firebase**: Para autenticação e armazenamento.
- **Angular Material**: Para componentes de interface responsivos e modernos.
- **RxJS**: Para programação reativa.
- **Akita**: Para gerenciamento de estado.
- **TypeScript**: Linguagem principal do projeto.
- **SCSS**: Estilização avançada.

E mais pacotes listados no `package.json`.

## Como Rodar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- **Node.js**: Versão >= 18.10.0
- **Angular CLI**: Versão 16.2.16
- **npm**: Gerenciador de pacotes (incluído com o Node.js)

### Passos para Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/angular-order-manager.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd angular-order-manager
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Rode o projeto localmente:
   ```bash
   ng serve
   ```

5. Acesse no navegador:
   ```
   http://localhost:4200
   ```

## Estrutura do Projeto

O projeto segue a estrutura padrão do Angular:

- **`src/app`**: Contém os módulos e componentes principais da aplicação.
  - **`cardapio/`**: Tela de cardápio e funcionalidades relacionadas.
  - **`carrinho/`**: Módulo para gerenciamento do carrinho de compras.
  - **`header/`**: Cabeçalho compartilhado entre as telas.
  - **`home/`**: Página inicial da aplicação.
  - **`shared/`**: Componentes e serviços reutilizáveis.
  - **`stores/`**: Gerenciamento de estado utilizando Akita.

- **`src/assets`**: Contém arquivos estáticos, como imagens e ícones.
- **`src/environments`**: Configurações de ambientes (produção e desenvolvimento).
- **`src/styles.scss`**: Estilizações globais.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Abra uma issue para discutir a funcionalidade ou bug.
2. Faça um fork do repositório.
3. Crie uma branch para sua contribuição:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
4. Faça as alterações e crie um commit:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
5. Envie sua branch para o repositório:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
6. Abra um pull request no GitHub.

## Autor

**Rodrigo Camargo**

- [LinkedIn](https://www.linkedin.com/in/rodrigocamargo-neoex/)
- [Portfólio](https://neoex-portfolio.vercel.app/#portfolio)

## Roadmap

- **Backend**: Planejado para futuras integrações com um servidor dedicado.
