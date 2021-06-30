import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuario';
  mensaje = '';
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  entradas: any;

  constructor(){
    this.entradas=[
      {titulo: "JAVA"},
      {titulo: "PYTHON"},
      {titulo: "JAVASCRIPT"},
      {titulo: "KOTLIN"},
      {titulo: "PASCAL"},
    ]
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = 'Usuario registrado con exito';
  }
}
