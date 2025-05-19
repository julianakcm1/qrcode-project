<div align="center">

<img src="https://github.com/user-attachments/assets/8c35cd3f-843a-448e-b07d-e5afeeb0a3d1" width=130 height=130>

# 🔐 QR & Password Generator CLI <br>

🇧🇷 [Versão em Português](#versao-em-português) | 🇺🇸 [English Version](#english-version)

</div>

## 🇧🇷 Versão em Português <a id="versao-em-portugues"></a>

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

### 📷 Exemplo de uso
```
? Choose the tool (1 - QR CODE) or (2 - PASSWORD):
> 2
? You chose password
> Generate password: IT5ER5M6I12W
```
---
## 🇺🇸 English version <a id="english-version"></a>

<div align="center"> 

<img src="https://github.com/user-attachments/assets/8c35cd3f-843a-448e-b07d-e5afeeb0a3d1" width=130 height=130>

# 🔐 QR & Password Generator CLI <br>

</div>
This project is a command-line interface (CLI) application built with Node.js that allows you to generate:

- QR Codes as images or directly in the terminal
- Custom secure passwords based on environment variables

## 🚀 Features
- ✅ QR Code generation from text or URL
  - 📦 As image
  - 🖥️ Directly in the terminal
- ✅ Password generation
  - 🔐 Based on .env variables
- ✅ Interactive prompt interface
- 🎨 Styled terminal output using chalk

## 🧱 Architecture
The project architecture is visually documented in:

```src/docs/arquitecture.tldr```

> You can open it directly in VS Code using the tldraw extension.

## 🛠️ Technologies and Dependencies

- [prompt](https://www.npmjs.com/package/prompt): Terminal input
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal): QR Code generation in the terminal
- [chalk](https://www.npmjs.com/package/chalk): Colored text output for CLI
- [dotenv](https://www.npmjs.com/package/dotenv): Load environment variables

## ⚙️ How to Use

### 1. Clone the repository

`git clone https://github.com/julianakcm1/qrcode-project`<br>
`cd qrcode-project`

### 2. Install dependencies

```
npm i prompt
npm i qrcode-terminal
npm i chalk
```

### 3. Configure the .env file

There is a .env file in the root of the project with the following variables:

```
UPPERCASE_LETTERS
LOWERCASE_LETTERS
NUMBERS
SPECIAL_CHARACTERS
PASSWORD_LENGTH
```

> Configure the file with your preferences for password generation.

### 4. Run the project

`npm run start`

### 📷 Example usage

```
? Choose the tool (1 - QR CODE) or (2 - PASSWORD):
> 2
? You chose password
> Generate password: IT5ER5M6I12W
```