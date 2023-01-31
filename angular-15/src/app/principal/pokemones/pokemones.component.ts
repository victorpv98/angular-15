import { Component, OnInit ,AfterViewChecked, ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemones } from 'src/app/modelo/pokemones';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit,AfterViewChecked {

  constructor(private http: HttpClient,protected els: ElementRef) {
    this.message = els
   }

  ngOnInit(): void {
    this.getData()
  }
  @ViewChild('message', {static: true}) message: ElementRef;
  ngAfterViewChecked() {
    console.log(`El nombre es: ${this.name}`);
    console.log(`El mensaje es: ${this.message.nativeElement.textContent}`);
  }
  getData() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    this.http.get<Pokemones>(url).subscribe(data => {
      data.results.map(e => {
        this.pokemones.push(e.name)
      })
    });
  }
  pokemones:Array<string> = [ 
  ]
  name= ""
}
