import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../core/services/types/types';
import { AlunosService } from '../../core/services/alunos.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  listaAlunos: Alunos[] = []; 

  constructor(private service: AlunosService) {} 
  ngOnInit(): void { 
    this.service.listar().subscribe((alunos) => { 
      this.listaAlunos = alunos; 
    }); 
  } 

  excluirAluno(id: string | undefined): void {
    if (!id) {
      alert('ID do aluno não encontrado.');
      return;
    }
  
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
      this.service.deleteAluno(id).subscribe(() => {
        this.listaAlunos = this.listaAlunos.filter(a => a.id !== id);
      });
    }
  }
  
  


}
