# LEILÃO LEGAL - Projeto final da disciplina ARQUITETURA E TECNOLOGIAS DE SISTEMAS WEB

Bem-vindo ao repositório do Leilão Legal, um projeto de leilão online desenvolvido com Next.js, TypeScript e Prisma. Este repositório contém o código-fonte do aplicativo, que permite aos usuários participarem de leilões virtuais, fazer lances e acompanhar os resultados.


# Passo a passo de uso:
Execute os comandos a seguir para poder usar o projeto

Passo 1:  Execute o comando a seguir na pasta do projeto
npm install

Passo 2: Configuração do Banco de Dados
  Para que o projeto funcione corretamente, é necessário configurar um arquivo .env na raiz do projeto com as informações do banco de dados. Siga as instruções abaixo para configurar o arquivo .env:
    Crie um arquivo chamado .env na raiz do seu projeto.
    Abra o arquivo .env em um editor de texto e adicione a seguinte linha, substituindo as informações pelo seu próprio URL do banco de dados:

  DATABASE_URL="postgresql://seu_usuario:senha@seu_host:5432/seu_banco_de_dados"

  Coloque tambem no arquivo as credenciais do google para que você possa usar a opção de login com o google 

  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=

Passo 3: Execute o comando prisma Para mapear seu modelo de dados para o esquema do banco de dados

npm i --save-dev prisma@latest

Passo 4: Execute o servidor de desenvolvimento

npm run dev


## Itens Desenvolvidos

Login ☑

Cadastro de Usuários ☑

Cadastro de Produtos ☑

Tela para Adicionar Lances à Conta ☑

Bônus Inicial: 10 Lances para Novos Usuários ☑


## Itens Pendentes
Implementação completa do componente de “PRODUTO/LANCE”  ❌

Realização de lances de R$ 0,01 em leilões ativos ❌

Emissões e recebimentos de mensagens usando Socket.io ❌

Atualização do valor do produto para todos os usuários na tela principal ❌

O produto deve ter uma data e horário prévio definido quando cadastrado, que quando chegar nesta data o leilão desse produto começa automaticamente. Fica habilitado para receber lances ❌




