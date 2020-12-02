import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { GameManagerComponent } from './game-manager/game-manager.component';
import { SitkaChampignonsComponent } from './game/sitka-champignons/sitka-champignon/sitka-champignons.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { SitkaQuestComponent } from './game/sitka-champignons/sitka-quest/sitka-quest.component';
import { MapGameComponent } from './game/sitka-champignons/map/map-game/map-game.component';
import { DoctorQuestComponent } from './game/sitka-champignons/doctor-quest/doctor-quest/doctor-quest.component';
import { DoctorLaboratoryComponent } from './game/sitka-champignons/doctor-laboratory/doctor-laboratory/doctor-laboratory.component';
import { MaisonCocoComponent } from './game/sitka-champignons/maison-coco/maison-coco/maison-coco.component';
import { MaisonQuestComponent } from './game/sitka-champignons/maison-quest/maison-quest/maison-quest.component';
import { MaisonBedroomComponent } from './game/sitka-champignons/maison-bedroom/maison-bedroom.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent,
    GameManagerComponent,
    SitkaChampignonsComponent,
    InfoModalComponent,
    SitkaQuestComponent,
    MapGameComponent,
    DoctorQuestComponent,
    DoctorLaboratoryComponent,
    MaisonCocoComponent,
    MaisonQuestComponent,
    MaisonBedroomComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
