import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercise-details/:index',
    loadChildren: () => import('./pages/exercise-details/exercise-details.module').then(m => m.ExerciseDetailsPageModule)
  },
  {
    path: 'workout-details/:index',
    loadChildren: () => import('./pages/workout-details/workout-details.module').then(m => m.WorkoutDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
