import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maison-quest',
  templateUrl: './maison-quest.component.html',
  styleUrls: ['./maison-quest.component.scss']
})
export class MaisonQuestComponent implements OnInit {

  selectedKey: number;

  constructor(private modalService: NgbModal) { }
  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/coco_door_background.jpg")';

  url = environment.assetUrl;
  ngOnInit(): void {
  }


  public open(content, i): void {
    this.selectedKey = i;
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static',
      keyboard: false
    }).result.then((result) => {
    }, (reason) => {
    });
  }



}
