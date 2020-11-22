import { environment } from './../../../../environments/environment.prod';
import { GameManagerComponent } from './../../../game-manager/game-manager.component';
import { Item } from './../../../model/item';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

interface Mushroom {
  id: string;
  title: string;
  content: string[];
}

@Component({
  selector: 'app-sitka-champignons',
  templateUrl: './sitka-champignons.component.html',
  styleUrls: ['./sitka-champignons.component.scss']
})
export class SitkaChampignonsComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private gameManager: GameManagerComponent) { }

  public url = environment.assetUrl;
  closeResult = '';
  amanite: Mushroom;
  entolome: Mushroom;
  cepe: Mushroom;
  tricholome: Mushroom;
  gyromitra: Mushroom;
  openMushroom: Mushroom = {
    id: '',
    title: '',
    content: []
  };

  ngOnInit(): void {
    this.amanite = {
      id: 'amanite',
      title: 'Une amanite tue mouche !',
      content: [
        'Si tu as de la chance tu n\'auras que des hallucinations,'
        + ' mais dans la majorité des cas les amanites tue-mouche sont mortelles.',

        'Tu ne voudrais pas que Sitka hallucine ou pire... Meure !'
      ]
    };

    this.tricholome = {
      id: 'tricolome',
      title: 'Des tricholomes dorés...?',
      content: [
        'Il est bien jolie ce champignon, peut être qu\'il est comestible.',
        ' Sitka se rapproche de toi et dit : "Il y a une légende sur ce champignon il me semble.'
        + ' Apparement au Moyen-âge ce champignon était comestible...'
        + ' Mais il se divise en plusieurs catégories dont certaines catégories sont très dangereuses.'
        + ' Je pense qu\'on ne devrait pas essayé celui-ci".'
      ]
    };

    this.cepe = {
      id: 'cepe',
      title: 'Des cèpes bronzés !!!',
      content: [
        'Ce champignon est tout tordu tient ! Mais on dirait un cèpe bronzé.',
        ' Je pense que c\'est ce qu\'il faut pour Sitka ! Tu as bien choisie! '
      ]
    };

    this.entolome = {
      id: 'entolome',
      title: 'Des entolomes...',
      content: [
        'Celui-ci ressemble un peu à un mycène, mais il ne faudrait pas s\'y méprendre,'
        + ' ce pourrait être un entolome, encore un champignon hautement toxique voire mortel !',
        ' Peut être que tu devrais regarder un autre champignon.'
      ]
    };

    this.gyromitra = {
      id: 'gyromitra',
      title: 'Waouh... Des gyromitres !',
      content: [
        'Celui-ci est bizzare, Sitka se rapproche de toi et il te dit :',
        '"Un de mes amis m\'en a parlé une fois, il m\'a dit de ne surtout pas le toucher car il est mortel.'
        + 'Il m\'a même dit que les hommes l\'utilisaient pour envoyer des fusées dans le ciel. Ils sont bizarres ceux-là."'
      ]
    };
  }

  public open(content: any, mush?: Mushroom): void {
    if (mush) {
      this.openMushroom = mush;
      this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title',
        backdrop: 'static',
        keyboard: false
      }).result.then((result) => { }, (reason) => { });
    }
  }


  public close(): void {
    this.openMushroom = {
      id: '',
      title: '',
      content: []
    };
    this.modalService.dismissAll('');
  }
  public getCepe(): void {
    const cepe: Item = {
      id: 'cepe',
      label: 'Cèpes',
      path: this.url + '/assets/cepe.png'
    };
    this.gameManager.addItem(cepe);
    this.close();
  }



}
