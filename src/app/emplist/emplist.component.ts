import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  emps:Employee[]=[
    {id:101,name:'Tom',salary:40000,dept:'HR'},
    {id:102,name:'Jerry',salary:40000,dept:'HR'},
    {id:103,name:'Bheem',salary:40000,dept:'TR'},
    {id:104,name:'Jaggu',salary:40000,dept:'TR'},
    {id:105,name:'Dolu',salary:40000,dept:'HR'}
  ]
  today:number=Date.now()

  constructor() { }
  weekdays:string[]=['Monday','Tuesday','Wednesday','Thursday',
'Friday','Saturday','Sunday']


  ngOnInit(): void {
  }

}
