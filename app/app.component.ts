import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio1';
  ID=String;
  Nombre=String;
  Edad=String;
  Genero=String;
  Clase=String;
  

  headers = ["ID", "Nombre", "Edad", "Genero", "Clase"];

  rows = [
    {
      "ID" : "1",
      "Nombre" : "Agustin",
      "Edad" : "28",
      "Genero" : "Hombre",
      "Clase" : "Paladin"
    },
    {
      "ID" : "2",
      "Nombre" : "Leandro",
      "Edad" : "27",
      "Genero" : "Hombre",
      "Clase" : "Druida"
    },
    {
      "ID" : "3",
      "Nombre" : "Lucas",
      "Edad" : "32",
      "Genero" : "Hombre",
      "Clase" : "Warrior"
    },
    {
      "ID" : "4",
      "Nombre" : "Melina",
      "Edad" : "40",
      "Genero" : "Mujer",
      "Clase" : "Mago"
    },
    {
      "ID" : "5",
      "Nombre" : "Wally",
      "Edad" : "50",
      "Genero" : "Hombre",
      "Clase" : "NN"
    },
    {
      "ID" : "6",
      "Nombre" : "Yael",
      "Edad" : "22",
      "Genero" : "Hombre",
      "Clase" : "DH"
    },
  ]



}
