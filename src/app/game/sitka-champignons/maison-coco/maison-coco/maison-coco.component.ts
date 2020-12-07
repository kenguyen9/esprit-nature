import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maison-coco',
  templateUrl: './maison-coco.component.html',
  styleUrls: ['./maison-coco.component.scss']
})
export class MaisonCocoComponent implements OnInit {

  constructor() { }

  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/coco_house.jpg")';
  ngOnInit(): void {
  }

}
