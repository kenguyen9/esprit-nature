import { Level } from './../model/level';
import { Item } from './../model/item';
import { Component, OnInit } from '@angular/core';


const MAX_ITEMS_SIZE = 5;
@Component({
  selector: 'app-game-manager',
  templateUrl: './game-manager.component.html',
  styleUrls: ['./game-manager.component.scss']
})
export class GameManagerComponent implements OnInit {

  constructor() { }

  private sitkaLevel: Level;

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

  public getSitkaLevel(): Item{
    return this.sitkaLevel;
  }
  public levelUpSitka(): void{
    this.sitkaLevel.lvl++;
  }

}
