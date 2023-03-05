import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proyecto: Proyectos = null;

  constructor(
    private proyectoS: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar proyecto")
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar proyecto")
      this.router.navigate(['']);
    }
    )
  }
}
