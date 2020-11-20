import { GameManagerComponent } from './game-manager/game-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'prologue', component: IntroComponent },
  {
    path: 'game', component: GameManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
