import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviado(): void {
    alert("¡Tus datos se han enviado correctamente!");
  }
}
