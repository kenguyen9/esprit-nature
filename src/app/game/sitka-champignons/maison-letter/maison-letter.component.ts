import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-maison-letter',
  templateUrl: './maison-letter.component.html',
  styleUrls: ['./maison-letter.component.css']
})
export class MaisonLetterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  typedCode = '';
  success = false;
  public bgurl = 'background-image: url("' + environment.assetUrl + '/assets/coco_letter_background.png")';

  ngOnInit(): void {
  }

  public open(content): void {
    this.success = this.isSuccess();
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    }).result.then((result) => {
    }, (reason) => {
    });
  }

  private isSuccess(): boolean {
    if (this.typedCode.toLocaleLowerCase() === 'caca') {
      return true;
    } else {
      return false;
    }
  }
}
