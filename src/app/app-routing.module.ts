import { DoctorQuestComponent } from './game/sitka-champignons/doctor-quest/doctor-quest/doctor-quest.component';
import { SitkaQuestComponent } from './game/sitka-champignons/sitka-quest/sitka-quest.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { SitkaChampignonsComponent } from './game/sitka-champignons/sitka-champignon/sitka-champignons.component';
import { MapGameComponent } from './game/sitka-champignons/map/map-game/map-game.component';
import { DoctorLaboratoryComponent } from './game/sitka-champignons/doctor-laboratory/doctor-laboratory/doctor-laboratory.component';
import { MaisonCocoComponent } from './game/sitka-champignons/maison-coco/maison-coco/maison-coco.component';
import { MaisonQuestComponent } from './game/sitka-champignons/maison-quest/maison-quest/maison-quest.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'prologue', component: IntroComponent },
  {
    path: 'game', component: GameManagerComponent,
    children: [
      { path: '', redirectTo: 'sitka-le-cerf', pathMatch: 'full' },
      { path: 'carte', component: MapGameComponent },
      { path: 'sitka-le-cerf', component: SitkaQuestComponent },
      { path: 'le-bon-champignon', component: SitkaChampignonsComponent },
      { path: 'le-docteur', component: DoctorQuestComponent},
      { path: 'le-laboratoire', component: DoctorLaboratoryComponent},
      { path: 'la-maison-de-coco', component: MaisonCocoComponent},
      { path: 'la-cabane-de-coco', component: MaisonQuestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
