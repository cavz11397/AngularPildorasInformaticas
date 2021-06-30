import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Porpiedades para la interpolacion
  nombre = 'Alejo';
  apellido = 'Zuluaga';
  private edad = 15;
  empresa = 'Globalsoft';
  enableInput = false;
  userRegistered = false;
  textOfRegistered = 'No hay nadie registrado';

  getuserRegistered() {
    this.userRegistered = false;
  }

  setUserRegistered(event: Event) {
    // alert('El usuario se acaba de registrar')
    // this.textOfRegistered = 'El usuario se ha registrado';
    // alert(event.returnValue);
    if((<HTMLInputElement>event.target).value==="si"){
      this.textOfRegistered = 'El usuario se ha registrado';
    }else{
      this.textOfRegistered = 'No hay nadie registrado';
    }
  }

  getEdad() {
    return this.edad;
  }

  llamaEmpresa(value: String) { }

}
