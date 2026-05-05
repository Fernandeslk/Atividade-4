import { Tarefa } from "./Tarefa";

export class GestorTarefas {
  private tarefas: Tarefa[] = [];

  private statusValidos: string[] = ["Pendente", "Em Andamento", "Concluída"];

  public adicionarTarefa(tarefa: Tarefa): void {
    const existe = this.tarefas.find((t) => t.id === tarefa.id);
    if (existe) {
      console.error(`❌ Erro: Já existe uma tarefa com o ID ${tarefa.id}.`);
      return;
    }
    this.tarefas.push(tarefa);
    console.log(`✅ Tarefa "${tarefa.descricao}" adicionada ao projeto "${tarefa.projeto}"!`);
  }

  public atualizarStatus(id: number, status: string): void {
    if (!this.statusValidos.includes(status)) {
      console.error(`❌ Erro: Status "${status}" inválido. Use: ${this.statusValidos.join(", ")}.`);
      return;
    }
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (!tarefa) {
      console.error(`❌ Erro: Tarefa com ID ${id} não encontrada.`);
      return;
    }
    const statusAnterior: string = tarefa.status;
    tarefa.status = status;
    console.log(`✅ Tarefa ${id} atualizada: "${statusAnterior}" → "${status}"`);
  }

  public consultarTarefasPorProjeto(projeto: string): Tarefa[] {
    const resultado = this.tarefas.filter((t) => t.projeto === projeto);
    if (resultado.length === 0) {
      console.error(`❌ Erro: Nenhuma tarefa encontrada para o projeto "${projeto}".`);
    }
    return resultado;
  }

  public totalTarefas(): number {
    return this.tarefas.length;
  }
}