import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alunos } from '../../core/services/types/types';
import { AlunosService } from '../../core/services/alunos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  usuario = {
    matricula: '',
    nome: '',
    curso: '',
    disciplina: '',
    nota: 0,
    data: ''
  };

  onSubmit() {
    this.service.incluir(this.usuario).subscribe(() => {
      alert('Cadastro realizado com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  titulo = 'Cadastro de Alunos';
  funcionario: Alunos = {} as Alunos;
  constructor(
    private service: AlunosService,
    private router: Router
  ) { }

}
