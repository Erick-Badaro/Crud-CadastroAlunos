import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastrar', component: CadastrarComponent }
  ];