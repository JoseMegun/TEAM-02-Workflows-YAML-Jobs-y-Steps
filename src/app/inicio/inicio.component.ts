import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  isDarkMode: boolean = true;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Recupera el estado del modo oscuro desde localStorage
    const darkMode = localStorage.getItem('darkMode');
    this.isDarkMode = darkMode === 'true'; // Convertir el valor de localStorage a booleano

    // Aplica la clase 'dark' al contenedor si el modo oscuro está activado
    const container = document.querySelector('.container');
    if (this.isDarkMode && container) {
      this.renderer.addClass(container, 'dark');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', String(this.isDarkMode)); // Guardar el estado en localStorage

    // Aplica o elimina la clase 'dark' solo al contenedor
    const container = document.querySelector('.container');
    if (container) {
      if (this.isDarkMode) {
        this.renderer.addClass(container, 'dark');
      } else {
        this.renderer.removeClass(container, 'dark');
      }
    }
  }

}
