import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @HostListener('window:resize')onWindowResize(){
    this.getScreenWidth()
  }

  textoFlag:boolean = false
  hamburguesa:boolean = false
  hamburguesaOpen:boolean = false

  HeaderElements:any = [
    {label: 'Home', icon:'home', path:'test'},
    {label: 'Servicios', icon:'show_chart', path:'test'},
    {label: 'Sobre mi', icon:'person', path:'test'},
    {label: 'Casos de éxito', icon:'check_circle', path:'test'},
    {label: 'Contacto', icon:'alternate_email', path:'test'},
  ]


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.getScreenWidth()

  }

  getScreenWidth(){
    let ancho = screen.width;
    (ancho >= 850)? this.hamburguesa = true : this.hamburguesa = false;
  }

  detectarTextoTop(){
    let texto:any = this.elementRef.nativeElement.querySelector('.textoDashboard');
    let posicionTexto = texto.getBoundingClientRect().top!;
    (posicionTexto <= 0)?this.textoFlag = true:this.textoFlag = false
  }

  flagHamburguesaOpen(){
    (this.hamburguesaOpen)?this.hamburguesaOpen = false:this.hamburguesaOpen = true

    console.log(this.hamburguesaOpen)
  }

  menuClicked(event:any){
    console.log(event)
  }
}
