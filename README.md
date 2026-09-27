# Paradigmas de Programação II — API de clientes

Projeto acadêmico da disciplina de Paradigmas de Programação II (4º semestre de Ciência da Computação/Sistemas de Informação, Uni-FACEF, 2026/2). O backend usa TypeScript, Express, Prisma e PostgreSQL para praticar rotas HTTP e persistência de clientes.

## O que há no repositório

- Rotas de clientes para listar, consultar por ID, cadastrar, atualizar e excluir.
- Separação do código em controller, service e repository.
- Modelo `Customer` com nome, documento, data de nascimento opcional, endereço, telefone e e-mail. Documento e e-mail têm restrição de unicidade no esquema do banco.
- Migrações Prisma e exemplo da variável `DATABASE_URL`.
- Rotas demonstrativas de usuários com respostas fixas, sem persistência.

| Método | Rota | Operação |
| --- | --- | --- |
| GET | `/customers` | Listar clientes por nome |
| GET | `/customers/:id` | Consultar cliente |
| POST | `/customers` | Cadastrar cliente |
| PUT | `/customers/:id` | Atualizar cliente |
| DELETE | `/customers/:id` | Excluir cliente |

## Estrutura

O código principal está em `back-end/src/`: `routes/` define os caminhos, `controllers/` processa requisições, `services/` organiza operações e `repositories/` acessa o banco com Prisma. O esquema e as migrações ficam em `back-end/prisma/`.

## Execução local

Requer Node.js, npm e PostgreSQL acessível. Dentro de `back-end/`, instale as dependências com `npm install`, configure `DATABASE_URL` a partir de `.env.example`, execute `npx prisma migrate deploy` e inicie com `npm run dev`. A porta padrão no servidor é `8888` (ou o valor de `PORT`).

> **Estado atual:** projeto acadêmico em desenvolvimento. O código possui classes de erro, mas `app.ts` ainda não registra um middleware de tratamento de erros; não há garantia de respostas HTTP personalizadas para todos os casos de falha. O repositório também não apresenta uma suíte de testes automatizados. As rotas `/users` são exemplos com respostas fixas.
