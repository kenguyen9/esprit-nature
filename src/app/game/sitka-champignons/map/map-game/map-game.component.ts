import { environment } from './../../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-game',
  templateUrl: './map-game.component.html',
  styleUrls: ['./map-game.component.scss']
})
export class MapGameComponent implements OnInit {

  constructor() { }

  public url = environment.assetUrl;
  ngOnInit(): void {
  }

}
