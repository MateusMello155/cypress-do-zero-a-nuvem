# Cypress, do Zero à Nuvem

Este repositório apresenta uma estrutura básica para automação de testes utilizando Cypress, pronta para execução tanto em ambiente desktop quanto mobile.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Git**: `2.49.0.windows.1`
- **Node.js**: `22.12.0`
- **npm**: `10.9.0`

> Essas foram as versões que eu utilizei.

## Instalação

Clone o repositório e instale as dependências de desenvolvimento:
> - npm install


## Execução dos Testes

O projeto está configurado para rodar testes tanto em ambiente **desktop** quanto **mobile**.

### Desktop

- **Modo headless** (sem interface gráfica):

>npm run test

- **Modo interativo** (Cypress App, viewport desktop):

>npm run cy:open

### Mobile

- **Modo headless** (simulando viewport mobile):

>npm run test:mobile

- **Modo interativo** (Cypress App, viewport mobile):

>npm run cy:open:mobile

## Observações

- Certifique-se de que todas as dependências foram instaladas corretamente antes de rodar os comandos de teste.
- Os scripts estão configurados no `package.json` para facilitar a execução nos diferentes ambientes.

---

Sinta-se à vontade para contribuir ou abrir issues em caso de dúvidas!
