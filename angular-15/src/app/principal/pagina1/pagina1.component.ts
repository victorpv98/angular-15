import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from 'src/app/modelo/modelo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.getData()
  }
  imagen = ""
  datos:any
  getData(){
    let url = "https://pokeapi.co/api/v2/pokemon/ditto"
    this.http.get<Root>(url).subscribe((data) => {
      this.imagen = data.sprites.front_default
      this.datos = data
      this.pokemon.imageUrl = data.sprites.front_default
      this.pokemon.name = data.name
      data.abilities.map(e=>{
        this.pokemon.abilities.push(e.ability.name)
      })
    });
  }
  pokemon = {
    imageUrl:"",
    name :"",
    abilities: [
      ""
    ]
  }
}
