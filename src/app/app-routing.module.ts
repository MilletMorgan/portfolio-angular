import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CompetencesComponent } from './competences/competences.component';
import { EnvironnementComponent } from './environnement/environnement.component';
import { ProjetComponent } from './projet/projet.component';
import { FormationComponent } from './formation/formation.component';
import { VeilleComponent } from './veille/veille.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'dashboad', component: DashboardComponent },
  { path: 'detail/:id', component: CardDetailComponent },
  { path: 'card', component: CardComponent },

  { path: '1', component: CompetencesComponent },
  { path: '2', component: EnvironnementComponent },
  { path: '3', component: ProjetComponent },
  { path: '4', component: FormationComponent },
  { path: '5', component: VeilleComponent },
  { path: '6', component: ExperienceComponent },
  { path: '7', component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
