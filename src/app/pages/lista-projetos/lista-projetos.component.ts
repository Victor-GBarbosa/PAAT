import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ProjectModel from '../../models/project.model';
import { projectMock } from '../../mocks/projectMock';

@Component({
  selector: 'app-lista-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css'],
})
export class ListaProjetosComponent {
  projetos: ProjectModel[] = [];

  constructor() {
    // Simulando uma lista com múltiplos projetos baseados no mock
    this.projetos = [
      {
        ...projectMock,
        id: 1,
        description: 'Projeto de Modernização do Sistema de Gestão',
      },
      {
        ...projectMock,
        id: 2,
        description: 'Implementação de API REST para Integração',
        aplicador: 'João Silva',
      },
      {
        ...projectMock,
        id: 3,
        description: 'Migração para Arquitetura em Nuvem',
        suggester: 'Maria Santos',
      },
      {
        ...projectMock,
        id: 4,
        description: 'Desenvolvimento de Dashboard Analítico',
        digester: 'Pedro Costa',
      },
      {
        ...projectMock,
        id: 5,
        description: 'Otimização de Performance do Sistema',
        quantidadeDePPAs: 8,
      },
    ];
  }

  onVisualizar(projeto: ProjectModel) {
    console.log('Visualizar projeto:', projeto);
    // Implementar navegação para visualização
  }

  onEditar(projeto: ProjectModel) {
    console.log('Editar projeto:', projeto);
    // Implementar navegação para edição
  }

  onExcluir(projeto: ProjectModel) {
    console.log('Excluir projeto:', projeto);
    // Implementar confirmação e exclusão
  }
}
