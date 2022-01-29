import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import pajaros from 'app/shared/data/pajaros.json';
import { Pajaro } from 'app/shared/interfaces/pajaro';

@Component({
  selector: 'app-pajaro',
  templateUrl: './pajaro.component.html',
  styleUrls: ['./pajaro.component.css']
})
export class PajaroComponent implements OnInit {

  public pajarosList: Pajaro[];
  public pajaro: Pajaro;

  constructor(private _route: ActivatedRoute, private _router: Router) { 
    
  }

  ngOnInit(): void {
    this.pajarosList = pajaros;
    let id = this._route.snapshot.paramMap.get('id');
    for(var i=0; i<this.pajarosList.length; i++){
        if(id === this.pajarosList[i].id){
           this.pajaro = this.pajarosList[i];
        }
    }
  }

  goBack(): void {
    this._router.navigate(['/especies']);
  }
}
