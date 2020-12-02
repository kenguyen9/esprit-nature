import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
