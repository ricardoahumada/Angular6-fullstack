import { Component, OnInit } from '@angular/core';

import {Proyecto} from '../modelos/proyecto';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proyectos:Proyecto[]=[
  	new Proyecto(1,'Web Cliente a'),
  	new Proyecto(2,'App Cliente b')
  ];

}
