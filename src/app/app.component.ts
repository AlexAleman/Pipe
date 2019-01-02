import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea-pipe-password';

  chose = true;
  state: string = 'Hide';
  globalPasswords: string [] = [];
  lastPassword;
  contadorTotal: number [] = [];
  contadorFilas: number = 0;

  getInputPassword(){
    this.lastPassword = $('#password').val();
  }

  addBlock () {
    this.getInputPassword();
    this.globalPasswords.push(this.lastPassword);
    this.contadorFilas += 1;
    this.contadorTotal.push(this.contadorFilas);
  }

  change (word) {
    this.chose = !word;
    this.state = {
      'false': 'Show',
      'true': 'Hide'
    }[String(this.chose)]
  }
}
