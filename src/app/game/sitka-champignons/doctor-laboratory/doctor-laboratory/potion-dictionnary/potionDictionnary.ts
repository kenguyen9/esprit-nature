export interface Ingredient {
  id: string;
  label: string;
  class: string;
}

export interface Potion {
  id: string;
  label: string;
  ingredients: Ingredient[];
}

export class PotionDictionnary {

  constructor(){

  }

  public AQUA_MINERALUS: Ingredient = {
    id: 'aqua',
    label: 'Aqua Mineralus',
    class: 'eau'
  };

  public LIPOUS_ROUGE: Ingredient = {
    id: 'lipous_rouge',
    label: 'Lipous Rouge',
    class: 'gradient-red-orange'
  };

  public SALLUS_VERT: Ingredient = {
    id: 'sallus_vert',
    label: 'Sallus Vert',
    class: 'gradient-green-blue'
  };

  public ACONITE: Ingredient = {
    id: 'aconite',
    label: 'Aconite',
    class: 'aconite'
  };

  public ARMOTENTIA: Ingredient = {
    id: 'armotentia',
    label: 'Armotentia',
    class: 'aconite'
  };

  public GRAPCORNE: Ingredient = {
    id: 'grapcorne',
    label: 'Grapcorne',
    class: 'grapcorne'
  };

  public PIMENTINE: Ingredient = {
    id: 'pimentine',
    label: 'Pimentine',
    class: 'red'
  };

  public SISIMBRE: Ingredient = {
    id: 'sisimbre',
    label: 'Sisimbre',
    class: 'sisimbre'
  };



}


