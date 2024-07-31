import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*name : string;
  age : number;
  email : string;
  imagePath : string;
  fname : string;
  flag : boolean;
  vehicles : string[];
  selectedVehicle : string;
  myStyle :{};
  myClass : string;
  
  
  constructor(){
    this.name = "Dhoni";
    this.age = 38;
    this.email = "dhoni@gmail.com";
    this.imagePath = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-69468,resizemode-75,msid-108211803/news/sports/ms-dhonis-cryptic-fb-post-teases-fans-ahead-of-ipl-2024-heres-what-he-wrote.jpg";
    this.fname = "";
    this.flag = true;
    this.vehicles = ["Two wheeler", "three wheeler", "four wheeler"];
    this.selectedVehicle = " ";
    this.myStyle = {'width':'50%','height':'50%','border':'2px solid green','border-radius':'10px'};
    this.myClass="MyClass1";
    
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
changeFlag(){
  this.flag = ! this.flag;
}
setSelectedItem(vec : string){
  this.selectedVehicle = vec;
}
changeStyle(){
  this.myStyle = {'width':'50%','height':'50%','border':'2px solid red','border-radius':'10px'};
}
}*/
sum : number;

constructor(private calc : CalculatorService){
  this.sum = calc.getAddition(10,20);
}
}

