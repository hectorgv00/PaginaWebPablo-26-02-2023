import { Component, OnInit, ElementRef, HostListener, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  headerOption!:string
  textoFlag:boolean = false
  hamburguesa:boolean = false
  hamburguesaOpen:boolean = false



  constructor(private elementRef: ElementRef, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    
  }

  detectarTextoTop(){
    let texto:any = this.elementRef.nativeElement.querySelector('.textoDashboard');
    let posicionTexto = texto.getBoundingClientRect().top!;
    (posicionTexto <= 0)?this.textoFlag = true:this.textoFlag = false
  }



}
