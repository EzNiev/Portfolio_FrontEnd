import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit{
  tituloEd: string = '';
  subtituloEd: string = '';
  periodoEd: string = '';
  descripcionEd: string = '';

  constructor(private educacionS: EducacionService,
              private router: Router){

  }


  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new Educacion(this.tituloEd , this.subtituloEd , this.periodoEd , this.descripcionEd)
    this.educacionS.save(expe).subscribe(data => {
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    )
  }
}
