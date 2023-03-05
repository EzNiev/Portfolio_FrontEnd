import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})

export class NewproyectosComponent implements OnInit{
  tituloP: string = '';
  descripcionP: string = '';
  urlP: string = '';
  imgP: string = '';

  constructor(private proyectoS: ProyectosService,
    private router: Router){ }

  ngOnInit(): void{

  }

  onCreate(): void{
    const proy = new Proyectos(this.tituloP, this.descripcionP, this.urlP, this.imgP)
    this.proyectoS.save(proy).subscribe(data => {
      alert("Proyecto agregado");
      this.router.navigate(['']);
    }, err => {
      alert("Falló la carga del proyecto");
      this.router.navigate(['']);
    })
  }
}
