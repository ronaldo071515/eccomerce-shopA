import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styles: [
  ]
})
export class CartModalComponent implements OnInit {

  constructor(private modalService: ModalsService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.confirmModal().emit(false);
  }

}
