import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CompetencesComponent } from './competences/competences.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: 'dashboad', component: DashboardComponent },
  { path: 'detail/:id', component: CardDetailComponent },
  { path: 'card', component: CardComponent },

  { path: '1', component: CompetencesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
