import { GameManagerComponent } from './../../../game-manager/game-manager.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitka-quest',
  templateUrl: './sitka-quest.component.html',
  styleUrls: ['./sitka-quest.component.css']
})
export class SitkaQuestComponent implements OnInit {

  constructor(private gameManager: GameManagerComponent) { }

  sitka = 'Bonjour jeune humain, je m\'appelle Sitka, Sitka le cerf';
  dialog: string[] = [];
  questions: string[] = [
    'Bonjour, qui-êtes-vous ?',
    'Auriez-vous vu un écureuil nommé Coco ?',
    'C\'est d\'accord !',
    'C\'est comme si c\'était fait !',
    'Partir chercher des champignons'
  ];
  dialogLevel = 0;
  private sitkaLevel;
  public isCollapsed = true;
  ngOnInit(): void {
    this.sitkaLevel = this.gameManager.getSitkaLevel();

  }

  sitkaDialog(): void {
    this.dialog = [];
    this.dialog.push('Bonjour jeune humain, je m\'appelle Sitka, Sitka le cerf.');
    this.dialog.push('J\'habite dans la forêt depuis très longtemps, je la connais comme ma poche !');
    this.dialog.push('Avez-vous quelque chose à me demander ?');
    this.dialogLevel = 1;
    this.isCollapsed = false;
  }
  askForCoco(): void {
    this.dialog = [];
    this.dialog.push('Oui je l\'ai peut-être vu...');
    this.dialog.push('Si vous me rendez un petit service je vous dirai tout ce que je sais !');
    this.dialogLevel = 2;
  }
  goForCourse(): void {
    this.dialog = [];
    this.dialog.push('Bien.');
    this.dialog.push('Cela fait trop longtemps que je ne mange que des fougères et des ronces...'
      + ' Quand j\'étais petit, mon père m\'avait fait goûter des champignons, c\'était délicieux !');
    this.dialog.push('Mais il m\'a aussi dit qu\'il y avait beaucoup de champignons toxiques... '
      + 'Si seulement je pouvais les reconnaîtres...');
    this.dialog.push('Peux-tu m\'en ramener s\'il-te-plaît ? J\'adorerais en goûter une nouvelle fois !');
    this.dialogLevel = 3;
  }

  startQuest(): void {
    this.gameManager.levelUpSitka();
    this.dialog = [];
    this.dialog.push('Merci beaucoup !!!');
    this.dialogLevel = 4;
  }



}
