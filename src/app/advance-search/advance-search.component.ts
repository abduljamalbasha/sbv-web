import { Component, OnInit } from '@angular/core';


import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AdvanceSearchComponent implements OnInit {

   currentOrientation = 'vertical';

   constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;    
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}
