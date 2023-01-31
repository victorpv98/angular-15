import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { FormsModule } from '@angular/forms';
import { RetoComponent } from './reto/reto.component';
import { AsincronaComponent } from './asincrona/asincrona.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonesComponent } from './pokemones/pokemones.component';



@NgModule({
  declarations: [
    Pagina1Component,
    RetoComponent,
    AsincronaComponent,
    PokemonesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    Pagina1Component,
    RetoComponent,
    AsincronaComponent,
    PokemonesComponent
  ]
})
export class PrincipalModule { }
