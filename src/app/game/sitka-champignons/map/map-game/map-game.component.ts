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
  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/map-background.jpg")';
  ngOnInit(): void {
  }

}
