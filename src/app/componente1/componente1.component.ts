import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  private bandera: boolean;
  public people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'BO'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'BO'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'USA'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'BO'
    }
  ];


  constructor() { 
    this.bandera=false;
  }

  ngOnInit() {
  }
  funcion1(){
    this.bandera = !this.bandera;
  }
}
