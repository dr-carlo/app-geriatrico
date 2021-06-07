

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MongoService } from '../../../servicios/mongo.service';
import Tutor  from '../../../clases/Tutor';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html'})

export class AddPaciente {     
  datosPaciente: FormGroup;
  u: Tutor;
  
  obsocial: string[] = ["Provincial", "Nacional", "Otras"];
  constructor(
    private servicio: MongoService,
    private router: Router) { 
      this.crearFormulario();
    }

  crearFormulario(){
    this.datosPaciente = new FormGroup({
      nombre : new FormControl( '', []),
      email :  new FormControl( '', []),
      dni :  new FormControl( '', []),
      obsocial :  new FormControl( '', [])
    })
  } 

  guardar(){
    this.u = this.datosPaciente.value;
    console.log(this.u)
    this.servicio.addPost(this.u).subscribe(() => {
      // console.log('Tutor Agregado !!!! ')
      this.router.navigate(['/listapac'])
    });
  }
}

