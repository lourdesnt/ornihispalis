import { Component, OnInit } from '@angular/core';
import { Pajaro } from 'app/shared/interfaces/pajaro';
import pajaros from 'app/shared/data/pajaros.json';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  public pajarosList: Pajaro[];

  constructor() {
    this.pajarosList = pajaros;
   }

  ngOnInit(): void {
    
  }
}

