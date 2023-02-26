import { Component, OnInit, ElementRef, HostListener, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from 'src/app/Dashboard/Dashboard/Dashboard.component';

@Component({
  selector: 'Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:resize') onWindowResize() {
    this.getScreenWidth();
  }
  @Input('textoFlag')textoFlag: boolean = false

  headerOption!: string;
  hamburguesa: boolean = false;
  hamburguesaOpen: boolean = false;
  anchoPantalla!:number

  HeaderElements: any = [
    { label: 'Home', icon: 'home', path: 'test' },
    { label: 'Servicios', icon: 'show_chart', path: 'test' },
    { label: 'Sobre mi', icon: 'person', path: 'test' },
    { label: 'Casos de éxito', icon: 'check_circle', path: 'test' },
    { label: 'Contacto', icon: 'alternate_email', path: 'test' },
  ];

  constructor(
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getScreenWidth();
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes['textoFlag']){
      this.textoFlag = changes['textoFlag'].currentValue;
      console.log(this.textoFlag);
      (this.textoFlag === true)? document.querySelector('.iconoYNombre')?.classList.remove('opacity0'):document.querySelector('.iconoYNombre')?.classList.add('opacity0');
    }
  }
  
  ngAfterViewInit() {
    if(this.anchoPantalla >850){this.getHeaderOption(); console.log('eyeyey')}
  }
  getHeaderOption() {
    this.headerOption = this.activatedRoute.snapshot.data['header'];
    let element = document.querySelectorAll('.elementHeader');
    switch (this.headerOption) {
      case 'home':
        element[0].classList.add('elementHeaderActive');
        break;
      case 'servicios':
        element[1].classList.add('elementHeaderActive');
        break;
      case 'sobreMi':
        element[2].classList.add('elementHeaderActive');
        break;
      case 'casosDeExito':
        element[3].classList.add('elementHeaderActive');
        break;
      case 'contacto':
        element[4].classList.add('elementHeaderActive');
        break;

      default:
        break;
    }
  }

  getScreenWidth() {
    this.anchoPantalla = screen.width;
    if (this.anchoPantalla <= 850) {
      this.hamburguesa = true;
    } else {
      this.hamburguesa = false;
    }
  }

  detectarTextoTop() {
    let texto: any =
      this.elementRef.nativeElement.querySelector('.textoDashboard');
    let posicionTexto = texto.getBoundingClientRect().top!;
    console.log(posicionTexto);
    posicionTexto <= 0 ? (this.textoFlag = true) : (this.textoFlag = false);
  }

  flagHamburguesaOpen() {
    this.hamburguesaOpen
      ? (this.hamburguesaOpen = false)
      : (this.hamburguesaOpen = true);

    console.log(this.hamburguesaOpen);
  }

  menuClicked(event: any) {
    console.log(event);
  }
}
