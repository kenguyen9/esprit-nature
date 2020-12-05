export class Level {
  id: string;
  lvl: number;

  constructor(id: string) {
    this.id = id;
    this.lvl = 0;
  }

  reset(): void{
    this.lvl = 0;
  }
}
