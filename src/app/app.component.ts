import { query } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CryptoVault';

  isDarkMode: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    let alldrpdwn = document.querySelectorAll('.dropdown-container');
    console.log(alldrpdwn, 'alldrpdwn#');
    alldrpdwn.forEach((item: any) => {
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a, 'a#');
      a.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.el.nativeElement.classList.toggle('active');
        item.classList.toggle('show');
      });
    });

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

  //Responsivemenu
  responsiveMenu: any;
  responsiveContent:any;


  defaultStatus = true;
  openNav(status: any) 
  {
    if (status === this.defaultStatus) 
    {
      this.responsiveMenu = {
        'display': 'block'
      }
      this.responsiveContent={
          'margin-left':'150px'
      }
      this.defaultStatus = false;
    }else
    {
      this.responsiveMenu = {
        'display': null
      }
      this.responsiveContent={
        'margin-left':null
      }
      this.defaultStatus = true;
    }
  }

}