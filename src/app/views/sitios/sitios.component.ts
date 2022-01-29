import { Component, OnInit } from '@angular/core';
import { Parque } from 'app/shared/interfaces/parque';
import parques from 'app/shared/data/parques.json';

@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent implements OnInit {

  public parquesList: Parque[];

  constructor() { 
    this.parquesList = parques;
  }

  ngOnInit(): void {
  }

}
