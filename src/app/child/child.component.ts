import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private serv : SubjectService) { }

  @Input() dataToChild;

  @Output() transferEvent = new EventEmitter();

  dataFromChild = "DC1";
  dataFromChildVC = "VC1";
  subjData="";

  ngOnInit(): void {
    this.serv.data.subscribe((val)=>(this.subjData = val))
    this.serv.data.next(1);
  }

  changeSubjData(){
    this.serv.data.next(Math.random())
  }

  
  changeData(){
    this.dataFromChildVC = "VC2";
    this.dataFromChild = "DC2";  }

  sendDataFromChild(){
    this.transferEvent.emit(this.dataFromChild)
  }

  
}
