import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../core/services/types/types';
import { AlunosService } from '../../core/services/alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
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


}
