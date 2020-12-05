import { Component, OnInit } from '@angular/core';
import { GameManagerComponent } from 'src/app/game-manager/game-manager.component';
import { Item } from 'src/app/model/item';
import { environment } from 'src/environments/environment';
import { Ingredient, Potion, PotionDictionnary } from './potion-dictionnary/potionDictionnary';




@Component({
  selector: 'app-doctor-laboratory',
  templateUrl: './doctor-laboratory.component.html',
  styleUrls: ['./doctor-laboratory.component.scss']
})
export class DoctorLaboratoryComponent implements OnInit {

  constructor(
    private gameManager: GameManagerComponent
  ) { }

  public potionDictionnary = new PotionDictionnary();

  public url = environment.assetUrl;

  public isMixed = false;
  public isGood = false;

  public currentPotion: Potion = {
    id: '',
    label: '',
    ingredients: []
  };

  private goodPotion: Potion = {
    id: 'good',
    label: 'Bonne',
    ingredients: [
      this.potionDictionnary.AQUA_MINERALUS,
      this.potionDictionnary.SALLUS_VERT,
      this.potionDictionnary.LIPOUS_ROUGE,
      this.potionDictionnary.ARMOTENTIA,
      this.potionDictionnary.GRAPCORNE
    ]
  };

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient): void {
    this.currentPotion.ingredients.push(ingredient);
  }

  restartPotion() {
    this.currentPotion.ingredients = [];
    this.isMixed = this.isGood = false;
  }
  mixPotion(): void {
    console.log(this.isGoodPotion());
    this.isMixed = true;
    this.isGood = this.isGoodPotion();
  }
  isGoodPotion(): boolean {
    this.isMixed = true;
    const res = true;
    if (this.currentPotion.ingredients.length === this.goodPotion.ingredients.length) {
      for (let i = 0; i < this.goodPotion.ingredients.length - 1; i++) {
        if (this.currentPotion.ingredients[i].id !== this.goodPotion.ingredients[i].id) {
          return false;
        }
      }
    } else {
      return false;
    }
    return res;
  }


  getPotion(): void {
    if (this.isMixed) {
      if (!this.isGood) {
        const item: Item = {
          id: 'potion_fail',
          label: 'Antidote... ?',
          path: this.url + '/assets/potion_fail.png'
        };
        this.gameManager.addItem(item);
      } else {
        const item: Item = {
          id: 'potion_good',
          label: 'Antidote anti-maux',
          path: this.url + '/assets/potion_success.png'
        };
        this.gameManager.addItem(item);
      }
    }
  }
}
