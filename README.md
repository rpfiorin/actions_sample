<p align="center">
  <img src="./.github/logo.png" alt="poster">
</p>

# Desafio de QA - Testes front-end E2E

## Como preparar 📍
1. Primeiramente, clone este projeto com opção HTTPS ou SSH.
2. A automação foi desenvolvida em cima da versão 18 do node, logo, certifique-se de estar com esta versão em seu SO ou instale-a pelo diretório 'node' (caso utilize Windows). Para linux, consulte o respectivo procedimento de acordo com a distribuição utilizada.
3. Como gerenciador de pacotes, utilizei o yarn, então após a instalação do node 18, execute seu CMD como Admin e rode o comando: _corepack enable_ 
 (Isso o ativará em seu SO, caso solicite confirmação, aceite com a opção correspondente).

## Configurando o projeto 🏁
4. Com o diretório do projeto aberto no CMD, execute: _yarn install_ (para baixar a node_modules) 

 E depois: _yarn playwright install_ (para configurar as dependências do playwright).

## Execução ⚡
5. Confira a massa de teste que deseja ser utilizada (com os dados corretos do filme), no arquivo tests/fixtures/movie.json 

   Para executar de forma assistida: _yarn test:e2e:headed_
   Para executar em modo headless: _yarn test:e2e_

OBS: os testes irão executar no G. Chrome e M. Firefox. Em seguida, será exibido relatórios HTML no seu navegador padrão.

## Extra ➕
Como bônus, escalei os testes aqui presentes no Github Actions. Para reproduzi-los, faça o fork deste projeto para seu repositório Github.
Depois de clonado e configurado em sua máquina, execute os comandos Git para efetuar o push e disparar a pipeline. Na página do projeto em seu Github, acesse a aba 'Actions'. Um estágio denominado 'ts-tests' deverá estar sendo executado, aguarde sua conclusão.
Após concluir, logo abaixo, estará disponível no link 'playwright-report' os relatórios de execução.


Toda a codificação do projeto foi comentada para fácil compreensão e documentação (exceto arquivos gerados automaticamente). 

Enjoy ;)