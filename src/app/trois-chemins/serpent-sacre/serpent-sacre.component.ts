import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { GameManagerComponent, GameManagerEventType } from 'src/app/game-manager/game-manager.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-serpent-sacre',
  templateUrl: './serpent-sacre.component.html',
  styleUrls: ['./serpent-sacre.component.css']
})
export class SerpentSacreComponent implements OnInit, OnDestroy {

  constructor(private gameManager: GameManagerComponent) { }

  private destroySubject = new Subject<void>();
  public repaired = false;
  public woodProvided = false;
  public timeRepair = 0;

  public serpentLevel;

  public timeToRepair = 200;

  public bgurlRepaired = 'background-image: url("' + environment.assetUrl + '/assets/serpent_sacre_repaired_background.jpg")';
  public bgurlBroke = 'background-image: url("' + environment.assetUrl + '/assets/serpent_sacre_background.jpg")';

  ngOnInit(): void {

    this.serpentLevel = this.gameManager.getlevel('serpent');

    if(this.serpentLevel.lvl === 2) {
      this.timeRepair = this.timeToRepair;
    }
    this.gameManager.getEvent().pipe(takeUntil(this.destroySubject)).subscribe(
      (event) => {
        if (event.eventType === GameManagerEventType.CLICK_ON_ITEM) {
          const item = event.data;
          if (item.id === 'wood_planks' && this.serpentLevel.lvl === 0) {
            this.woodProvided = true;
            this.gameManager.levelUpLevel('serpent', 1);
          }
        }
      }
    );

  }

  ngOnDestroy(): void {
    this.destroySubject.next();
    this.destroySubject.unsubscribe();
  }

  public repairBridge(): void {
    this.timeRepair += 10;
    let interval = setInterval(i => {
      this.timeRepair += 10;
      if (this.timeRepair === this.timeToRepair + 10) {
        clearInterval(interval);
        this.repaired = true;
        this.gameManager.levelUpLevel('serpent', 2);
      }
    }, 1000);
  }

}
