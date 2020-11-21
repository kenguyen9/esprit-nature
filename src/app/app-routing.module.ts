import { SitkaQuestComponent } from './game/sitka-champignons/sitka-quest/sitka-quest.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { SitkaChampignonsComponent } from './game/sitka-champignons/sitka-champignon/sitka-champignons.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'prologue', component: IntroComponent },
  {
    path: 'game', component: GameManagerComponent,
    children: [
      { path: '', component: SitkaQuestComponent },
      { path: 'sitka-le-cerf', component: SitkaQuestComponent },
      { path: 'le-bon-champignon', component: SitkaChampignonsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
