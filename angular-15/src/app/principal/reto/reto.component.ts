import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numero= 0
  hola="hola"
  titulo="este es el titulo de la pagina"
  mostrartexto= false
  onclick(){
    this.mostrartexto = !this.mostrartexto
  }
  texto="El antiguo recinto fenicio contenía un faro que da nombre al cerro Gibralfaro (Jbel-Faro, o monte del faro). Fue Abderramán III quién transformó en fortaleza las antiguas ruinas existentes desde antes de la llegada de los romanos. La fortaleza f"
}
