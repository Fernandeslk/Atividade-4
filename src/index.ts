import { Tarefa } from "./Tarefa";
import { GestorTarefas } from "./GestorTarefas";

const gestor = new GestorTarefas();

function adicionarTarefas(): void {
  console.log("\n══════════════════════════════════");
  console.log("         ADICIONAR TAREFAS        ");
  console.log("══════════════════════════════════");

  gestor.adicionarTarefa(new Tarefa(1, "Criar tela de login",         "Pendente",     "Site Institucional"));
  gestor.adicionarTarefa(new Tarefa(2, "Configurar banco de dados",   "Em Andamento", "Site Institucional"));
  gestor.adicionarTarefa(new Tarefa(3, "Desenvolver API de usuários", "Pendente",     "App Mobile"));
  gestor.adicionarTarefa(new Tarefa(4, "Escrever testes unitários",   "Pendente",     "App Mobile"));
  gestor.adicionarTarefa(new Tarefa(2, "Duplicada",                   "Pendente",     "Teste"));
}

function atualizarStatuses(): void {
  console.log("\n══════════════════════════════════");
  console.log("        ATUALIZAR STATUSES        ");
  console.log("══════════════════════════════════");

  gestor.atualizarStatus(1, "Em Andamento");
  gestor.atualizarStatus(3, "Concluída");
  gestor.atualizarStatus(999, "Pendente");
  gestor.atualizarStatus(2, "Cancelada");
}

function consultarPorProjeto(): void {
  console.log("\n══════════════════════════════════");
  console.log("       CONSULTAR POR PROJETO      ");
  console.log("══════════════════════════════════");

  const projetos: string[] = ["Site Institucional", "App Mobile", "Inexistente"];

  for (const projeto of projetos) {
    console.log(`\n📁 Projeto: ${projeto}`);
    const tarefas: Tarefa[] = gestor.consultarTarefasPorProjeto(projeto);
    tarefas.forEach((t) => {
      console.log("─────────────────────────────────");
      console.log(t.exibirInformacoes());
    });
  }
}

adicionarTarefas();
atualizarStatuses();
consultarPorProjeto();

console.log(`\n📋 Total de tarefas cadastradas: ${gestor.totalTarefas()}`);