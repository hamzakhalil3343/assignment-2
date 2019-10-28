import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {

    path: 'list-of-subjects',

    children: [

      {

        path: '',

        loadChildren:

          './list-of-subjects/list-of-subjects.module#ListOfSubjectsPageModule'

      },

      {

        path: ':singlesubject/:id',

        loadChildren: './singlesubject/singlesubject.module#SinglesubjectPageModule'

      }

    ]

  },
  
  { path: 'subject-add', loadChildren: './subject-add/subject-add.module#SubjectAddPageModule' },
  { path: 'newsubject', loadChildren: './newsubject/newsubject.module#NewsubjectPageModule' }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
