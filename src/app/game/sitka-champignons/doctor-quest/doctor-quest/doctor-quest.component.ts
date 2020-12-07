import { Level } from './../../../../model/level';
import { GameManagerComponent, GameManagerEventType } from 'src/app/game-manager/game-manager.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/model/item';
import { environment } from 'src/environments/environment';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-doctor-quest',
  templateUrl: './doctor-quest.component.html',
  styleUrls: ['./doctor-quest.component.scss']
})
export class DoctorQuestComponent implements OnInit, OnDestroy {


  constructor(
    private modalService: NgbModal,
    private gameManager: GameManagerComponent) { }


  public dialogLevel = 0;
  public dialogs: string[] = [];
  public questions: string[] = [];
  public doctorLevel: Level;
  private destroySubject = new Subject<void>();
  public url = environment.assetUrl;
  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/docteur-background.png")';
  public dialogurl = 'background-image: url("' + environment.assetUrl + '/assets/doctor_recipe.jpg")';
  ngOnInit(): void {
    this.doctorLevel = this.gameManager.getlevel('doctor');
    this.gameManager.getEvent()
      .pipe(takeUntil(this.destroySubject))
      .subscribe(
        (event) => {
          if (event.eventType === GameManagerEventType.CLICK_ON_ITEM) {
            const item: Item = event.data;
            if (item.id === 'potion_good' && this.doctorLevel.lvl === 1) {
              this.congrat();
            }
            if (item.id === 'potion_fail' && this.doctorLevel.lvl === 1) {
              this.fail();
            }
          }
        }
      );
    this.questions.push('Bonjour Docteur!');

    if (this.doctorLevel.lvl === 2) {
      this.dialogs = [];
      this.dialogs.push('*... = MC², et Fg = (m*G)/d²...*');
      this.dialogs.push('*... Est-ce que j\'ai pensé à fermer le robinet...*');
      this.dialogs.push('*... La poussée d\'Archimède...*');
    }
  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.unsubscribe();
  }

  public open(content): void {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    }).result.then((result) => {
    }, (reason) => {
    });
  }

  public helloDoctor(): void {
    this.dialogs = [];
    this.dialogs.push('*Si le grapcorne ne suffit pas à contrecarrer l\'hypertension généré par l\'aconite et que le ...*');
    this.dialogs.push('*... A cause de l\'humidité de l\'air avec les lois de Dalton...*');
    this.dialogs.push('*... Lentilles carottes ...? Non je préfère les tomates ça c\'est sûr ...*');
    this.dialogs.push('*... à 384 000 km et s\' éloigne chaque année de 3.82cm ...*');
    this.dialogs.push('*... G = 9.81 multiplié par m et divisé par d² ...*')
    this.questions.push('BONJOUR !!!');
    this.dialogLevel = 1;
  }

  public rehelloDoctor() {
    this.dialogs = [];
    this.dialogs.push('Oh bonjour !');
    this.dialogs.push('Vous me déranger pour une bonne nouvelle j\'espère........');
    this.questions.push('Coco a disparu... J\'ai besoin de votre aide.');
    this.dialogLevel = 2;
  }

  public askForHelp() {
    this.dialogs = [];
    this.dialogs.push('*... Est-ce que j\'ai testé avec du Sallus-Vert...??? Ca pourrait marcher...*');
    this.dialogs.push('');
    this.dialogs.push('Pardon je ne vous ai pas écouté, répétez s\'il-vous-plaît ?');
    this.questions.push('... COCO A DISPARU !!!');
    this.dialogLevel = 3;
  }
  public whatToDo() {
    this.dialogs = [];
    this.dialogs.push('Hmm c\'est embêtant...');
    this.dialogs.push('*...# & x+b/yZ, +5 * 4[2], tq y | y\'\' + y\' + y(c) = 0...*');
    this.dialogs.push('...');
    this.dialogs.push('Eureka ! 💡 Je sais !');
    this.dialogs.push('Je connais un lutin qui ne se sent pas très bien, si vous m\'assistez pour préparer un antidote, je vous donnerai un objet incroyable !');
    this.dialogs.push('In-cro-yable je vous dit ! Peut-être même assez incroyable pour retrouver Coco... Hmmm, sans aucun doute.');
    this.dialogs.push('Alors, marché conclu ?');
    this.questions.push('Bon... C\'est d\'accord !');
    this.dialogLevel = 4;
  }
  public launchQuest() {
    this.dialogs = [];
    this.dialogs.push('Je savais que vous diriez ça.');
    this.dialogs.push('Parfait. Prenez cette recette.');
    this.dialogs.push('Mémorisez la. Allez à mon laboratoire.');
    this.dialogs.push('Préparez la. Ramenez la moi.');
    this.dialogs.push('En attendant, au revoir !');
    this.questions.push('D\'accord. J\'y vais !');
    this.dialogLevel = 5;
    this.gameManager.levelUpLevel('doctor', 1);
  }
  public soWhat() {
    this.dialogs = [];
    this.dialogs.push('Alors avez-vous réussi cet antidote ?');
    this.questions.push('Je n\'ai pas bien compris...');
    this.dialogLevel = 6;
  }
  public explain() {
    this.dialogs = [];
    this.dialogs.push('Très bien.');
    this.dialogs.push('Regarde bien la recette que je t\'ai donné et essayes de la mémoriser.');
    this.dialogs.push('Si tu n\'y arrives pas, tu peux même la noter sur un papier.');
    this.dialogs.push('Ensuite, rends-toi dans ma laboratoire et suis la recette.');
    this.dialogs.push('Puis ramène moi l\'antidote ! A toi de jouer !');
    this.dialogLevel = 7;
  }
  public congrat() {
    this.dialogs = [];
    this.dialogs.push('Super ! C\'est exactement l\'antidote qu\'il me faut !');
    this.dialogs.push('Avec ça, je vais pouvoir guérir mon patient !');
    this.dialogs.push('Comme promis je vais vous donner un objet extraordinaire...');
    this.dialogs.push('*Fouille dans son placard...*');
    this.gameManager.useItem('potion_good');
    this.dialogLevel = 8;
  }
  public getObject() {
    this.dialogs = [];
    this.dialogs.push('Alors ??? Incroyable n\'est-ce-pas ?');
    this.dialogs.push('Ah et au fait, vous cherchiez bien Coco l\'écureuil ?');
    this.dialogs.push('Je l\'ai vu partir dans cette direction il y a un moment.');
    this.dialogs.push('Allez maintenant, au revoir !');
    this.dialogLevel = 9;
    const wood: Item = {
      id: 'wood_planks',
      label: 'Planches de bois',
      path: this.url + '/assets/wood_planks.png'
    };
    this.gameManager.addItem(wood);
    this.gameManager.levelUpLevel('doctor', 2);
  }



  public fail() {
    this.dialogs = [];
    this.dialogs.push('Cette potion ne va pas du tout...');
    this.dialogs.push('Il vous faut recommencer.');
    this.dialogLevel = 6;
    this.gameManager.useItem('potion_fail');
  }
}
