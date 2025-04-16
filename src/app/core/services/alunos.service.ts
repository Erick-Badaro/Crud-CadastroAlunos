import { Injectable } from '@angular/core';
import { Alunos } from './types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
 private readonly API = 'http://localhost:3000/alunos';
  constructor(private http : HttpClient) {}
    listar(): Observable<Alunos[]>{
      return this.http.get<Alunos[]>(this.API);
    }

    incluir(aluno: Alunos): Observable<Alunos> { 
      return this.http.post<Alunos>(this.API, aluno); 
      }


}
