
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MongoService } from "../../../servicios/mongoT.service";

@Component({
  selector: 'listado-tut',
  templateUrl: './listado.component.html'})

export class ListadoTutores implements OnInit {
  kk;
  constructor(
    private servicio: MongoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.traer();
  }

  traer() { // TRAE LOS REGISTROS DESDE LA BASE     
    this.servicio.getPosts().subscribe((regs) => {
      this.kk = regs; 
    })
  }

  eliminar(id) { // PARA ELIMINAR EL REGISTRO POR ID
    let isConfirm = confirm(`Borrar el registro ??`);
    if (isConfirm) {
      this.servicio.deletePost(id).subscribe((data: borrarRegist) => {
        if (data.success) {
          console.log(' BORRADO--');
        } else {
          console.log(' ERROR ');
        }
      });
    } else {
      this.router.navigate(['/listatut']);
    }
  }
}

interface borrarRegist {
  success: boolean,
  reg: any
}
