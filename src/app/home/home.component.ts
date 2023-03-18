import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nome = "João";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/over.jpg";

  mostrarDataNascimento() {
    alert(`A data de nascimento do João é: ${this.dataNascimento}`)
  }
}
