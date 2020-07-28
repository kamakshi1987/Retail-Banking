import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    }else {
      alert("Invalid credentials");
    }
  }

}
