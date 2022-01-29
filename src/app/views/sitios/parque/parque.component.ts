import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import parques from 'app/shared/data/parques.json';
import pajaros from 'app/shared/data/pajaros.json';
import { Parque } from 'app/shared/interfaces/parque';
import { Pajaro } from 'app/shared/interfaces/pajaro';

@Component({
  selector: 'app-parque',
  templateUrl: './parque.component.html',
  styleUrls: ['./parque.component.css']
})
export class ParqueComponent implements OnInit {

  public parquesList: Parque[];
  public parque: Parque;
  public pajarosList: Pajaro[];
  public especiesExistentes: Pajaro[];

  constructor(private _route: ActivatedRoute, private _router: Router) { 
    

  }

  ngOnInit(): void {
    this.parquesList = parques;
    this.pajarosList = pajaros;
    let id = this._route.snapshot.paramMap.get('id');
    for(var i=0; i<this.parquesList.length; i++){
        if(id == this.parquesList[i].id){
           this.parque = this.parquesList[i];
           break;
        }
    }

    this.especiesExistentes =  this.pajarosList.filter(p => this.parque.especies.includes(p.nombre));

    // for(var a=0; a<this.parque.especies.length; a++){
    //   for(var b=0; b<this.pajarosList.length; b++){
    //     if(this.parque.especies[a]==this.pajarosList[b].nombre){
    //       this.especiesExistentes[a]=this.pajarosList[b];
    //     }
    //   }
    // }
  }

  goBack(): void {
    this._router.navigate(['/sitios']);
  }

}
