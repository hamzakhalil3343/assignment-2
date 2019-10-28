import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfSubjectsPage } from './list-of-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfSubjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfSubjectsPage]
})
export class ListOfSubjectsPageModule {}
