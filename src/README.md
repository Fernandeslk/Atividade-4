# Sistema de Gestão de Tarefas

Aplicação em **TypeScript** que simula o gerenciamento de tarefas de uma equipe
de desenvolvimento, permitindo adicionar, atualizar status e consultar tarefas por projeto.

---

## Estrutura do Projeto

    src/
    ├── Tarefa.ts
    ├── GestorTarefas.ts
    └── index.ts
    README.md

---

## Como Executar

### Pré-requisitos
- Node.js (v18+)
- TypeScript: `npm install -g typescript ts-node`

### Passos

```bash
npx ts-node src/index.ts
```

Ou compilando antes:

```bash
tsc
node dist/index.js
```

---

## Testes Realizados

| Cenário | Resultado esperado |
|---|---|
| Adicionar 4 tarefas | ✅ Sucesso |
| Adicionar tarefa com ID duplicado | ❌ Erro tratado |
| Atualizar status para valor válido | ✅ Sucesso com log de antes/depois |
| Atualizar status com ID inexistente | ❌ Erro tratado |
| Atualizar com status inválido | ❌ Erro tratado |
| Consultar tarefas de projeto existente | ✅ Lista todas as tarefas do projeto |
| Consultar projeto sem tarefas | ❌ Erro tratado |