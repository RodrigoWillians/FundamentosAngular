import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { PaiComponent } from './pai e filho/pai/pai.component';
import { FilhoComponent } from './pai e filho/filho/filho.component';
import { ExemploServicos1Component } from './exemplo servicos/exemplo-servicos1/exemplo-servicos1.component';
import { ExemploServicos2Component } from './exemplo servicos/exemplo-servicos2/exemplo-servicos2.component';
import { CicloDeVidaComponent } from './ciclo de vida/ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo de vida/ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    PaiComponent,
    FilhoComponent,
    ExemploServicos1Component,
    ExemploServicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
