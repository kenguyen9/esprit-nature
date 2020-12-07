import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ronces',
  templateUrl: './ronces.component.html',
  styleUrls: ['./ronces.component.css']
})
export class RoncesComponent implements OnInit {

  constructor() { }

  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/ronces_background.jpg")';
  ngOnInit(): void {
  }

}
