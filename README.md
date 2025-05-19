<div align="center">

<img src="./src/assets/qr-code_icon.png" width=130 height=130>

# 🔐 QR & Password Generator CLI <br>

</div>

Este projeto é uma aplicação de linha de comando (CLI) feita em Node.js que permite gerar:

- QR Codes em imagem ou diretamente no terminal
- Senhas personalizadas com base em variáveis de ambiente

## 🚀 Funcionalidades

- ✅ Geração de QR Code de um texto ou URL
  - 📦 Como imagem
  - 🖥️ Diretamente no terminal
- ✅ Geração de senhas
  - 🔐 Baseado em variáveis definidas no `.env`
- ✅ Interface via prompt
- 🎨 Terminal colorido usando `chalk`

## 🧱 Arquitetura

A arquitetura do projeto está documentada visualmente no arquivo abaixo:

`src/docs/arquitecture.tldr`

> Pode ser aberto diretamente no VS Code usando a extensão [tldraw](https://marketplace.visualstudio.com/items?itemName=tldraw.tldraw-vscode).

## 🛠️ Tecnologias e Dependências

- [prompt](https://www.npmjs.com/package/prompt): Entrada de dados no terminal
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal): Geração de QR Code no terminal
- [chalk](https://www.npmjs.com/package/chalk): Estilização colorida de texto no terminal
- [dotenv](https://www.npmjs.com/package/dotenv): Carregamento de variáveis de ambiente

## ⚙️ Como usar

### 1. Clone o repositório

`git clone https://github.com/julianakcm1/qrcode-project` <br>
`cd qrcode-project`

### 2. Instale as dependências

```
npm i prompt
npm i qrcode-terminal
npm i chalk
```

### 3. Configure o arquivo .env

Há um arquivo `.env` na raiz do projeto com as variáveis abaixo:

```
UPPERCASE_LETTERS
LOWERCASE_LETTERS
NUMBERS
SPECIAL_CHARACTERS
PASSWORD_LENGTH
```
> Faça a configuração do arquivo, informando as suas preferências para a geração da senha

### 4. Execute o projeto

`npm run start`

Siga as instruções no terminal para escolher entre gerar um QR Code ou uma senha.

## 📷 Exemplo de uso
```
? Choose the tool (1 - QR CODE) or (2 - PASSWORD):
> 2
? You chose password
> Generate password: IT5ER5M6I12W
```