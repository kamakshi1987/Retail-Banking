import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Github!!';
  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
    }else {
      alert("Invalid credentials");
    }
  }

}
