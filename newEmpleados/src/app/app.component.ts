import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de Empleados';
  empleados: Empleado[] = [
    new Empleado("Alejo", "Zuluaga", "consultor de desarrollo", 1.85),
    new Empleado("Cristian", "Vasquez", "consultor de desarrollo", 1.85),
    new Empleado("Natalia", "Sierra", "Scrum master", 2.0)
  ];
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
