import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private dataBS = new BehaviorSubject<any>("Default Data");

  data = new Subject<any>()
  
  constructor() { }

  setS(val){
    this.data.next(val)
  }

  updateData(val){
    this.dataBS.next(val);
  }
}
