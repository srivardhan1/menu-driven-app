import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  name:string="Srivardhan"
  age:number=22
  city:string="Karimnagar"
  fruits:string[]=["Apple","Mango","Banana","Orange","Grapes"]
  MStatus:boolean=true

  constructor() { }
  Show():void{
    alert("Name is "+this.name)
  }

  ngOnInit(): void {
  }

}
