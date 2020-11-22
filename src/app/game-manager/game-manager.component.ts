import { environment } from './../../environments/environment.prod';
import { Level } from './../model/level';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';


const MAX_ITEMS_SIZE = 5;

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

  private eventEmitter = new Subject<GameManagerEvent>();

  public items: Item[] = [];
  ngOnInit(): void {
    for (let i = 0; i < MAX_ITEMS_SIZE; i++) {
      this.items.push(new Item('', '', ''));
    }
    this.sitkaLevel = new Level('sitka');
  }

  public addItem(item: Item): void {
    if (!this.isAlreadyTaken(item)) {
      const index = this.getFirstEmptyItemSlot();
      this.items[index] = item;
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
    return this.sitkaLevel;
  }
  public levelUpSitka(): void {
    this.sitkaLevel.lvl++;
  }

  public getEvent(): Observable<GameManagerEvent> {
    return this.eventEmitter.asObservable();
  }
  onItemClick(item: Item): void{
    this.fireEvent(GameManagerEventType.CLICK_ON_ITEM, item);
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
