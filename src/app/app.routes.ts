import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { AguaPotableComponent } from './components/main/portfolio/agua-potable/agua-potable.component';
import { ItchioComponent } from './components/main/portfolio/itchio/itchio.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, pathMatch: 'full', title: 'Home | Mateo García Portfolio'},
    {path: 'portfolio', redirectTo: 'home', pathMatch: 'full'},
    {path: 'portfolio/agua-potable', component: AguaPotableComponent, title: 'Agua Potable Web | Mateo García Portfolio'},
    {path: 'portfolio/itchio', component: ItchioComponent, title: 'Itch.io | Mateo García Portfolio'},
    { path: '**', redirectTo: '' }
]
