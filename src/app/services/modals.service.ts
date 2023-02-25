import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  $showModal = new EventEmitter<any>();
  
  constructor() {  }

  confirmModal() {
    return this.$showModal;
  }
  
}
