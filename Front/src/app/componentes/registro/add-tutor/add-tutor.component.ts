
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MongoService } from '../../../servicios/mongoT.service';
import Tutor  from '../../../clases/Tutor';

@Component({
  selector: 'app-add-tutor',
  templateUrl: './add-tutor.component.html'})

export class AddTutor {     
  datosTutor: FormGroup;
  public u: Tutor;
  genero: string[] = ["Femenina", "Masculino", "Otro"];

  constructor(
    private servicio: MongoService,
    private router: Router) { 
      this.crearFormulario(); }

  crearFormulario(){
    this.datosTutor = new FormGroup({
      nombre : new FormControl( '', []),
      telefono : new FormControl( '', []),
      genero :  new FormControl( '', []),
      direccion : new FormControl( '', []),
      fechaNac : new FormControl( '', []),
      email :  new FormControl( '', []),
      password :  new FormControl( '', [])
    })
  } 

  guardar(){
    this.u = this.datosTutor.value; // PARA ASOCIAR FORMULARIO CON CLASE
    console.log(this.u)
    this.servicio.addPost(this.u).subscribe(() => {
      console.log('tutor Agregado !!!! ')
      this.router.navigate(['/listatut']) // PARA IR AL LISTADO
    });
  }
}
