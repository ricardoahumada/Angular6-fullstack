import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Tarea } from '../modelos/tarea';

import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'detalle-tarea',
  templateUrl: './detalletarea.component.html'
})

export class DetalleTareaComponent implements OnInit{
  private _sub:any;
  tarea:Tarea;

  constructor(private route: ActivatedRoute, private tareasService:TareasService) {
  }

  ngOnInit() {
    // Subscribe to route params
    this._sub = this.route.params.subscribe(params => {
      console.log('params',params);
      let tid = params['tid'];
      //this.tarea=this.tareasService.getTareaById(tid);
      this.tareasService.getTareaByIdFromAPI(tid).subscribe(
        data => { this.tarea = data;},
        error=>{console.log('Error on receiving tarea');}
      );

    });
  }

}