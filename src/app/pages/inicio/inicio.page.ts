import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  isModalOpen = false; // Estado para el modal

  openHowToBuy() {
    this.isModalOpen = true; // Abrir el modal
  }

  closeModal() {
    this.isModalOpen = false; // Cerrar el modal
  }
}
