import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../../../services/modals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  showModal!: boolean;

  constructor(private modalService: ModalsService) { }

  ngOnInit(): void {
    this.modalService.confirmModal().subscribe( (valor) => {
      this.showModal = valor;
    });
  }

  openModal() {
    this.showModal = true;
  }

}
