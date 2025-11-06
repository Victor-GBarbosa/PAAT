import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  searchQuery: string = '';

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Buscando:', this.searchQuery);
      // Implementar lógica de busca aqui
    }
  }

  goToMyRepositories() {
    console.log('Navegando para Meus Repositórios');
    // Implementar navegação
  }

  findArtifacts() {
    console.log('Procurando artefatos');
    // Implementar navegação
  }
}
