# Welcome to your CDK TypeScript Project

Este projeto é um ponto de partida para o desenvolvimento com o AWS Cloud Development Kit (CDK) usando TypeScript.

## Prerequisites

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS CDK](https://aws.amazon.com/cdk/)

## AWS CLI Installation

1. Baixe o pacote do AWS CLI:
    ```bash
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    ```

2. Descompacte o pacote:
    ```bash
    unzip awscliv2.zip
    ```

3. Execute o instalador:
    ```bash
    sudo ./aws/install
    ```

4. Verifique a instalação:
    ```bash
    aws --version
    ```

5. Configure suas credenciais AWS:
    ```bash
    aws configure
    ```

## CDK Installation

1. Instale o AWS CDK globalmente:
    ```bash
    npm install -g aws-cdk
    ```

2. Verifique a instalação:
    ```bash
    cdk --version
    ```

## Project Initialization

Para iniciar um novo projeto CDK com TypeScript:

1. Inicialize um novo projeto CDK:
    ```bash
    cdk init app --language typescript
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## CDK Commands

Aqui estão alguns comandos úteis para trabalhar com o projeto CDK:

- `cdk bootstrap`: Pode ser executado uma única vez por conta e região, preparando o ambiente para o deploy.
- `cdk list`: Lista todas as stacks no projeto CDK.
- `cdk deploy --all`: Cria o deploy de todas as stacks definidas no projeto.
- `cdk diff`: Compara a stack implantada com seu estado local atual.
- `cdk destroy --all`: Destrói todas as stacks e recursos no projeto.

## Project Structure

Este projeto contém os seguintes arquivos e pastas:

- `bin/`: Contém o ponto de entrada da sua aplicação CDK.
- `lib/`: Contém a definição da stack.
- `cdk.json`: Arquivo de configuração para o CDK Toolkit.

## Useful npm Scripts

- `npm run build`: Compila TypeScript para JavaScript.
- `npm run watch`: Observa as mudanças e compila.
- `npm run test`: Executa testes unitários com Jest.
- `npx cdk deploy`: Implanta esta stack na sua conta/região AWS padrão.
- `npx cdk diff`: Compara a stack implantada com o estado atual.
- `npx cdk synth`: Emite o template CloudFormation sintetizado.

## Getting Started

1. Compile seu projeto:
    ```bash
    npm run build
    ```

2. Faça o deploy da stack:
    ```bash
    npx cdk deploy
    ```

3. Faça alterações na sua stack no diretório `lib/` e repita as etapas de compilação e deploy para atualizar seus recursos.

## Learn More

Para mais informações sobre o AWS CDK, visite o [Guia do Desenvolvedor AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/).

## License

Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
