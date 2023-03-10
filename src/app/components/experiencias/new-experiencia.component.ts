import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  tituloE: string = '';
  modalidadE: string = '';
  empresaE: string = '';
  periodoE: string = '';
  ubicacionE: string = '';
  descripcionE: string = '';
  imgE: string = '';

  constructor(private sExperiencia: SExperienciaService,
              private router: Router){

  }


  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new Experiencia(this.tituloE , this.modalidadE , this.empresaE , this.periodoE , this.ubicacionE , this.descripcionE, this.imgE)
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    )
  }

}
