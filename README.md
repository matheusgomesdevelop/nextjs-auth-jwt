| Tela de Login                                                                                                                             | Tela de Boas Vindas                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![Tela de Login](https://nextjs-auth-jwt-blue.vercel.app/images/readme/login-desk.png)                                                    | ![Tela de Boas Vindas](https://nextjs-auth-jwt-blue.vercel.app/images/readme/dash-desk.png)                                               |
| [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-4&mode=design) | [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-5&mode=design) |

# [NextJS: Auth + JWT](https://nextjs-auth-jwt-blue.vercel.app/) 🚀

> **Em andamento**: https://nextjs-auth-jwt-blue.vercel.app/

Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Frontend](#frontend)
  - [Bibliotecas](#bibliotecas)
  - [Infraestrutura](#infraestrutura)
  - [Deploy e Hospedagem](#deploy-e-hospedagem)
  - [Versionamento](#versionamento)
  - [Testes](#testes)
  - [Prototipação](#prototipacao)
  - [Documentação](#documentacao)
- [Instruções de Instalação](#instrucoes-de-instalacao)
- [Como Usar](#como-usar)
- [Contribuição](#contribuicao)
- [Licença](#licenca)

## Tecnologias Utilizadas

### Prototipacao

- Figma
- Untitled UI

### Metodologias

- BDD/TDD
- Atomic Design
- Arquitetura Hexagonal
- BEM
- REST API
- JWT

### Bibliotecas

- React.js
- Formik
- yup
- PrimeReact

### Frontend

- HTML5
- CSS3
- TypeScript
- Next.js 16

### Versionamento

- Git/Github

### Testes

- Jest e React Testing Library

### Deploy e Hospedagem

- Vercel
- Heroku

### Documentacao

- Jira
- Confluence

## Arquitetura do Projeto

O sistema está utilizando a arquitetura Hexagonal, e todas as funcionalidades da camada de Domínio e Aplicação, estão localizadas em suas respectivas pastas.

Abaixo está um resumo dos arquivos e pastas.

### Camada de Domínio

Os arquivos da camada de domínio estão localizadas na pasta: `src/core/*`.

| Nome             | Exemplo            | Descrição                                                                                               |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| `/adapters/auth` | `/authAdapter.ts`  | Função responsável pela conexão com a api e executar as lógicas necessárias de autenticação do usuário. |
| `/antities/auth` | `/authEntity.ts`   | Estrutura dos dados do usuário que estão modelados no banco e são retornados pela API.                  |
| `/infra/http`    | `/httpInfra.ts`    | Método responsável pelas chamadas HTTP da aplicação, tudo passa por ela.                                |
| `/ports/auth`    | `/authPort.ts`     | Interfaces que os Adapters implementam.                                                                 |
| `/useCases/auth` | `/authUseCase.tsx` | Função que a camada de aplicação executa.                                                               |

### Camada da Aplicacao

Os arquivos da camada da aplicação estão localizadas nas pastas: dentro de `/src/*` com exeção da pasta **core**.

#### Atomic Design

Os componentes do sistema estão utilizando a metodologia Atomic Design, e estão localizados na pasta `/src/componentes/*`.

| Nome        | Exemplo                 | Descrição              |
| ----------- | ----------------------- | ---------------------- |
| `atoms`     | `/a-button.tsx`         | Atomos do sistema.     |
| `molecules` | `/input-with-label.tsx` | Moleculas do sistema.  |
| `organisms` | `/o-form-login.tsx`     | Organismos do sistema. |
| `templates` | `/t-login.tsx`          | Templates do sistema.  |
| `pages`     | `/p-login.tsx`          | Paginas do sistema.    |

#### Services

A camada da aplicação possui alguns serviços que são executados rotineiramente por diversas partes do sistema, e estão localizados na pasta `/src/services/*`.

| Nome             | Exemplo               | Descrição                                               |
| ---------------- | --------------------- | ------------------------------------------------------- |
| `sessionService` | `/sessionService.tsx` | Decorator pattern (HOC) e helpers de sessão do usuário. |
| `tokenService`   | `/tokenService.tsx`   | Funções de gerenciamento do token do usuário logado.    |

### Testes

O sistema foi construido utilizando a metodologia **TDD**, todos os testes e os mocks, estão localizadas na raiz do projeto nas pastas `__tests__` e `__mocks__` e estão seguindo a mesma estrutura de arquivos e pastas referente aos arquivos que estão sendo testados.

| Nome          | Exemplo                                                   | Descrição                                                                     |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `__tests__`   | `/atoms/a-button/a-button.test.tsx`                       | Exemplo do teste relacionado ao atomo a-buttom.                               |
| `__mocks__`   | `/components/organism/o-login-form/o-login-form.test.tsx` | Mocks utilizados no teste de login do usuário.                                |
| `/src/utils/` | `/providers/app-router-ctx-provider.tsx`                  | Helper utilizado nos testes para adicionar o AppRouter do Next.js nos testes. |

**Obs.** Foquei em testar as partes mais importantes do siste, alguns ficaram pendentes para serem publicados nas proximas atualizações.

### Configuracoes

As configurações de `urls` e `mensagens` estão localizadas na pasta `/src/config/*`.

| Nome       | Exemplo               | Descrição                                                  |
| ---------- | --------------------- | ---------------------------------------------------------- |
| `url`      | `/url/index.tsx`      | URL do endpoint da API que está armazenado no .env.        |
| `messages` | `/messages/index.tsx` | Mensagens utilizadas pelo sistema para informar o usuário. |

### App

As paginas do sistema utilizam o **AppRouter** do Next.js, e basicamente instanciam as `pages` e informam as configurações dos `templates`.

Confira em `/app/*`.

## Instalação

1. Clone o repositório para sua máquina local usando o seguinte comando:

   > git clone https://github.com/matheusgomesdevelop/nextjs-auth-jwt.git

2. Navegue até o diretório do projeto:

   > cd nextjs-auth-jwt

3. Inicie um servidor local para visualizar o portfólio.

   > yarn dev ou yarn start

4. Abra o navegador e visualize o portfolio na porta 3000
   > http://localhost:3000

## Como Usar

Este portfólio é simples de usar. Basta acessar as rotas disponíveis que podem ser visualizadas dentro da pasta `app`.

## Contribuicao

Sinta-se a vontade para contribuir enviando um pull request.

## Licenca

MIT License.
