
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// PARA ENVIAR LOS CAMPOS AL SERVICIO
import { MongoService } from "../../../servicios/mongo.service";

@Component({
  selector: 'listado-pac',
  templateUrl: './listado.component.html'
})

export class ListadoPacientes implements OnInit {
  rr;

  constructor(
    private servicio: MongoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.traer();
  }

  traer() { // TRAE LOS REGISTROS DESDE LA BASE
    this.servicio.getPosts().subscribe((regs) => {
      this.rr = regs;
    })
  }

  eliminar(id) {
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
      this.router.navigate(['/listapac']);
    }
  }
}

interface borrarRegist {
  success: boolean,
  reg: any
}

