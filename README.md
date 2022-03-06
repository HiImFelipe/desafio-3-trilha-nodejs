# Desafio #03 (Ignite) - Trilha NodeJS

Desafio proposto pela plataforma [Rocketseat](https://rocketseat.com.br/), parte do projeto [Ignite](https://rocketseat.com.br/ignite) <br/>
*OBS*: *Este desafio é **obrigatório** durante a trilha*.

## Sobre

Desafio que tem em mente treinar as habilidades do candidato em utilizar raw queries, query builders e ORMs

- O projeto utiliza Typescript;
- Os testes rodam com base em Jest;

## Como rodar

1. Clone o repositório
```
git clone https://github.com/FelipeSSDev/desafio-3-trilha-nodejs.git
```

2. Baixe as dependências
```
yarn install
# ou npm install
```

3. Rode o container PostgreSQL

O projeto contém um arquivo docker-compose, que cria um banco de dados PostgreSQL em sua máquina, e que deve ser rodado à partir do comando:
```
docker-compose up -d
```
**O processo pode ser ignorado caso você já tenha PostgreSQL rodando em sua máquina de forma local, mas altere os valores no arquivo ormconfig.json**

4. Rode os testes

Este desafio não tem em mente ser rodado através de um script de start ou development. <br />
Ele deve ser rodado à partir do comando:
```
yarn test
# ou npm run test
```
