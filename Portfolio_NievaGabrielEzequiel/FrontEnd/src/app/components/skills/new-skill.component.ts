import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{
  nombreS: string;
  porcentajeS: number;

  constructor(private skillS: SkillsService,
    private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const skill = new Skills(this.nombreS, this.porcentajeS)
    this.skillS.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err =>{
     alert("Falló la carga del skill");
     this.router.navigate(['']); 
    }
    )
  }
}
