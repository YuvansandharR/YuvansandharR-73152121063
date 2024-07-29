import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string;
  age : number;
  email : string;
  imagePath :   string;

  constructor(){
    this.name = "Dhoni";
    this.age = 38;
    this.email = "dhoni@gmail.com";
    this.imagePath = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-69468,resizemode-75,msid-108211803/news/sports/ms-dhonis-cryptic-fb-post-teases-fans-ahead-of-ipl-2024-heres-what-he-wrote.jpg";
  }
  changeName(){
    this.name ="Yuvan";
  }
  changeAge(){
    this.age=20;
  }
  changeemail(){
    this.email="hello@gmail.com";
  }
  changeImage(){
  this.imagePath="https://images.news18.com/ibnlive/uploads/2024/04/ms-dhoni-for-t20-world-cup-2024-2024-04-528915dd77ca630b1283779939207eec.jpg?impolicy=website&width=640&height=480";
}
}

