import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trois-chemins',
  templateUrl: './trois-chemins.component.html',
  styleUrls: ['./trois-chemins.component.css']
})
export class TroisCheminsComponent implements OnInit {

  constructor() { }
  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/3_chemins_background.jpg")';
  ngOnInit(): void {
  }

}
