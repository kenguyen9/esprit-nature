import { environment } from './../../environments/environment.prod';
import { Level } from './../model/level';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


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

  constructor() { }

  public url = environment.assetUrl;

  private sitkaLevel: Level;
  private doctorLevel: Level;

  private eventEmitter = new Subject<GameManagerEvent>();

  private gameCookie: GameCookie = {
    levels: [],
    items: []
  };

  public items: Item[] = [];
  ngOnInit(): void {

    this.sitkaLevel = new Level('sitka');
    this.doctorLevel = new Level('doctor');


    this.gameCookie.levels.push(this.sitkaLevel);
    this.gameCookie.levels.push(this.doctorLevel);

    const local = JSON.parse(localStorage.getItem('gameCookie'));
    if (local.levels.length > 0) {
      this.gameCookie.levels = local.levels;
    }
    if (local.items.length > 0) {
      this.gameCookie.items = local.items;
    }
    console.log(this.gameCookie);

    for (let i = 0; i < MAX_ITEMS_SIZE; i++) {
      const item = this.gameCookie.items[i];
      if (item) {
        this.items.push(item);
      } else {
        this.items.push(new Item('', '', ''));
      }
    }


  }

  public reset(): void {
    this.gameCookie.items = [];
    this.items.forEach(i => {
      i.id = i.label = i.path = '';
    });
    this.gameCookie.levels.forEach(l => l.lvl = 0);
    localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));
  }

  public addItem(item: Item): void {
    if (!this.isAlreadyTaken(item)) {
      const index = this.getFirstEmptyItemSlot();
      this.items[index] = item;
      this.gameCookie.items.push(item);
      localStorage.setItem('gameCookie', JSON.stringify(this.gameCookie));
    }
  }

  private getFirstEmptyItemSlot(): number {
    return this.items.findIndex(s => s.id === '');
  }

  private isAlreadyTaken(item: Item): boolean {
    const res = this.items.findIndex(i => i.id === item.id);
    return res !== -1;
  }

  public getSitkaLevel(): Level {
    return this.gameCookie.levels.find(l => l.id === 'sitka');
  }
  public getDoctorLevel(): Level {
    return this.gameCookie.levels.find(l => l.id === 'doctor');
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
    const index = this.items.findIndex(s => s.id === itemId);
    this.items[index] = new Item('', '', '');
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
