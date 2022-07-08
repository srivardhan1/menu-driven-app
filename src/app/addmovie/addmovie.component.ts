import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  moviedata:Movie={id:0,name:'',year:0,rating:0}

  constructor() { }
  Save(movie:Movie):void{
    console.log(movie)
  }

  ngOnInit(): void {
  }

}
