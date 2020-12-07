import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-boue',
  templateUrl: './boue.component.html',
  styleUrls: ['./boue.component.css']
})
export class BoueComponent implements OnInit {

  constructor() { }

  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/marecages_background.jpg")';

  ngOnInit(): void {
  }

}
