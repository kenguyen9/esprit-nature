import { environment } from './../../environments/environment.prod';
import { Level } from './../model/level';
import { Item } from './../model/item';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const MAX_ITEMS_SIZE = 5;

interface GameCookie {
  levels: Level[];
  items: Item[];
}

export enum GameManagerEventType {
  CLICK_ON_ITEM = 'CLICK_ON_ITEM' as any
}
export interface GameManagerEvent {
  eventType: GameManagerEventType;
  data?: any;
}
@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.scss']
})
export class GameManagerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  public url = environment.assetUrl;


  private eventEmitter = new Subject<GameManagerEvent>();

  public gameCookie: GameCookie = {
    levels: [],
    items: []
  };

  public items: Item[] = [];
  public popupItem: Item;
  @ViewChild('content') content: any;
  ngOnInit(): void {



    this.gameCookie.levels.push(new Level('sitka'));
    this.gameCookie.levels.push(new Level('doctor'));
    this.gameCookie.levels.push(new Level('serpent'));

    const json = localStorage.getItem('gameCookie');
    const local = JSON.parse(json);
    if (local?.levels?.length > 0) {
      this.gameCookie.levels = local.levels;
    }
    if (local?.items?.length > 0) {
      this.gameCookie.items = local.items;
    }else{
      for (let i = 0; i < MAX_ITEMS_SIZE; i++) {
        this.gameCookie.items[i] = new Item('', '', '');
      }
    }
    console.log(this.gameCookie);


    localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));


  }


  public reset(): void {
    for (let i = 0; i < MAX_ITEMS_SIZE; i++) {
      this.gameCookie.items[i] = new Item('', '', '');
    }
    while (this.gameCookie.items.length > MAX_ITEMS_SIZE) {
      this.gameCookie.items.pop();
    }

    this.gameCookie.levels.forEach(l => {
      l.lvl = 0;
    });
    localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));
  }

  public open(content): void {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    }).result.then((result) => {
    }, (reason) => {
    });
  }


  public addItem(item: Item): void {
    if (!this.isAlreadyTaken(item)) {
      const index = this.getFirstEmptyItemSlot();
      this.gameCookie.items[index] = item;
      this.popupItem = item;
      this.open(this.content);
      localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));
    }
  }

  private getFirstEmptyItemSlot(): number {
    return this.gameCookie.items.findIndex(s => s.id === '');
  }

  private isAlreadyTaken(item: Item): boolean {
    const res = this.gameCookie.items.findIndex(i => i.id === item.id);
    return res !== -1;
  }

  public getlevel(levelId: string): Level {
    return this.gameCookie.levels.find(l => l.id === levelId);
  }


  levelUpLevel(levelId: string, lvl: number) {
    const level = this.gameCookie.levels.find(l => l.id === levelId);
    level.lvl = lvl;
    localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));
  }

  public getEvent(): Observable<GameManagerEvent> {
    return this.eventEmitter.asObservable();
  }
  public onItemClick(item: Item): void {
    this.fireEvent(GameManagerEventType.CLICK_ON_ITEM, item);
  }

  public useItem(itemId: string): void {
    const index = this.gameCookie.items.findIndex(s => s.id === itemId);
    this.gameCookie.items[index] = new Item('', '', '');
    this.gameCookie.items = this.gameCookie.items.filter(i => i.id !== itemId);
    localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));
  }

  private fireEvent(eventType: GameManagerEventType, data?: any): void {
    const event: GameManagerEvent = {
      eventType
    };
    if (data) {
      event.data = data;
    }
    this.eventEmitter.next(event);
  }

}
