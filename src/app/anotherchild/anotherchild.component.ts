import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-anotherchild',
  templateUrl: './anotherchild.component.html',
  styleUrls: ['./anotherchild.component.css']
})
export class AnotherchildComponent implements OnInit {

  constructor(private serv: SubjectService) { }

  subjData="";
  ngOnInit(): void {
    this.serv.data.subscribe((val)=>(this.subjData = val))
  }

}
