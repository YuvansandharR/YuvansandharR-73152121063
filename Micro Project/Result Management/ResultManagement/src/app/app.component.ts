import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResultManagement';
  name : string;

  email : string;

  constructor(){
    this.name = "";
    this.email = "";
    
  }

}
