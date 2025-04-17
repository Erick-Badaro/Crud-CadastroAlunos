import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alunos } from '../core/services/types/types';
import { AlunosService } from '../core/services/alunos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
   aluno: Alunos = {
    id: '',
    matricula: '',
    nome: '',
    curso: '',
    disciplina: '',
    nota: 0,
    data: ''
  };

  constructor(
    private route: ActivatedRoute,
    private service: AlunosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.listar().subscribe(alunos => {
        const encontrado = alunos.find(a => a.id === id);
        if (encontrado) this.aluno = encontrado;
      });
    }
  }

  atualizar(): void {
    if (this.aluno.id) {
      this.service.atualizarAluno(this.aluno.id, this.aluno).subscribe(() => {
        alert('Aluno atualizado com sucesso!');
        this.router.navigate(['/home']);
      });
    }

}
}
